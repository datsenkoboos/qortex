const artists = {
  '1': { name: 'Taylor Swift' },
  '2': { name: 'Ed Sheeran' },
  '3': { name: 'Ariana Grande' },
  '4': { name: 'Drake' },
  '5': { name: 'Beyoncé' },
  '6': { name: 'Justin Bieber' },
  '7': { name: 'Rihanna' },
  '8': { name: 'Billie Eilish' },
  '9': { name: 'Post Malone' },
  '10': { name: 'Kanye West' },
};
const albums = {
  '1': {
    artist: {
      name: 'Taylor Swift',
    },
    releaseYear: 2022,
    content: [
      { name: 'Willow', numberInAlbum: 1 },
      { name: 'Champagne Problems', numberInAlbum: 2 },
      { name: 'Gold Rush', numberInAlbum: 3 },
      { name: 'Tis The Damn Season', numberInAlbum: 4 },
      { name: 'No Body, No Crime', numberInAlbum: 5 },
    ],
  },
  '2': {
    artist: {
      name: 'Ed Sheeran',
    },
    releaseYear: 2021,
    content: [
      { name: 'Bad Habits', numberInAlbum: 1 },
      { name: 'Shivers', numberInAlbum: 2 },
      { name: 'Visiting Hours', numberInAlbum: 3 },
      { name: 'Overpass Graffiti', numberInAlbum: 4 },
      { name: 'The Joker And The Queen', numberInAlbum: 5 },
    ],
  },
  '3': {
    artist: {
      name: 'Ariana Grande',
    },
    releaseYear: 2021,
    content: [
      { name: 'positions', numberInAlbum: 1 },
      { name: '34+35', numberInAlbum: 2 },
      { name: 'motive', numberInAlbum: 3 },
      { name: 'just like magic', numberInAlbum: 4 },
      { name: 'off the table', numberInAlbum: 5 },
    ],
  },
  '4': {
    artist: {
      name: 'Drake',
    },
    releaseYear: 2021,
    content: [
      { name: 'Champagne Poetry', numberInAlbum: 1 },
      { name: "Papi's Home", numberInAlbum: 2 },
      { name: 'Girls Want Girls', numberInAlbum: 3 },
      { name: 'In the Bible', numberInAlbum: 4 },
      { name: 'Love All', numberInAlbum: 5 },
    ],
  },
  '5': {
    artist: {
      name: 'Beyoncé',
    },
    releaseYear: 2020,
    content: [
      { name: 'Black Parade', numberInAlbum: 1 },
      { name: 'ALREADY', numberInAlbum: 2 },
      { name: 'Savage Remix', numberInAlbum: 3 },
      { name: 'Brown Skin Girl', numberInAlbum: 4 },
      { name: 'My Power', numberInAlbum: 5 },
    ],
  },
  '6': {
    artist: {
      name: 'Justin Bieber',
    },
    releaseYear: 2021,
    content: [
      { name: 'Peaches', numberInAlbum: 1 },
      { name: 'Hold On', numberInAlbum: 2 },
      { name: 'Anyone', numberInAlbum: 3 },
      { name: 'Holy', numberInAlbum: 4 },
      { name: 'Off My Face', numberInAlbum: 5 },
    ],
  },
  '7': {
    artist: {
      name: 'Rihanna',
    },
    releaseYear: 2020,
    content: [
      { name: 'Diamonds', numberInAlbum: 1 },
      { name: 'We Found Love', numberInAlbum: 2 },
      { name: 'Umbrella', numberInAlbum: 3 },
      { name: 'Work', numberInAlbum: 4 },
      { name: 'Only Girl (In The World)', numberInAlbum: 5 },
    ],
  },
  '8': {
    artist: {
      name: 'Billie Eilish',
    },
    releaseYear: 2021,
    content: [
      { name: 'Happier Than Ever', numberInAlbum: 1 },
      { name: 'Oxytocin', numberInAlbum: 2 },
      { name: 'NDA', numberInAlbum: 3 },
      { name: 'Therefore I Am', numberInAlbum: 4 },
      { name: 'Your Power', numberInAlbum: 5 },
    ],
  },
  '9': {
    artist: {
      name: 'Post Malone',
    },
    releaseYear: 2020,
    content: [
      { name: 'Circles', numberInAlbum: 1 },
      { name: 'Rockstar', numberInAlbum: 2 },
      { name: 'Sunflower', numberInAlbum: 3 },
      { name: 'Congratulations', numberInAlbum: 4 },
      { name: 'Goodbyes', numberInAlbum: 5 },
    ],
  },
  '10': {
    artist: {
      name: 'Kanye West',
    },
    releaseYear: 2021,
    content: [
      { name: 'Hurricane', numberInAlbum: 1 },
      { name: 'Praise God', numberInAlbum: 2 },
      { name: 'Jail', numberInAlbum: 3 },
      { name: 'Moon', numberInAlbum: 4 },
      { name: 'Donda', numberInAlbum: 5 },
    ],
  },
};
export { artists, albums };
