import React from 'react';

const index = ({ children }) => (
  <section className="auth-layout flex flex--alignt-stretch width--100 background--light-blue" style={{ minHeight: '100vh' }}>
    <section className="container">
      <br />
      <section className="width--100" style={{ maxWidth: '480px', margin: '0 auto' }}>
        {children}
      </section>
    </section>
  </section>
);

export default index;
