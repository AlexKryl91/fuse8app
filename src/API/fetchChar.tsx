import { TCharacter } from '../types/types';
import controlledFetch from './controlledFetch';
import errorHandler from '../utils/errorHandler';

async function fetchChar(name: string): Promise<TCharacter[]> {
  const encoded = encodeURIComponent(name.toLowerCase());

  const response = await controlledFetch(
    `https://rickandmortyapi.com/api/character/?name=${encoded}`
  )
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      return data.results;
    })
    .catch((err) => {
      errorHandler(err);
      return [];
    });
  return await response;
}

export default fetchChar;
