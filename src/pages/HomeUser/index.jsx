import React from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';

const index = () => (
  <DashboardLayout>
    <section className="width--100 height--100 flex">
      <section className="width--100 height--100">
        <header className="height--40 background--white">
          <h3>News</h3>
          header
        </header>
      </section>
      <section className="width--100 height--100 background--blue component--desktop-visible" />
    </section>
  </DashboardLayout>
);

export default index;
