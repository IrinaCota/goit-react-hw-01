import css from './Profile.module.css';

import PropTypes from 'prop-types';

function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
  return (
    <div className={css.card}>
      <div className={css.personalInfo}>
        <img className={css.avatar} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.figures}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.figures}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.figures}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};