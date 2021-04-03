import React from 'react';

const index = ({ children }) => (
  <section className="flex flex--align-stretch background--light-blue" style={{ minHeight: '100vh' }}>

    <section className="width--30 component--desktop-visible">
      <div className="container height--100">
        <aside className="width--100 height--100 background--blue">
          <h1>sidebar</h1>
        </aside>
      </div>
    </section>
    <section className="width--100 background--white">
      <div className="container height--100 background--red">
        {children}
      </div>
    </section>
  </section>
);

export default index;
