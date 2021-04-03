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
    <section>
      <Navbar toggle={sidebarToggler} />
      {
        sidebarActive && (
          <section
            className="fixed-sidebar width--100 background--black"
            style={{
              position: 'fixed', top: '50px', left: 0, zIndex: '999', minHeight: '100vh',
            }}
          >
            <section className="width--100 height--100" style={{ maxWidth: '480px' }}>
              <Sidebar />
            </section>
          </section>
        )
      }
      <section className="flex flex--align-stretch background--light-blue" style={{ minHeight: '100vh' }}>
        <section className="width--30 component--desktop-visible">
          <section className="width--100 height--100 pl-3">
            <section className="width--20 height--100" style={{ position: 'fixed' }}>
              <Sidebar />
            </section>
          </section>
        </section>
        <section className="width--100 background--white">
          <section className="container-fluid height--100 background--red">
            {children}
          </section>
        </section>
      </section>

    </section>
  );
};
export default index;
