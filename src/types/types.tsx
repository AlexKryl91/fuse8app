type TPlace = {
  name: string;
  url: string;
};

type TInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type TCharacter = {
  id: number;
  name: string;
  status: string;
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
