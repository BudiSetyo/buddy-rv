import React, { useState } from 'react';
import Sidebar from '@/layouts/components/sidebar/index';
import Navbar from '@/layouts/components/navbar/index';

import './style.scss';

const index = ({ children }) => {
  const [sidebarActive, setSidebar] = useState(false);

  const sidebarToggler = () => {
    setSidebar(!sidebarActive);
  };

  return (
    <section className="background--light-blue">
      <Navbar toggle={sidebarToggler} />
      {sidebarActive && (
        <section className="fixed-sidebar width--100">
          <section
            className="width--100 height--50"
            style={{ maxWidth: '300px' }}
          >
            <Sidebar />
          </section>
        </section>
      )}
      <section
        className="flex flex--align-stretch background--light-blue"
        style={{ minHeight: '100vh' }}
      >
        <section className="width--30 component--desktop-visible">
          <section className="width--100 height--100 pl-3 pt-4">
            <section
              className="width--20 height--100"
              style={{ position: 'fixed' }}
            >
              <Sidebar />
            </section>
          </section>
        </section>
        <section className="width--100 mb-4">
          <section className="parent container-fluid heigth--100">
            {children}
          </section>
        </section>
      </section>
    </section>
  );
};
export default index;
