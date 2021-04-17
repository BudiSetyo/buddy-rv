import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from '@/pages/Login/index';
import Register from '@/pages/Register/index';
import ResetPassword from '@/pages/ResetPassword/index';
import ResetPasswordOtp from '@/pages/ResetPassword-otp/index';
import ResetPasswordConfirm from '@/pages/ResetPassword-confirm/index';
import Profile from '@/pages/Profile/index';
import ActivityUser from '@/pages/ActivityUser/index';
import MyClassUser from '@/pages/MyClassUser/index';
import ActivityFasilitator from '@/pages/ActivityFasilitator/index';
import ClassDetailsUser from '@/pages/ClassDetailsUser/index';
import HomeUser from '@/pages/HomeUser/index';

function App() {
  return (
    <Router>
      <Route path="/" exact>
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
      <Route path="/home-user">
        <HomeUser />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/activity-user">
        <ActivityUser />
      </Route>
      <Route path="/activity-myclass">
        <MyClassUser />
      </Route>
      <Route path="/activity-class-details-user">
        <ClassDetailsUser />
      </Route>
      <Route path="/activity-fasilitator">
        <ActivityFasilitator />
      </Route>
    </Router>
  );
}

export default App;
