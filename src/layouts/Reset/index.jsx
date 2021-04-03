import React from 'react';

import Logo from '@/assets/images/reset/logo-icon.png';

const index = ({ children }) => (
  <section className="flex flex--align-stretch background--white" style={{ minHeight: '100vh' }}>
    <section className="flex flex--justify-center flex--align-center container width--100 background--light-blue component--desktop-visible">
      <img src={Logo} alt="logo-icon" style={{ maxWidth: '462px' }} />
    </section>
    <section className="container width--100 background--white">
      {children}
    </section>
  </section>
);

export default index;
