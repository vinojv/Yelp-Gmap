import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './RestaurantDetail.css';

const RestaurantDetail = ({ place, classes }) => (
  <div
    className={classNames('restaurant', classes.wrapper)}
  >
    <div
      className={classNames('restaurantDetails')}
      onClick={() => {
        if (!place.url) return;
        const a = document.createElement('a');
        a.href = place.url;
        a.target = '_blank';
        a.click();
      }}
    >
      <div className='restaurantName'>{place.name}</div>
      <div>
        <span> {place.rating}{' '} </span>
        <span className='rating'>
              {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
            </span>
        <span className='ratingRemaining'>
              {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
            </span>
      </div>

      <div className='restaurantDesc'>{place.location}</div>
      <div className={classNames('restaurantStatus', {
        open: !place.closed,
      })}>{place.closed ? 'Closed' : 'Open'}</div>
    </div>
    <div className='restaurantImage'
         style={{
           backgroundImage: `url(${place.imageUrl})`,
         }}
    >

    </div>
  </div>
);

RestaurantDetail.defaultProps = {
  classes: {},
  place: {},
};

RestaurantDetail.propTypes = {
  classes: PropTypes.object,
  place: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    closed: PropTypes.bool,
    imageUrl: PropTypes.string,
    url: PropTypes.string,
  }),
};
export default RestaurantDetail;