import React, { useState } from 'react';
import AuthLayout from '@/layouts/Auth/index';
import Input from '@/components/input/index';
import FormItem from '@/components/formItem/index';
import Button from '@/components/button/index';
import GoogleIcon from '@/assets/images/auth/google-icon.png';

import Axios from 'axios';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';

const index = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errUsername, setErrUsername] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!username) {
      setErrUsername('Username cannot be empty');
    }

    if (!email) {
      setErrEmail('Email cannot be empty');
    }

    if (!password) {
      setErrPassword('Password cannot be empty');
    }

    if (password !== confirmPassword) {
      setErrConfirmPassword('Password does not match');
    }

    if (errUsername || errEmail || errPassword) {
      return false;
    }

    Axios.post('http://localhost:8000/auth/register', {
      username: username,
      email: email,
      password: password,
    })
      .then(() => {
        swal({
          title: 'Success',
          text: 'Go to login',
          icon: 'success',
          button: 'Next',
        }).then(() => {
          window.location = '/login';
        });
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: 'error',
          button: 'Back',
        });
      });
  };

  return (
    <AuthLayout>
      <div className="width--100 text--center mb-5">
        <h1>Register</h1>
      </div>
      <div className="form-input mb-5">
        <FormItem label="Username" validation={errUsername}>
          <Input
            type="text"
            className="width--100"
            value={username}
            onChange={(e) => {
              setErrUsername('');
              setUsername(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Email" validation={errEmail}>
          <Input
            type="text"
            className="width--100"
            value={email}
            onChange={(e) => {
              setErrEmail('');
              setEmail(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Password" validation={errPassword}>
          <Input
            type="password"
            className="width--100"
            value={password}
            onChange={(e) => {
              setErrPassword('');
              setPassword(e.target.value);
            }}
          />
        </FormItem>
        <FormItem label="Confirm Password" validation={errConfirmPassword}>
          <Input
            type="password"
            className="width--100"
            value={confirmPassword}
            onChange={(e) => {
              setErrConfirmPassword('');
              setConfirmPassword(e.target.value);
            }}
          />
        </FormItem>
      </div>
      <div className="button-box mb-5">
        <Button className="width--100 mb-3" type="primary" onClick={handleRegister}>Register</Button>
        <Button className="width--100 width--100 flex flex--justify-center flex--align-center" type="secondary">
          <img className="mr-2" src={GoogleIcon} alt="google-icon" style={{ margin: '0' }} />
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
