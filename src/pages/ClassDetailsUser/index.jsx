import React, { useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';

const index = () => {
  const [data] = useState({
    description: 'Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This class helps you get started with JavaScript and furthers your understanding of what is possible.',
  });

  return (
    <DashboardLayout>
      <section className="height--100">
        <h3>Know More Javascript</h3>
        <section className="background--white">
          <header className="height--30 flex flex--justify-center">
            <div className="wrapper flex flex--column flex--justify-end">
              <h2>Know More Javasacript</h2>
              <div className="selection flex">
                <p className="mr-3">Level : Beginer</p>
                <p className="mr-3">Category : Software</p>
                <p className="mr-3">Price : Free</p>
              </div>
            </div>
            <button type="button">
              Register
            </button>
          </header>
          <p>
            {data.description}
          </p>
        </section>
      </section>
    </DashboardLayout>
  );
};

export default index;
