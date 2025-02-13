import { TCharacter } from '../../types/types';
import Card from './Card';
import classes from './CardList.module.scss';

type TCardList = {
  result: TCharacter[];
};

const CardList = ({ result }: TCardList) => {
  return (
    <ul className={classes['card-list']}>
      {result.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CardList;
