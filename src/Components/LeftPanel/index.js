import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import RestaurantDetail from '../RestaruantDetail/RestaurantDetail';
import LeftPanelHeader from './Header/Header';
import './leftPane.css';

const ListingRestaurants = ({ showMap, restaurants }) => (
  <div className={classNames('restaurantsLocations', {
    showMap,
  })}>
    {restaurants.length === 0 && <span>
        No Restaurants
      </span>}
    {restaurants.map((place) => (
      <RestaurantDetail
        key={place.id}
        place={place}
      />
    ))}
  </div>
);

ListingRestaurants.defaultProps = {
  showMap: false,
  restaurants: [],
};

ListingRestaurants.propTypes = {
  showMap: PropTypes.bool,
  restaurants: PropTypes.array,
};

const LeftPane = (props) => (
  <div className="leftPaneContainer">
    <LeftPanelHeader {...props} />
    <ListingRestaurants {...props} />
  </div>
);

export default LeftPane;