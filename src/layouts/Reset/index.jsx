import React from 'react';
import './style.scss';

const index = ({ children }) => (
  <section className="reset-layout width--100 background--light-blue" style={{ minHeight: '100vh' }}>
    <section className="main-page">
      <section className="width--50 background--light-blue" style={{ minHeight: '100vh' }}>
        {children}
      </section>
      <section className="width--50 background--white" style={{ minHeight: '100vh' }}>
        {children}
      </section>
    </section>
  </section>
);

export default index;
