import classes from './ShopItem.module.css';
import PropTypes from 'prop-types';

const ShopItem = ({item}) => {
  return (
    <div className={classes['store-item']}>
      <img className={classes['store-item-image']} src={item.img} />
      <h2 className={classes['store-item-title']}>{item.name}</h2>
      <div className={classes['store-item-color']}>{item.color}</div>
      <div className={classes['store-item-price']}>${item.price}</div>
      <button className={classes['store-item-add_button']}>Add to cart</button>
    </div>
  )
}

export { ShopItem };

ShopItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  })
}