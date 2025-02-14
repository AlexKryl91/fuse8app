import { ChangeEvent, useEffect, useState } from 'react';
import './App.scss';
import fetchChar from './API/fetchChar';
import { TAppState, TResponse } from './types/types';
import useDebounce from './hooks/useDebounce';
import InputSearch from './components/InputSearch/InputSearch';
import CardList from './components/CardList/CardList';
import { Loader, Empty } from './components/Indicators/Indicators';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [appState, setAppState] = useState<TAppState>('init');
  const [inputName, setInputName] = useState<string>('');
  const [result, setResult] = useState<TResponse | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value.trim();
    if (name.length > 3) {
      setInputName(name);
      setCurrentPage(1);
    }
    if (!name || name.length <= 3) {
      setAppState('init');
    }
  }

  function incrementPage() {
    setCurrentPage(currentPage + 1);
  }
  function decrementPage() {
    setCurrentPage(currentPage - 1);
  }

  const debouncedName = useDebounce(inputName, 500);

  useEffect(() => {
    if (debouncedName) {
      setAppState('loading');
      fetchChar(debouncedName, currentPage).then((data) => {
        if (data.results) {
          setResult(data);
          setAppState('ready');
        } else {
          setResult(null);
          setAppState('empty');
        }
      });
    }
  }, [debouncedName, currentPage]);

  return (
    <>
      <h1 className="sr-only">Find your favorite "Rick and Morty" character</h1>

      <InputSearch onChange={inputHandler} state={appState} result={result} />

      {appState === 'loading' && <Loader />}
      {appState === 'empty' && <Empty />}
      {appState === 'ready' && (
        <>
          <CardList result={result} />
          <Pagination
            currentPage={currentPage}
            result={result}
            prevHandler={decrementPage}
            nextHandler={incrementPage}
          />
        </>
      )}
    </>
  );
}

export default App;
