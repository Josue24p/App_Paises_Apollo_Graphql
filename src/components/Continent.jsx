import React from 'react'
import { Grid, Button, Typography } from '@mui/material';


const Continent = ({onContinentClick }) => {
    return (

            <Grid container spacing={2}
            sx={{display: 'flex', flexDirection:{xs:'row', md:'row'},width:{xs:'300px', md:'700px'}, height:{xs:'400px', md:'500px'}}}
            style={{ border: '1px solid #ddd', margin: 15, borderRadius: 8}}>
                <Grid item xs={12}
                sx={{width:{xs:'30px',}}}
                style={{ display: 'flex', justifyContent: 'space-between',  padding: '10px' }}>
                    <Typography variant='h6' style={{padding:10, margin: 2}}> Filtrar por continentes </Typography>
                    <Button style={{ color: 'skyblue', marginRight:15}}onClick={() => onContinentClick('')}> Limpiar </Button>
                </Grid>
                <Grid item xs={4} style={{  padding: '10px' }}>
                <Button onClick={() => onContinentClick('Europe')}>
                    <img src="https://images.vexels.com/media/users/3/274893/isolated/preview/df68b1f9cb65e5970a9b5adb7ed660b7-silueta-del-mapa-del-continente-europeo.png" alt="Europa" style={{width: '200px', height: '150px'}}/>
                    </Button>
                    <Typography variant='h6' style={{textAlign:'center'}}> Europa </Typography>
                </Grid>
                <Grid item xs={4} style={{  padding: '10px' }}>
                <Button onClick={() => onContinentClick('South America')}>
                <img src="https://cdn.pixabay.com/photo/2015/04/09/16/36/america-714733_1280.png" alt="America" style={{width: '200px', height: '150px'}}/>
                </Button>
                    <Typography variant='h6' style={{textAlign:'center'}}> America </Typography>
                </Grid>
                <Grid item xs={4} style={{  padding: '10px' }}>
                <Button onClick={() => onContinentClick('Asia')}>
                <img src="https://images.vexels.com/media/users/3/274898/isolated/lists/e4bd4e5987b3099ea7b4e248ffa946a0-silueta-del-mapa-del-continente-asia-tico.png" alt="Asia" style={{width: '200px', height: '150px'}}/>
                </Button>
                    <Typography variant='h6' style={{textAlign:'center'}}> Asia </Typography>
                </Grid>
                <Grid item xs={4} style={{  padding: '10px' }}>
                <Button onClick={() => onContinentClick('Oceania')}>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/17/00/continent-151644_1280.png" alt="Oceania" style={{width: '200px', height: '150px'}}/>
                </Button>
                    <Typography variant='h6' style={{textAlign:'center'}}> Oceania </Typography>
                </Grid>
                <Grid item xs={4} style={{  padding: '10px' }}>
                <Button onClick={() => onContinentClick('Africa')}>
                <img src="https://svgsilh.com/svg/28615.svg" alt="Africa" style={{width: '200px', height: '150px'}}/>
                </Button>
                    <Typography variant='h6' style={{textAlign:'center'}}> Africa </Typography>
                </Grid>
            </Grid>
    )
}

export default Continent;
