import React from 'react';

import './style.scss';

const index = ({
  type, value, placeHolder, onChange, className,
}) => (
  <>
    <input
      className={`input ${className}`}
      type={type}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  </>
);

export default index;
