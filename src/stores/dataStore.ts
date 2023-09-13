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
  },
  actions: {
    getAlbums(): typeof this.data.albums {
      const data = JSON.parse(JSON.stringify(this.data.albums));

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
    addSong(albumId: number, name: string) {
      if (!localStorage.getItem('albums')) {
        localStorage.setItem('albums', JSON.stringify({}));
      }
      const data: { [id: number]: Song[] } = JSON.parse(
        localStorage.getItem('albums')!
      );
      data[albumId] = data[albumId]
        ? [
            ...data[albumId],
            {
              name,
              numberInAlbum: this.getAlbums()[albumId].content.length + 1,
            },
          ]
        : [
            {
              name,
              numberInAlbum: this.getAlbums()[albumId].content.length + 1,
            },
          ];
      localStorage.setItem('albums', JSON.stringify(data));
    },
  },
});

export default useDataStore;
