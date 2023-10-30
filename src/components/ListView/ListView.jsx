import classes from './ListView.module.css';
import PropTypes from 'prop-types';
import { ShopItem } from './ShopItem';

const ListView = ({ items }) => {
  return (
    <div className={classes['store-items-list']}>
      {items.map((item) => <ShopItem key={item.id} item={item} />)}
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  }))
}

export { ListView };
