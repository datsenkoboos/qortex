import { defineStore } from 'pinia';
import { type Artist, type Album, type Song } from './models';
import { artists, albums } from '@/data';

const useDataStore = defineStore('data', {
  state: (): {
    data: {
      artists: {
        [id: number]: Artist;
      };
      albums: {
        [id: number]: Album;
      };
    };
  } => {
    return {
      data: {
        artists: artists,
        albums: albums,
      },
    };
  },
  getters: {
    artists: (state): typeof state.data.artists => {
      return state.data.artists;
    },
    albums: (state): typeof state.data.albums => {
      const data = JSON.parse(JSON.stringify(state.data.albums));

      if (!localStorage.getItem('albums')) {
        return data;
      }

      const localData: { [id: number]: Song[] } = JSON.parse(
        localStorage.getItem('albums')!
      );
      for (const id in localData) {
        data[id].content.push(...localData[id]);
      }
      return data;
    },
  },
  actions: {
    addSong(albumId: number, name: string, numberInAlbum: number) {
      if (!localStorage.getItem('albums')) {
        localStorage.setItem('albums', JSON.stringify({}));
      }
      const data: { [id: number]: Song[] } = JSON.parse(
        localStorage.getItem('albums')!
      );
      data[albumId] = data[albumId]
        ? [...data[albumId], { name, numberInAlbum }]
        : [{ name, numberInAlbum }];
      localStorage.setItem('albums', JSON.stringify(data));
    },
  },
});

export default useDataStore;
