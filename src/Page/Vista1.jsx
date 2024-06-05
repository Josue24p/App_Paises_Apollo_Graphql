import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import Country from '../components/Country';
export default function Vista1() {
  return (
    <>
    <Box sx={{display:'flex'}}>
        <Sidebar/>
        <Box component="main" sx={{flexGrow:1, p:3, marginTop:"55px"}}>
            <Country/>
        </Box>
    </Box>
    </>
  )
}
