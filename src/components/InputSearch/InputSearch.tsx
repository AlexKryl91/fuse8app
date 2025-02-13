import classes from './InputSearch.module.scss';
import { ChangeEvent } from 'react';
import { TCharacter } from '../../types/types';

type TInputSearch = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isFetching: boolean;
  isInit: boolean;
  result: TCharacter[];
};

const InputSearch = ({
  onChange,
  isFetching,
  result,
  isInit,
}: TInputSearch) => {
  let status = '';

  if (isFetching) {
    status = 'Searching...';
  } else if (result.length === 0 && !isInit) {
    status = 'No matches';
  } else if (result.length !== 0) {
    status = `Found characters: ${result.length}`;
  }

  return (
    <div className={classes['input-wrapper']}>
      <input
        onChange={onChange}
        className={classes.search}
        type="search"
        name="search"
        id="search"
        placeholder="Search characters..."
        autoFocus
      />
      <label className={classes.label} htmlFor="search">
        {status}
      </label>
    </div>
  );
};

export default InputSearch;
