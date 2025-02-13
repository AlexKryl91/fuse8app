import classes from './Empty.module.scss';

const Empty = () => {
  return (
    <div className={classes.empty}>
      <img src="./x-mark.svg" width={160} height={160} alt="No name match" />
    </div>
  );
};

export default Empty;
