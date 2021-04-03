import React from 'react';

import './style.scss';

const index = ({
  children, label, validation, className,
}) => (
  <div className={`form-item mb-2 ${className}`}>
    <label className={`label ${className}`} htmlFor="label">
      {label}
    </label>
    {children}
    <p className={`validation ${className}`}>
      {validation}
    </p>
  </div>
);

export default index;
