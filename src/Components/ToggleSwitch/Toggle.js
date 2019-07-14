import React from 'react';
import './Toggle.css';

export default ({ checked, onChange }) => (
  <label className="switch">
    <input
      type="checkbox"
      onChange={onChange}
    />
    <span className="slider round"
          defaultChecked={checked}>
    </span>
  </label>
)