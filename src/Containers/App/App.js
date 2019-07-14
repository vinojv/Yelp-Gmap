import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import LeftPanel from './../../Components/LeftPanel';
import './App.css';


class App extends Component {
  static propTypes = {
    restaurants: PropTypes.array,
    loading: PropTypes.bool,
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    restaurants: [],
    loading: false,
    errorMessage: '',
    dispatch: f => f,
  };

  state = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places: [],
    coordinates: {},
  };

  apiHasLoaded = (map, maps) => {
    this.setState({
      useCurentLocation: false,
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
      showOnMap: false,
    });
  };

  addPlace = (place) => {
    this.props.dispatch(getRestaurants({
      location: place.formatted_address,
    }));
    this.setState({
      useCurentLocation: false,
    });
  };

  onUseMyLocation = () => {
    const { dispatch } = this.props;
    navigator.geolocation.getCurrentPosition((val) => {
      console.log('get geo location', val.coords);
      this.setState({
        useCurentLocation: true,
        coordinates: val.coords,
      });
      dispatch(getRestaurants({
        longitude: val.coords.longitude,
        latitude: val.coords.latitude,
      }));
    });
  };

  showMapOnChange = (val) => {
    this.setState({
      showOnMap: val,
    });
  };


  render() {
    let { restaurants, loading, errorMessage, dispatch } = this.props;
    const { coordinates, useCurentLocation } = this.state;
    return (
      <div className="App">
        <LeftPanel
          useCurentLocation={useCurentLocation}
          onUseMyLocation={this.onUseMyLocation}
          showMapOnChange={this.showMapOnChange}
          showMap={this.state.showOnMap}
          mapInstance={this.state.mapInstance}
          mapApi={this.state.mapApi}
          mapApiLoaded={this.state.mapApiLoaded}
          apiHasLoaded={this.apiHasLoaded}
          addPlace={this.addPlace}
          restaurants={restaurants}
        />
        <div className={classNames('mainContainer', {
          showOnMap: this.state.showOnMap,
        })}>
          <GoogleMap
            coordinates={coordinates}
            mapInstance={this.state.mapInstance}
            mapApi={this.state.mapApi}
            places={restaurants}
            mapApiLoaded={this.state.mapApiLoaded}
            apiHasLoaded={this.apiHasLoaded}
            addPlace={this.addPlace}
            dispatch={dispatch}
          />
        </div>
        {loading && <span className='loading'> Loading... </span>}
        {errorMessage && <span className='errorMessage'> {errorMessage} </span>}
      </div>
    );
  }
}

export default connect()(App);
