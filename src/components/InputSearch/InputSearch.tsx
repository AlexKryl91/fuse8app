import classes from './InputSearch.module.scss';
import { ChangeEvent } from 'react';
import { TAppState, TResponse } from '../../types/types';

type TInputSearch = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  state: TAppState;
  result: TResponse | null;
};

const InputSearch = ({ onChange, state, result }: TInputSearch) => {
  const response = result as TResponse;

  let status;

  switch (state) {
    case 'loading':
      status = 'Searching...';
      break;
    case 'empty':
      status = 'No matches';
      break;
    case 'ready':
      status = `Found characters: ${response.info.count}`;
      break;
    default:
      status = '';
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
