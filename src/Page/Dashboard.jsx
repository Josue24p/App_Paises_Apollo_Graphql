import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField, Grid } from '@mui/material'
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/getCountries.graphql';
import CountryCard from '../components/CountryCard';
import Country from '../components/Country';
import Continent from '../components/Continent';
export default function Dashboard() {

    /*Usamos useQuery para poder usar el Query GET_COUNTRIES creado en la carpeta 
    graphql, al momento de usarlo, nos brinda 3 constantes, loading, error y data*/
    const { loading, error, data } = useQuery(GET_COUNTRIES);

    /*Creamos un estado con la variable searchTerm y setSearchTerm para guardar el 
    estado de lo que escriba en el TextField del buscador*/
    const [searchTerm, setSearchTerm] = useState('');

    /*Creamos un estado con la variable selectedCountry y setSelectedCountry para
    guardar el estado si un país es seleccionado al momento de hacer click en un
    card de un país específico*/
    const [selectedCountry, setSelectedCountry] = useState(null);

    /*Creamos un estado showContinentPreview y setShowContinentPreview para manejar
    poder manejar una función que permita al momento de hacer click en el buscador
    se muestre una vista previa del componente Continent*/
    const [showContinentPreview, setShowContinentPreview] = useState(null);

    /*Creamos un estado selectedContinent para seleccionar el continente y
    setSelectedContinent para guardar su estado, en este caso esto estará relacionado
    con la función que al momento de mostrarse el componente Continent, las imagenes
    de cada continente es un botón, si se hace click en un continente se guarda en su estado*/
    const [selectedContinent, setSelectedContinent] = useState('');

    /*Creamos la función handleSearchChange, este caso esta función se le pasa un
    parametro (event) el cual se va usar para captural el estado setSearchTerm el
    cual va almacenar lo que se escriba en el TextField (Buscador), asimismo,
    se le asigna al estado setSelectCountry el valor null, porque no se selecciona 
    país, igualmente a setSelectedContinent, sino que solo se encarga de cambiar el
    estado de la variable searchTerm cada vez que se escriba y lo almacena en 
    setSearchTerm su nuevo valor*/
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setSelectedCountry(null);
        setSelectedContinent('');
    };

    /*Se crea la función handleCountryClick, le pasamos un parametro country (pais)
    que en este caso ese parametro le vamos a pasar al estado setSelectedCountry
    es decir, permite seleccionar un país específico y lo almacena su estado de que
    país está seleccionado*/
    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    }

    /*Se crea la función handleDeselect, en este caso, es lo contrario a la función
    handleCountryClick, ya que aquí al hacer click en la X de la tarjeta, el estado
    del país se vuelve a null, es decir se deselecciona*/
    const handleDeselect = () => {
        setSelectedCountry(null);
    };

    /*Se crea la función handleTextFieldClick, en este caso esta función me permite
    al momento de hacer click en el Buscador, me muestra una vista previa del
    componente Continent, igualmente con doble click, ya deja de mostrar*/
    const handleTextFieldClick = () => {
        setShowContinentPreview((prev) => !prev);
    }

    /*Se crea la función handleContinentClick, esta función permitirá pasarle un
    parametro 'continent' el cual se le va asignar al estado setSelectedContinent
    el cual va almacenar el continente seleccionado, asimismo, si se hace click
    en el continente seleccionado, es decir, no se usa el setSearchTerm que es lo
    que almacena lo que se escribe en el buscador, por ende se le pone vacío '',
    igualmente no se selecciona un país por ende null, solo funciona al almacenar
    el continente seleccionado*/
    const handleContinentClick = (continent) => {
        setSelectedContinent(continent);
        setSearchTerm('');
        setSelectedCountry(null);
    }

    /*Creamos una variable filteredCountries : Esta variable, traera los datos de los países, pero se usará el método filter, en el cual se le pasa una variable country que va recorrer por todos los países, pero se ingresa una condición antes, que si se le pasa una variable selectedContinent,
    entonces vas a retornar los paises de un continente según su nombre y eso lo asignamos a selectedContinent, es decir la variable selectedContinent contiene los nombres de los continentes (America, Africa, Europa, Asia, Oceania). Si en caso no se selecciona un continente, me retorna los paises filtrados que guarda en la variable searchTerm que se usa en el buscador  */
    const filteredCountries = data?.countries?.filter(country => {
        if (selectedContinent) {
            return country.continent.name.toLowerCase() === selectedContinent.toLowerCase();
        }
        return country.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    /*Se ingresa 2 condicionales, más que todo es para validar, se usa loading si en
    caso está cargando que muestre un mensaje Loading...
    
    Si en caso es error, retorne un mensaje del Error*/
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <Sidebar />
                <Box style={{border: '2px solid green'}} component="main" sx={{ flexGrow: 1, p: 3, marginTop: { xs: "70px", md: "70px" }, marginLeft: { xs: "58px", md:'10px' } }}>
                    <Typography variant="h4">
                        <Grid style={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                label="País"
                                placeholder="Escribe el país que deseas ver"
                                variant="outlined" style={{ marginRight: '60px', width: "100%", marginLeft: '60px', border: '2px solid blue' }}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onClick={handleTextFieldClick}
                            />
                        </Grid>
                    </Typography>
                    {showContinentPreview && (
                        <Box sx={{
                            position: 'absolute',
                            zIndex: 1,
                            background: 'white',
                            p: 0.5,
                            marginLeft: { xs: '10%', md: '50px' },
                            marginTop: { xs: '10%', md: '0' },
                            width: { xs: '80%', md: 'auto' },
                            height: { xs: 'auto', md: 'auto' }
                        }}>
                            <Continent onContinentClick={handleContinentClick} />
                        </Box>
                    )}
                    <Grid
                    sx={{ flexGrow: 1, p: 3, marginTop: { xs: "20px", md: "5px" }, marginLeft: { xs: "5px", md:'5px' }, marginRight:{xs:'5px', md:'5px'} }}
                    style={{border: '2px solid red'}} className="dashboard">
                        
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                                <Grid className="dashboard"
                                sx={{flexGrow: 1,padding:{xs:'5px', md:'15px'}}}
                                style={{border: '2px solid skyblue'}}>
                                <CountryCard
                                    key={country.code}
                                    country={country}
                                    onClick={() => handleCountryClick(country)}
                                />
                                </Grid>
                            ))
                        ) : (
                            <Typography>No countries found</Typography>
                        )}
                    </Grid>
                </Box>
                {selectedCountry && (
                    <Box sx={{
                        flex: 0,
                        width: { xs: '100%', md: '30%' },
                        marginTop: { xs: '20px', md: '25px' },
                        marginRight: { md: '10px' },
                    }}
                    style={{border: '2px solid yellow'}}>

                        <Box style={{border: '2px solid black'}} component="main" sx={{ flexGrow: 1, p: 3, marginLeft: { xs: "20px" } }}>
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