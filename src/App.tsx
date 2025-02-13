import { useEffect, useState } from 'react';
import './App.scss';
import fetchChar from './API/fetchChar';
import errorHandler from './utils/errorHandler';
import Loader from './components/Loader/Loader';
import { TCharacter } from './types/types';

function App() {
  const [charName, setCharName] = useState<string>('');
  const [results, setResults] = useState<TCharacter[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // + number of characters
  // Need to get "Name - Species"
  // + status
  // + created

  const debouncedName = useDebounce(charName, 500);

  useEffect(() => {
    if (debouncedName) {
      setIsFetching(true);
      fetchChar(debouncedName)
        .then((data) => {
          // console.log(data);
          setResults(data.results);
          setIsFetching(false);
        })
        .catch((err) => errorHandler(err));
    } else {
      setResults([]);
    }
  }, [debouncedName]);

  console.log(results);

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setCharName(e.target.value);
          }}
          className="search"
          type="search"
          name="search"
          id="search"
          placeholder="Search characters..."
          autoFocus
        />
        <label htmlFor="search">{isFetching ? 'Searching...' : 'XXX'}</label>
      </div>
      <div className="container">{isFetching ? <Loader /> : 'RESLUTS'}</div>
    </>
  );
}

export default App;

// locationInput(value) {
//   clearTimeout(this.debounceId);
//   this.debounceId = setTimeout(() => {
//     this.locationInput = value;
//     this.store.geoFetchHandler(value);
//   }, 500);
// },
