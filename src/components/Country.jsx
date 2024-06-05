// components/CountryCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useQuery } from '@apollo/client';

import { Country_details } from '../graphql/getCountries.graphql';

const Country = ({country}) => {

  const { loading, error, data } = useQuery(Country_details);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='dashboard'>
      {data.countries.map((country) => (
        <Card key={country.code} className="country-card">
          <img src={`https://source.unsplash.com/1600x900/?${country.name}`} alt={country.name} />
          <CardContent>
            <h2>{country.name}</h2>
            <p>{country.continent.name}</p>
            <p>{country.capital}</p>
            {country.languages.map((lan) => (
              <div key={lan.name}>{lan.name}</div>
            ))}
            <p>{country.currency}</p>
            {country.subdivisions.map((region) => (
              <div key={region.name}>{region.name}</div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Country;
