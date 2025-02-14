import { TResponse } from '../../types/types';
import Card from './Card';
import classes from './CardList.module.scss';

type TCardList = {
  result: TResponse | null;
};

const CardList = ({ result }: TCardList) => {
  return (
    result && (
      <ul className={classes['card-list']}>
        {result?.results.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>
    )
  );
};

export default CardList;
