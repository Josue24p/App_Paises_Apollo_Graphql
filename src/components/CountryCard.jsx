// components/CountryCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const CountryCard = ({ country, onClick }) => {
  return (
    <Card
    sx={{borderRadius:'8px', overflow:'hidden', textAlign:'center', width:{xs:'250px', md:'300px'}, cursor:'pointer'}}
    /* style={{border: '2px solid orange'}} */
    key={country.code} onClick={onClick}>
      {/*  <img src={`https://source.unsplash.com/1600x900/?${country.name}`} alt={country.name} /> ya no funciona este link de generar img*/}
      <img src={`https://picsum.photos/seed/${country.code}/1600/900`} alt={country.name}
      style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt={`Flag of ${country.name}`}
          style={{ width: '80px', height: '50px', objectFit: 'cover' }}
        />
        <Typography variant='h6' style={{margin: 0}}>{country.name}</Typography>
        </Box>
        <Typography variant='h6'> <p style={{margin: 0}}>{country.continent.name}</p></Typography>

      </CardContent>
    </Card>
  );
};

export default CountryCard;
