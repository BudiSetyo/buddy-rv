import React from 'react';
import ResetLayout from '@/layouts/Reset/index';
import Button from '@/components/button/index';

import { Link } from 'react-router-dom';

import './style.scss';

const index = () => (
  <ResetLayout>
    <div className="paragraf height--30 flex flex--column flex--justify-space-between flex--align-center text--center">
      <h1>Reset Password</h1>
      <h3 className="width--80">Enter verification code we just sent to your email address</h3>
    </div>
    <div className="flex flex--column flex--align-center flex--justify-center width--100">
      <div className="flex flex--justify-space-around width--70">
        <input className="otp width--20 text--center" maxLength="1" type="text" />
        <input className="otp width--20 text--center" maxLength="1" type="text" />
        <input className="otp width--20 text--center" maxLength="1" type="text" />
        <input className="otp width--20 text--center" maxLength="1" type="text" />
      </div>
      <br />
      <p>
        Didn’t receive a code?
        {' '}
        <span className="text--blue">Resend</span>
      </p>
    </div>
    <div className="flex flex--column flex--jusctify-center flex--align-center">
      <Link to="reset-password-confirm" className="width--100 flex flex--justify-center">
        <Button className="width--80" type="primary">Verivy</Button>
      </Link>
    </div>
  </ResetLayout>
);

export default index;
