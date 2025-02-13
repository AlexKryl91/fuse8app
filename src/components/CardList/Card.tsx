import classes from './Card.module.scss';
import { TCharacter } from '../../types/types';

const Card = ({ name, species, status, created, url }: TCharacter) => {
  const styleStatus = `${classes['card__status']} ${
    status === 'Alive' ? classes.alive : classes.dead
  }`;

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const date = new Date(created).toLocaleDateString(undefined, options);

  return (
    <li className={classes.card}>
      <a
        className={classes['card__link']}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={classes['card__header']}
        >{`${name} - ${species}`}</span>

        <span className={styleStatus}>
          Status: <strong>{status}</strong>
        </span>

        <span className={classes['card__date']}>Created: {date}</span>
      </a>
    </li>
  );
};

export default Card;
