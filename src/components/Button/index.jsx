import React from 'react';

import './style.scss';

const index = ({
  children, type, onClick, className,
}) => (
  <>
    <button type="button" className={`button button--${type} ${className}`} onClick={onClick}>
      {children}
    </button>
  </>
);

export default index;
