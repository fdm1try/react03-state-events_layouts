import classes from './Store.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CardsView } from '../CardsView';
import { ListView } from '../ListView';
import { IconSwitch } from '../IconSwitch/IconSwitch';

const Store = ({ items }) => {
  const [cardsView, setCardsView] = useState(true);

  const getView = () => cardsView ? <CardsView cards={items} /> : <ListView items={items} />;

  const switchView = () => setCardsView((prevState) => !prevState);

  return (
    <div className={classes['store']}>
      <IconSwitch icon={`${cardsView ? 'view_module' : 'view_list'}`} onSwitch={switchView} />
      <div className={classes['store-items']}>
        {getView()}
      </div>
    </div>
  );
}

Store.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string
  }))
}

export { Store };
