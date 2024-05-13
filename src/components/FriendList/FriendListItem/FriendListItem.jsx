import clsx from "clsx";
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
    const status = clsx(css.offline, isOnline && css.online)
    return (
        <div>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};