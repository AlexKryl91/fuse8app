import { TResponse } from '../types/types';
import controlledFetch from './controlledFetch';
import errorHandler from '../utils/errorHandler';

async function fetchChar(name: string, page: number): Promise<TResponse> {
  const encoded = encodeURIComponent(name.toLowerCase());

  const response = await controlledFetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${encoded}`
  )
    .then((data) => data.json())
    .catch((err) => {
      errorHandler(err);
      return [];
    });
  return await response;
}

export default fetchChar;