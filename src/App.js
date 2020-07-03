import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Countries from './Countries';

function App() {

  const browserHistory = createBrowserHistory();

  return (
      <Router history={browserHistory}>
          <Countries/>
      </Router>
  );
}

export default App;
