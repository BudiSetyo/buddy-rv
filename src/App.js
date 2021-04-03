import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from '@/pages/Login/index';
import Register from '@/pages/Register/index';
import ResetPassword from '@/pages/ResetPassword/index';
import ResetPasswordOtp from '@/pages/ResetPassword-otp/index';
import ResetPasswordConfirm from '@/pages/ResetPassword-confirm/index';

function App() {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/reset-password">
        <ResetPassword />
      </Route>
      <Route path="/reset-password-otp">
        <ResetPasswordOtp />
      </Route>
      <Route path="/reset-password-confirm">
        <ResetPasswordConfirm />
      </Route>
    </Router>
  );
}

export default App;
