import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Searchbox.css';

/* uses Gmap tools from showing suggestions*/
class InputSuggestion extends Component {
  static defaultProps = {
    classes: {},
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
  };
  static propTypes = {
    mapApiLoaded: PropTypes.bool,
    mapInstance: PropTypes.object,
    mapApi: PropTypes.object,
    classes: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    if (!mapApi) return;
    const options = {};
    this.autoComplete = new mapApi.places.Autocomplete(
      this.searchInput,
      options,
    );
    this.autoComplete.addListener('place_changed', this.onPlaceChanged);
    this.autoComplete.bindTo('bounds', map);
  }

  componentWillUnmount({ mapApi } = this.props) {
    if (!mapApi) return;
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlaceChanged = ({ map, addplace } = this.props) => {
    const place = this.autoComplete.getPlace();

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    addplace(place);
    this.searchInput.blur();
  };

  clearSearchBox() {
    this.searchInput.value = '';
  }

  render() {
    let { classes } = this.props;
    return <div className={classNames('searchWrapper', classes.wrapper)}>
      <i className="material-icons">search</i>
      <input
        ref={(ref) => {
          this.searchInput = ref;
        }}
        className="search"
        type="text"
        onFocus={this.clearSearchBox}
        placeholder="Enter a location"
      />
      <i className="material-icons" onClick={() => {
        this.searchInput.value = '';
      }}>close</i>
    </div>;
  }
}

InputSuggestion.propTypes = { suggestionListLength: PropTypes.any };

export default InputSuggestion;