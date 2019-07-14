import classNames from 'classnames';
import React from 'react';
import InputSuggestion from '../../Searchbox/Searchbox';
import Toggle from '../../ToggleSwitch/Toggle';
import './Header.css';

const LeftPanelHeader = ({
  useCurentLocation, mapApiLoaded, mapInstance, mapApi, addPlace, onUseMyLocation, showMap, showMapOnChange,
}) => (
  <div className="leftpaneSearchWrapper">
    {mapApiLoaded && (
      <InputSuggestion
        map={mapInstance}
        mapApi={mapApi}
        addplace={addPlace}
      />
    )}
    <div className='tabs'>
      <button
        className={classNames('useLocationButton', {
          active: useCurentLocation,
        })}
        onClick={onUseMyLocation}
      >
        Use My Location
      </button>
      <span className='toggleContainer'>
        <Toggle
          defaultChecked={showMap}
          onChange={event => {
            console.log(event);
            showMapOnChange(event.target.checked);
          }}
        />
        Show on Map
      </span>
    </div>
  </div>
);

export default LeftPanelHeader;