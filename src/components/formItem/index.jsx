import React from 'react';

import './style.scss';

const index = ({ children, label, validation }) => (
  <div className="form-item">
    <label className="label" htmlFor="label">
      {label}
    </label>
    {children}
    <p className="validation">
      {validation}
    </p>
  </div>
);

export default index;
