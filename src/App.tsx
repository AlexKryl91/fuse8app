import { ChangeEvent, useEffect, useState } from 'react';
import './App.scss';
import fetchChar from './API/fetchChar';
import Loader from './components/Loader/Loader';
import { TCharacter } from './types/types';
import useDebounce from './hooks/useDebounce';
import InputSearch from './components/InputSearch/InputSearch';
import Empty from './components/Empty/Empty';
import CardList from './components/CardList/CardList';

function App() {
  const [isInit, setIisInit] = useState<boolean>(true);
  const [inputName, setInputName] = useState<string>('');
  const [result, setResult] = useState<TCharacter[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value.trim();
    setInputName(name);
    if (!name) {
      setIisInit(true);
    }
  };

  const debouncedName = useDebounce(inputName, 500);

  useEffect(() => {
    if (debouncedName.length > 3) {
      setIsFetching(true);
      fetchChar(debouncedName).then((data) => {
        setResult(data ?? []);
        setIsFetching(false);
        setIisInit(false);
      });
    }
  }, [debouncedName]);

  const showEmpty = !isFetching && !isInit && result.length === 0;
  const showCards = !showEmpty;

  return (
    <>
      <h1 className="sr-only">Find your favorite "Rick and Morty" character</h1>

      <InputSearch
        onChange={inputHandler}
        isFetching={isFetching}
        isInit={isInit}
        result={result}
      />

      {isFetching && <Loader />}
      {showEmpty && <Empty />}
      {showCards && <CardList result={result} />}
    </>
  );
}

export default App;
