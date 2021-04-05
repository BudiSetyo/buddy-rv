import React from 'react';
import './style.scss';

export default ({ img, placeholder, size }) => {
  const getPlaceholder = placeholder ? placeholder.trim().charAt(0) : 'A';

  const getSize = size || 56;

  return (
    <section
      className="buddy-avatar flex flex--align-center flex--justify-center"
      style={{
        minWidth: `${getSize}px`,
        width: `${getSize}px`,
        height: `${getSize}px`,
      }}
    >
      {img ? (
        <img src={img} alt="buddy avatar" className="buddy-avatar__img" />
      ) : getSize <= 56 ? (
        <h3 className="m-0 text--white text--uppercase">{getPlaceholder}</h3>
      ) : (
        <h2 className="m-0 text--white text--uppercase">{getPlaceholder}</h2>
      )}
    </section>
  );
};

// Usage

// <Avatar img="" placeholder="Dwi Nugroho" size={84}
