import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import { Router, Route, Switch, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Country from './Country';
import {Button} from "shards-react";

const api = axios.create({
  baseURL: 'https://api.covid19api.com/',
  responseType: 'json'
})

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    api.get('/countries').then(res => {
      setCountries(res.data);
    })
  }, [])

  let navigationHistory = useHistory();
  const browserHistory = createBrowserHistory();

  return (
      <Router history={browserHistory}>
          <Switch>
              <Route exact={true} path={"/:country"}>
                  <Country api={api}/>
              </Route>
              <Route>
                <div>
                  {countries.map((country, index) => (
                      <div key={index}>
                        <Button onClick={() => navigationHistory.push(country.Country)}>{country.Country}</Button>
                      </div>
                  ))}
                </div>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
