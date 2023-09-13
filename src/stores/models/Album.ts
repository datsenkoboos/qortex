import type Artist from './Artist';
import type Song from './Song';

export default interface Album {
  artist: Artist;
  releaseYear: number;
  content: Song[];
}
