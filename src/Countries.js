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

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        api.get('/countries').then(res => {
            setCountries(res.data);
        })
    }, [])

    let navigationHistory = useHistory();

    return (
        <Switch>
            <Route exact={true} path={"/:country"}>
                <Country api={api}/>
            </Route>
            <Route>
                <div>
                    {console.log(navigationHistory)}
                    {countries.map((country, index) => (
                        <div key={index}>
                            <Button onClick={() => navigationHistory.push(country.Country)}>{country.Country}</Button>
                        </div>
                    ))}
                </div>
            </Route>
        </Switch>
    )
}

export default Countries;