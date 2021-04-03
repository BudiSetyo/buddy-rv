import React, { useState } from 'react';
import Authlayout from '@/layouts/Auth';
import Input from '@/components/input/index';
import FormItem from '@/components/formItem/index';
import Button from '@/components/button/index';

import { Link } from 'react-router-dom';
import GoogleIcon from '@/assets/images/auth/google-icon.png';
import './style.scss';

const index = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Authlayout>
      <div className="width--100 text--center mb-5">
        <h1>Login</h1>
      </div>
      <br />
      <br />
      <div className="form-input flex flex--column flex--justify-space-between">
        <FormItem label="Username or Email">
          <Input
            type="text"
            className="width--100"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Password">
          <Input
            type="password"
            className="width--100"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormItem>
        <div className="forgot-pass text--right">
          <p>
            <Link to="/reset-password" className="text--black">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="button-box flex flex--column flex--justify-space-between">
        <Button className="width--100 mb-3" type="primary">Login</Button>
        <Button className="width--100 flex flex--justify-center flex--align-center" type="secondary">
          <img className="mr-2" src={GoogleIcon} alt="google-icon" style={{ margin: '0' }} />
          Login with Google
        </Button>
      </div>
      <br />
      <br />
      <br />
      <footer className="login-footer text--center">
        <p>
          New User?
          {' '}
          <span>
            <Link to="/register" className="text--blue">
              Register
            </Link>
          </span>
        </p>
      </footer>
    </Authlayout>
  );
};

export default index;
