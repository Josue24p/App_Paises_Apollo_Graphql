import React from 'react'
import { Grid, Button, Typography } from '@mui/material';


const Continent = ({onContinentClick }) => {
    return (

            <Grid container spacing={2}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: {xs: '100%', md:'500px'},
                height: {xs:'auto', md: 'auto'},
                margin: 1,
                borderRadius: 2,
                padding: 1
            }}
            /* style={{ border: '1px solid #ddd', margin: 15, borderRadius: 8, width:'700px'}} */>
                <Grid item xs={12}
                sx={{
                    display:'flex',
                    justifyContent: 'space-between',
                }}
                >
                    <Typography variant='h6' sx={{padding: 1, margin:0}}> Filtrar por continentes </Typography>
                    <Button sx={{color: 'skyblue'}} onClick={() => onContinentClick('')}> Limpiar </Button>
                </Grid>
                <Grid item 
                xs={4}
                sm={4}
                md={4}
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 1,
                }}>
                <Button onClick={() => onContinentClick('Europe')}>
                    <img src="https://images.vexels.com/media/users/3/274893/isolated/preview/df68b1f9cb65e5970a9b5adb7ed660b7-silueta-del-mapa-del-continente-europeo.png" alt="Europa" 
                    style={{width: '100%', height:'auto', maxWidth:{xs:'50px', md:'200px'}}}/>
                    </Button>
                    <Typography variant='h6' sx={{ textAlign: 'center', mt: 1 }}> Europa </Typography>
                </Grid>
                <Grid item 
                xs={4}
                sm={4}
                md={4}
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 1,
                }}>
                <Button onClick={() => onContinentClick('South America')}>
                <img src="https://cdn.pixabay.com/photo/2015/04/09/16/36/america-714733_1280.png" alt="America" 
                style={{width: '100%', height:'auto', maxWidth:{xs:'50px', md:'200px'}}}/>
                </Button>
                    <Typography variant='h6' sx={{ textAlign: 'center', mt: 1 }}> America </Typography>
                </Grid>
                <Grid item 
                xs={4}
                sm={4}
                md={4}
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 1,
                }}>
                <Button onClick={() => onContinentClick('Asia')}>
                <img src="https://images.vexels.com/media/users/3/274898/isolated/lists/e4bd4e5987b3099ea7b4e248ffa946a0-silueta-del-mapa-del-continente-asia-tico.png" alt="Asia" 
                style={{width: '100%', height:'auto', maxWidth:{xs:'50px', md:'200px'}}}/>
                </Button>
                    <Typography variant='h6' sx={{ textAlign: 'center', mt: 1 }}> Asia </Typography>
                </Grid>
                <Grid item 
                xs={4}
                sm={4}
                md={4}
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 1,
                }}>
                <Button onClick={() => onContinentClick('Oceania')}>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/17/00/continent-151644_1280.png" alt="Oceania" 
                style={{width: '100%', height:'auto', maxWidth:{xs:'50px', md:'200px'}}}/>
                </Button>
                    <Typography variant='h6' sx={{ textAlign: 'center', mt: 1 }}> Oceania </Typography>
                </Grid>
                <Grid item 
                xs={4}
                sm={4}
                md={4}
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 1,
                }}>
                <Button onClick={() => onContinentClick('Africa')}>
                <img src="https://svgsilh.com/svg/28615.svg" alt="Africa" 
                style={{width: '100%', height:'auto', maxWidth:{xs:'50px', md:'200px'}}}/>
                </Button>
                    <Typography variant='h6' sx={{ textAlign: 'center', mt: 1 }}> Africa </Typography>
                </Grid>
            </Grid>
    )
}

export default Continent;
