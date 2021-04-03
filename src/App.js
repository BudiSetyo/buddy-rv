import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from '@/pages/Login/index';
import Register from '@/pages/Register/index';

function App() {
  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Router>
  );
}

export default App;
