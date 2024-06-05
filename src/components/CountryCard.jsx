// components/CountryCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const CountryCard = ({ country, onClick }) => {
  return (
    <Card key={country.code} onClick= {onClick} className="country-card">
      <img src={`https://source.unsplash.com/1600x900/?${country.name}`} alt={country.name} />
      <CardContent>
      <h2>{country.name}</h2>
      <p>{country.continent.name}</p>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
