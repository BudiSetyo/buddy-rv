import React from 'react';

const index = ({ children, onClick }) => (
  <>
    <button type="button" onClick={onClick}>
      {children}
    </button>
  </>
);

export default index;
