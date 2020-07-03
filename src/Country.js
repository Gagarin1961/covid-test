import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.covid19api.com/',
    responseType: 'json'
})

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    let match = useRouteMatch();

    useEffect(() => {
        api.get('/summary').then(res => {
            setCountries(res.data.Countries);
            setLoading(true);
        }).catch(err => {
            setError(err.message);
            setLoading(true);
        })
    }, [])

    if (loading) {
        const index = countries.map(el => el.Country).indexOf(match.params.country);
        let country = countries[index];

        if (error) {
            return (
                <li>{error.message}</li>
            )
        }
        else if (country === undefined)
        {
            return (
                <li>No data for {match.params.country}</li>
            )
        }
        else
        {
            return (
                <div>
                    {country.Country}
                    <div>New Confirmed: {country.NewConfirmed}</div>
                    <div>New Deaths: {country.NewDeaths}</div>
                    <div>New Recovered: {country.NewRecovered}</div>
                    <div>Total Confirmed: {country.TotalConfirmed}</div>
                    <div>Total Deaths: {country.TotalDeaths}</div>
                    <div>Total Recovered: {country.TotalRecovered}</div>
                </div>
            )
        }
    }
    else
    {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default Country;