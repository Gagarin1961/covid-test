import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom';

const Country = ({ api }) => {
    const [countries, setCountries] = useState([]);

    let match = useRouteMatch();

    useEffect(() => {
        api.get('/summary').then(res => {
            setCountries(res.data.Countries);
        })
    }, [])

    const index = countries.map(el => el.Country).indexOf(match.params.country);

    let country = countries[index];

    console.log(countries);
    console.log(country);

    return (
        <div>{country}</div>
    )
}

export default Country;