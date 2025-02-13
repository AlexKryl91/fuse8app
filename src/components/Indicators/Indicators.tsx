import classes from './Indicators.module.scss';

export const Empty = () => {
  return (
    <div className={classes.container}>
      <img src="./x-mark.svg" width={160} height={160} alt="No name match" />
    </div>
  );
};

export const Loader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

