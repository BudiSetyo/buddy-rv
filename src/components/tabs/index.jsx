import React, { useState } from 'react';

const types = ['information', 'class progress', 'class discussion'];

const index = ({ act }) => {
  const { active, setActive } = useState(false);

  return (
    <div className="tabs">
      {types.map((type, index) => {
        <button key={index} >
          {type}
        </button>
      })}
    </div>
  );
};

export default index;
