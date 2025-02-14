import { TResponse } from '../../types/types';
import classes from './Pagination.module.scss';

type TPagination = {
  result: TResponse | null;
  currentPage: number;
  prevHandler: () => void;
  nextHandler: () => void;
};

const Pagination = ({
  result,
  currentPage,
  prevHandler,
  nextHandler,
}: TPagination) => {
  const response = result as TResponse;

  const { prev, next } = response.info;

  const styleLeftBtn = `${classes.btn} ${prev ? '' : classes.disabled}`;
  const styleRightBtn = `${classes.btn} ${next ? '' : classes.disabled}`;

  return (
    response.info.pages > 1 && (
      <div className={classes.wrapper}>
        <button onClick={prevHandler} type="button" className={styleLeftBtn}>
          &larr;
        </button>

        <div className={classes['current-page']}>{currentPage}</div>

        <button onClick={nextHandler} type="button" className={styleRightBtn}>
          &rarr;
        </button>

        <span className={classes.total}>Total: {response.info.pages}</span>
      </div>
    )
  );
};

export default Pagination;
