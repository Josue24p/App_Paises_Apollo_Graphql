
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/*recibir el prop de country que viene de Dashboard en este caso para explicar y recordar
al momento de la función handleCountryClick(country) recibe el parametro country
y dentro de la función se guarda el país en setSelectedCountry(country) 
Al momento de dar el click entonces si el país es seleccionado se va mostrar
el componente Country que retorna la información del país seleccionado*/
const Country = ({country}) => {

  return (
    <div className='dashboard'>
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
    </div>
  );
};

export default Country;
