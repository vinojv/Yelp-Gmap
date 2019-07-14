import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { googleMapKeys } from '../../Constants';
import RestaurantDetail from '../RestaruantDetail/RestaurantDetail';
import AutoComplete from '../Searchbox/Searchbox';
import './GoogleMap.css';


// InfoWindow component
const InfoWindow = ({ place }) => (
  <RestaurantDetail
    classes={{
      wrapper: 'infoWindow',
    }}
    place={place} />
);

// Marker component
const Marker = ({ place }) => (
  <Fragment>
    <div className="marker" />
    <InfoWindow place={place} />
  </Fragment>
);

function GoogleMap(props) {
  const {
    mapApiLoaded, mapInstance, mapApi, addPlace, apiHasLoaded, coordinates,
    places,
  } = props;

  return (
    <Fragment>
      {mapApiLoaded && (
        <div className='mainContainerSearchContainer'>
          <AutoComplete
            classes={{
              wrapper: 'mainContainerSearch',
            }}
            map={mapInstance}
            mapApi={mapApi}
            addplace={addPlace}
          />
        </div>
      )}
      <GoogleMapReact
        bootstrapURLKeys={googleMapKeys}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        center={{
          lat: coordinates && coordinates.latitude || 0,
          lng: coordinates && coordinates.longitude || 0,
        }}
        defaultZoom={13}
      >
        {places.map(place =>
          (<Marker
            key={place.id}
            lat={place.coordinate.latitude}
            lng={place.coordinate.longitude}
            place={place}
          />))}
      </GoogleMapReact>
    </Fragment>
  );
}

GoogleMap.defaultProps = {
  mapApiLoaded: false,
  mapInstance: null,
  mapApi: null,
  addPlace: f => f,
  apiHasLoaded: false,
  coordinates: {},
  places: [],
};
const coordinates = PropTypes.shape({
  longitude: PropTypes.string,
  latitude: PropTypes.string,
});
GoogleMap.propTypes = {
  mapApiLoaded: PropTypes.bool,
  mapInstance: PropTypes.object,
  mapApi: PropTypes.object,
  addPlace: f => f,
  apiHasLoaded: PropTypes.bool,
  coordinates,
  places: PropTypes.arrayOf(PropTypes.shape({
    coordinates,
    name: PropTypes.string,
  })),
};

export default GoogleMap;