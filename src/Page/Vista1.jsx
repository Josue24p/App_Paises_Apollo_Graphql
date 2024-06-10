import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';

  

//consumir api de Unsplash
const clientId = import.meta.env.VITE_CLIENTE_ID_UNSPLASH;;
const endPoint = import.meta.env.VITE_ENDPOINT_IMG_PAISES;

export const obtenerImgPaises = () =>{
  //método 1 uso de fetch simple ordinario
  fetch(`${endPoint}?query=laptop&client_id=${clientId}`).then(res=>{
    if (res.ok) {
      res.json().then(paises=>{
        console.log(paises);
      }).catch(err =>{
        console.log(err)
      })
    }
    }).catch(err=>{
      console.log(err)
    })
}

//método 2, uso de fetch con async y await
const obtenerImgPaises2 = async (setUrls) => {
  try {
    let res = await fetch(`${endPoint}?query=paises&client_id=${clientId}&per_page=30`)
    let paises = await res.json();
    console.log(paises)
    let urls = paises.results.map(result=> result.urls.thumb)
    setUrls(urls)
    console.log(urls)
  } catch (error) {
    console.log(error)
  }
}



const Vista1 = () => {
  const [urls, setUrls] = useState([]);

  useEffect(()=>{
    obtenerImgPaises2(setUrls)
  },[]);

  return (
    <>
    <Box sx={{display:'flex'}}>
        <Sidebar/>
        <Box component="main" sx={{flexGrow:1, p:3, marginTop:"55px"}}>
        <Typography variant="h4">
            Probar API REST de imagenes de pixabay
        </Typography>
        <div>
          {urls.map((url, index)=>(
            <img key={index} src={url} alt={`Imagen ${index}`} />
          ))}
        </div>
        </Box>
    </Box>
    </>
  )
}
export default Vista1
