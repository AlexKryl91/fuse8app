export type TAppState = 'init' | 'loading' | 'empty' | 'ready';

type TPlace = {
  name: string;
  url: string;
};

export type TInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type TCharacter = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: TPlace;
  location: TPlace;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type TResponse = {
  info: TInfo;
  results: TCharacter[];
};
