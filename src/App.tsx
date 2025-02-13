import { ChangeEvent, useEffect, useState } from 'react';
import './App.scss';
import fetchChar from './API/fetchChar';
// import errorHandler from './utils/errorHandler';
import Loader from './components/Loader/Loader';
import { TCharacter } from './types/types';
import useDebounce from './hooks/useDebounce';
import InputSearch from './components/InputSearch/InputSearch';
import Empty from './components/Empty/Empty';

function App() {
  const [inputName, setInputName] = useState<string>('');
  const [results, setResults] = useState<TCharacter[] | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // + number of characters
  // Need to get "Name - Species"
  // + status
  // + created

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value.trim();
    setInputName(name);
  };

  const debouncedName = useDebounce(inputName, 500);

  useEffect(() => {
    if (debouncedName.length > 3) {
      setIsFetching(true);
      fetchChar(debouncedName).then((data) => {
        setResults(data ?? []);
        setIsFetching(false);
      });
    }
  }, [debouncedName]);

  // console.log(results);

  const count = 8;

  let status = '';
  if (isFetching) {
    status = 'Searching...';
  } else if (results) {
    status = results.length === 0 ? 'No matches' : `Found characters: ${count}`;
  }

  return (
    <>
      <div>
        {/* <input
          onChange={inputHandler}
          className="search"
          type="search"
          name="search"
          id="search"
          placeholder="Search characters..."
          autoFocus
        />
        <label htmlFor="search">{status}</label> */}
        <InputSearch onChange={inputHandler} status={status} />
      </div>
      <div className="container">
        {isFetching && <Loader />}
        {results === null ? 'INITIAL STATE' : results.length === 0 && <Empty />}
      </div>
    </>
  );
}

export default App;
