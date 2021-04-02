import React from 'react';
import Authlayout from '@/layouts/Auth/';
import './style.scss';

function index() {
  return (
    <Authlayout>
      <div className="title width--100">
        <h1>Login</h1>
      </div>
      <div className="form-input">
        <input type="text" />
        <input type="password" />
        <div className="forgot">
          <p>Forgot Password?</p>
        </div>
      </div>
      <div className="button-box">
        <button type="button">Login</button>
        <button type="button">Login with google</button>
      </div>
      <footer>
        <p>New User? Register</p>
      </footer>
    </Authlayout>
  );
}

export default index;
