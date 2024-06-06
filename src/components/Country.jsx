
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FixedSizeList } from 'react-window';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
/*recibir el prop de country que viene de Dashboard en este caso para explicar y recordar
al momento de la función handleCountryClick(country) recibe el parametro country
y dentro de la función se guarda el país en setSelectedCountry(country) 
Al momento de dar el click entonces si el país es seleccionado se va mostrar
el componente Country que retorna la información del país seleccionado*/
const Country = ({ country, onDeselect }) => {

  const renderRow = ({ index, style }) => (
    <div style={style} key={country.subdivisions[index].name}>
      <Typography variant="body2" color="text.secondary">
        {country.subdivisions[index].name}
      </Typography>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='dashboard'>
        <Card key={country.code} className="country-card" sx={{ width: '300px', height: '440px', overflow: 'hidden', position: 'relative' }}>
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={(e) => {
              e.stopPropagation();
              onDeselect();
            }}
          >
            <CloseIcon />
          </IconButton>
          <img src={`https://source.unsplash.com/1600x900/?${country.name}`} alt={country.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <CardContent>
            <img
              src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
              alt={`Flag of ${country.name}`}
              style={{ width: '80px', height: '50px', objectFit: 'cover' }}
            />
            <Typography variant="h5" component="div">{country.name}</Typography>
            <Typography variant="body2" color="text.secondary"><strong>{country.continent.name.toUpperCase()}</strong></Typography>
            <Typography variant="body2" color="text.secondary"><strong>Capital:</strong> {country.capital}</Typography>
            <Typography variant="body2" color="text.secondary"><strong>Lenguaje:</strong> {country.languages.map((lan) => lan.name).join(', ')}</Typography>
            <Typography variant="body2" color="text.secondary"><strong>Moneda:</strong> {country.currency}</Typography>
            {country.subdivisions.length > 0 && (
              <>
                <Typography variant="body2" color="text.secondary"><strong>Regiones:</strong></Typography>
                <Box sx={{ position: 'relative', mt: 2 }}>
                  <FixedSizeList
                    height={100}
                    width={260}
                    itemSize={35}
                    itemCount={country.subdivisions.length}
                    overscanCount={5}
                    style={{
                      margin: '0 auto',
                      //border: '1px solid #ccc',
                      borderRadius: '4px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                      position: 'relative',
                      top: '-10px',
                      zIndex: 1,
                      backgroundColor: 'white'
                    }}
                  >
                    {renderRow}
                  </FixedSizeList>
                </Box>
              </>
            )}
            {/*             {country.subdivisions.map((region) => (
              <div key={region.name}>{region.name}</div>
            ))} */}
          </CardContent>
        </Card>
      </div>
    </Box>
  );

};

export default Country;
