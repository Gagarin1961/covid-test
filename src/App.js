import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { Router, Route, Switch, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Countries from './Countries';

const api = axios.create({
  baseURL: 'https://api.covid19api.com/',
  responseType: 'json'
})

function App() {

  const browserHistory = createBrowserHistory();

  return (
      <Router history={browserHistory}>
          <Countries/>
      </Router>
  );
}

export default App;
