import classes from './CardsView.module.css';
import PropTypes from 'prop-types';
import { ShopCard } from './ShopCard';

const CardsView = ({ cards }) => {
  return (
    <div className={classes['store-items-cards']}>
      {cards.map((card) => <ShopCard key={card.id} card={card} />)}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  }))
}

export { CardsView };
