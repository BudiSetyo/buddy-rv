import React, { useState } from 'react';
import Authlayout from '@/layouts/Auth';
import Input from '@/components/input/index';
import FormItem from '@/components/formItem/index';
import Button from '@/components/button/index';

import { Link } from 'react-router-dom';
// import GoogleIcon from '@/assets/images/auth/google-icon.png';
import './style.scss';

const index = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Authlayout>
      <div className="width--100 text--center">
        <h1>Login</h1>
      </div>
      <div className="form-input flex flex--column flex--justify-space-between">
        <FormItem label="Username or Email" validation="username or email cant be empty">
          <Input
            type="text"
            className="width--100"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Password" validation="password cant be empty">
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
            <Link to="/reset" className="text--black">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
      <div className="button-box flex flex--column flex--justify-space-between">
        <Button className="width--100 mb-3" type="primary">Login</Button>
        <Button className="width--100" type="secondary">
          Login with Google
        </Button>
      </div>
      <footer className="login-footer text--center">
        <p>
          New User?
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
