import React from 'react';

const index = ({ children }) => (
  <section className="auth-layout flex flex--alignt-stretch width--100 background--light-blue" style={{ height: '100vh' }}>
    <section className="container height--100">
      <section className="width--100 height--100 flex flex--column flex--justify-space-around" style={{ maxWidth: '480px', margin: '0 auto' }}>
        {children}
      </section>
    </section>
  </section>
);

export default index;
