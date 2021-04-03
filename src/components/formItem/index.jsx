import React from 'react';

import './style.scss';

const index = ({
  children, label, validation, className,
}) => (
  <section className={`form-item mb-2 ${className}`}>
    <label className="label" htmlFor="label">
      {label}
    </label>
    {children}
    <p className="validation">
      {validation}
    </p>
  </section>
);

export default index;
