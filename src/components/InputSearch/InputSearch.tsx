import classes from './InputSearch.module.scss';
import { ChangeEvent } from 'react';

type TInputSearch = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  status: string;
};

const InputSearch = ({ onChange, status }: TInputSearch) => {
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
