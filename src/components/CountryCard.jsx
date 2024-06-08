// components/CountryCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const CountryCard = ({ country, onClick }) => {
  return (
    <Card
    style={{border: '2px solid orange'}}
    key={country.code} onClick={onClick} className="country-card">
      <img src={`https://source.unsplash.com/1600x900/?${country.name}`} alt={country.name} />
      <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt={`Flag of ${country.name}`}
          style={{ width: '80px', height: '50px', objectFit: 'cover' }}
        />
        <h2 style={{margin: 0}}>{country.name}</h2>
        </Box>
        <Typography variant='h6'> <p style={{margin: 0}}>{country.continent.name}</p></Typography>

      </CardContent>
    </Card>
  );
};

export default CountryCard;
