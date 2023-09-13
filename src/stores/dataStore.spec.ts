import useStore from './dataStore';
import { setActivePinia, createPinia } from 'pinia';
import { beforeAll, beforeEach, describe, expect, test, vi } from 'vitest';
import { artists, albums } from '@/data';

const LocalStorageMock = (() => {
  const storage: { [key: string]: string } = {};
  return {
    getItem: vi.fn((key: string) => storage[key]),
    setItem: vi.fn((key: string, value: string) => (storage[key] = value)),
  };
})();

describe('Data Store', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', { value: LocalStorageMock });
  });
  beforeEach(() => {
    setActivePinia(createPinia());
    // LocalStorageMock state reset
    LocalStorageMock.setItem('albums', JSON.stringify({}));
  });
  describe('state', () => {
    test('data.artists - should be @/data artists', () => {
      const store = useStore();
      expect(store.data.artists).toStrictEqual(artists);
    });
    test('data.albums - should be @/data albums', () => {
      const store = useStore();
      expect(store.data.albums).toStrictEqual(albums);
    });
  });
  describe('getters', () => {
    test('artists - should return @/data artists', () => {
      const store = useStore();
      expect(store.artists).toStrictEqual(artists);
    });
  });
  describe('actions', () => {
    test('getAlbums - should return @/data albums if no localStorage albums were set', () => {
      const store = useStore();
      expect(store.getAlbums()).toStrictEqual(albums);
    });
    test('getAlbums - should return @/data albums filled with songs from localStorage if localStorage albums were set', () => {
      const store = useStore();
      const firstSong = { name: 'First Song', numberInAlbum: -1 };
      const secondSong = { name: 'Second Song', numberInAlbum: 100 };
      LocalStorageMock.setItem(
        'albums',
        JSON.stringify({
          '1': [firstSong, secondSong],
        })
      );
      expect(store.getAlbums()).toStrictEqual({
        ...albums,
        '1': {
          artist: albums['1'].artist,
          releaseYear: albums['1'].releaseYear,
          content: [...albums['1'].content, firstSong, secondSong],
        },
      });
    });
    test('addSong - should add song to localStorage and set valid number in album', () => {
      const store = useStore();
      const firstSong = { name: 'First Song' };
      const secondSong = { name: 'Second Song' };

      store.addSong(1, firstSong.name);
      expect(JSON.parse(LocalStorageMock.getItem('albums'))).toStrictEqual({
        '1': [
          {
            ...firstSong,
            numberInAlbum: store.getAlbums()['1'].content.length,
          },
        ],
      });

      store.addSong(1, secondSong.name);
      expect(JSON.parse(LocalStorageMock.getItem('albums'))).toStrictEqual({
        '1': [
          {
            ...firstSong,
            numberInAlbum: store.getAlbums()['1'].content.length - 1,
          },
          {
            ...secondSong,
            numberInAlbum: store.getAlbums()['1'].content.length,
          },
        ],
      });
    });
  });
});
