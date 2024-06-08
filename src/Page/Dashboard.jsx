import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField, Button, Popover, List, ListItem, ListItemText } from '@mui/material'
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/getCountries.graphql';
import CountryCard from '../components/CountryCard';
import Country from '../components/Country';
export default function Dashboard() {

    const { loading, error, data } = useQuery(GET_COUNTRIES);

    //manejamos un estado para poder buscar el país y guardarlo
    const [searchTerm, setSearchTerm] = useState('');

    const [selectedCountry, setSelectedCountry] = useState(null);
    //estado para manejar lo ingresado cada vez que se de click al botón
    /* const [finalSearchTerm, setFinalSearchTerm] = useState(''); */

    /* const [anchorEl, setAnchorEl] = useState(null); */

    //creamos una función que se llama cada vez que el texto ingresado cambia
    //asimismo actualiza el estado searchTerm
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setSelectedCountry(null);
    };

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    }

    const handleDeselect = () => {
        setSelectedCountry(null);
    };
    //función en caso le doy al botón buscar se ejecuta
    //busca el país escrito en textField
    /*  const handleSearchClick = () => {
       setFinalSearchTerm(searchTerm);
     }; */

    /*   const handleContinentFilterClick = (event) => {
        setAnchorEl(event.currentTarget);
    }; */

    /*  const handleContinentFilterClose = () => {
         setAnchorEl(null);
     }; */

    //creamos una variable que contenga los países que coincidan con
    //el texto buscado utilizado el método filter, para poder solo traer el solicitado
    const filteredCountries = data?.countries?.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant="h4">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                label="País"
                                placeholder="Escribe el país que deseas ver"
                                variant="outlined" style={{ marginRight: '60px', width: "100%", marginLeft: '60px' }}
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </Typography>
                    <div className="dashboard">

                       {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                                <CountryCard key={country.code} country={country} onClick={() => handleCountryClick(country)} />
                            ))
                        ) : (
                            <Typography>No countries found</Typography>
                        )}
                    </div>
                </Box>
                {selectedCountry &&(
                <Box sx={{ flex: 0 }}>
                
                    <Box component="main" sx={{  marginTop: "25px", marginRight: "100px" }}>
                        <div className="dashboard">
                         <Country country={selectedCountry} onDeselect={handleDeselect} />
                        </div>
                    </Box>
                   
                </Box>
                 )}
            </Box>
        </>
    )
}