import classes from './IconSwitch.module.css';
import PropTypes from 'prop-types';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <button className={`${classes['store-switch_view']} material-symbols-outlined`} onClick={onSwitch}>{icon}</button>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
};

export { IconSwitch };
