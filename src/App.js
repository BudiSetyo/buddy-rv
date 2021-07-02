import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from '@/pages/Login/index';
import Register from '@/pages/Register/index';
import ResetPassword from '@/pages/ResetPassword/index';
import ResetPasswordOtp from '@/pages/ResetPassword-otp/index';
import ResetPasswordConfirm from '@/pages/ResetPassword-confirm/index';
import Profile from '@/pages/Profile/index';
import ActivityUser from '@/pages/Activity/User/User_class/index';
import MyClassUser from '@/pages/Activity/User/Activity_user/index';
import ActivityFasilitator from '@/pages/ActivityFasilitator/index';
import ClassDetailsUser from '@/pages/Activity/User/Details';
import HomeUser from '@/pages/HomeUser/index';
import HomeFasilitaor from '@/pages/HomeFasilitator/index';

const MustNotBeloggedIn = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/home-user' }} />
      )
    }
  />
);

const LoginRequired = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <Route path="/" component={MyClassUser} />
      {/* <Route path="/" exact>
        <Redirect to="/login" />
      </Route>

      <MustNotBeloggedIn
        isAuthenticated={isAuthenticated}
        exact
        path="/login"
        component={Login}
      />

      <MustNotBeloggedIn
        isAuthenticated={isAuthenticated}
        exact
        path="/register"
        component={Register}
      />

      <MustNotBeloggedIn
        isAuthenticated={isAuthenticated}
        exact
        path="/reset-password"
        component={ResetPassword}
      />

      <MustNotBeloggedIn
        isAuthenticated={isAuthenticated}
        exact
        path="/reset-password-otp"
        component={ResetPasswordOtp}
      />

      <MustNotBeloggedIn
        isAuthenticated={isAuthenticated}
        exact
        path="/reset-password-confirm"
        component={ResetPasswordConfirm}
      />

      <LoginRequired
        isAuthenticated={isAuthenticated}
        path="/home-user"
        component={HomeUser}
      />

      <LoginRequired
        isAuthenticated={isAuthenticated}
        path="/home-fasilitator"
        component={HomeFasilitaor}
      />

      <LoginRequired
        isAuthenticated={isAuthenticated}
        path="/profile"
        component={Profile}
      />

      <LoginRequired
        isAuthenticated={isAuthenticated}
        path="/activity-user"
        component={ActivityUser}
      />

      <LoginRequired
        isAuthenticated={isAuthenticated}
        path="/activity-myclass"
        component={MyClassUser}
      />

      <LoginRequired
        isAuthenticated={isAuthenticated}
        path="/activity-fasilitator"
        component={ActivityFasilitator}
      />

      <Route path="/activity-class-details-user">
        <ClassDetailsUser />
      </Route> */}
    </Router>
  );
}

export default App;
