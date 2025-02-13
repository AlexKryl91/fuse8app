import { TResponse } from '../types/types';
import controlledFetch from './controlledFetch';

async function fetchChar(name: string): Promise<TResponse> {
  const encoded = encodeURIComponent(name.toLowerCase());
  const response = await controlledFetch(
    `https://rickandmortyapi.com/api/character/?name=${encoded}`
  );
  return await response.json();
}

export default fetchChar;
