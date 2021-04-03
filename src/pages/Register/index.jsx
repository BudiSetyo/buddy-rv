import React, { useState } from 'react';
import AuthLayout from '@/layouts/Auth/index';
import Input from '@/components/input/index';
import FormItem from '@/components/formItem/index';
import Button from '@/components/button/index';

import { Link } from 'react-router-dom';

const index = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <AuthLayout>
      <div className="width--100 text--center">
        <h1>Register</h1>
      </div>
      <div className="form-input">
        <FormItem label="Username" validation="username cant be empty">
          <Input
            type="text"
            className="width--100"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Email" validation="Email cant be empty">
          <Input
            type="text"
            className="width--100"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Password" validation="Password cant be empty">
          <Input
            type="text"
            className="width--100"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Confirm Password" validation="Confirm Password cant be empty">
          <Input
            type="text"
            className="width--100"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </FormItem>
      </div>
      <div className="button-box">
        <Button className="width--100 mb-3" type="primary">Register</Button>
        <Button className="width--100" type="secondary">
          Register with Google
        </Button>
      </div>
      <footer className="text--center">
        <p>
          Already have account?
          {' '}
          <span>
            <Link to="/login" className="text--blue">
              Login
            </Link>
          </span>
        </p>
      </footer>
    </AuthLayout>
  );
};

export default index;
