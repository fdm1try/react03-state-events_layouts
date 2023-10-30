import classes from './ShopCard.module.css';
import PropTypes from 'prop-types';

const ShopCard = ({card}) => {
  return (
    <div className={classes['store-card']}>
      <div className={classes['store-card-header']}>
        <h2 className={classes['store-card-title']}>{card.name}</h2>
        <div className={classes['store-card-color']}>{card.color}</div>
      </div>
      <img className={classes['store-card-image']} src={card.img} />
      <div className={classes['store-card-footer']}>
        <span className={classes['store-card-price']}>${card.price}</span>
        <button className={classes['store-card-add_button']}>Add to cart</button>
      </div>
    </div>

  )
}

export { ShopCard };

ShopCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  })
}