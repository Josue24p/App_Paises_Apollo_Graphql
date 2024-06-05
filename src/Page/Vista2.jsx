import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
export default function Vista2() {
  return (
    <>
    <Box sx={{display:'flex'}}>
        <Sidebar/>
        <Box component="main" sx={{flexGrow:1, p:3, marginTop:"55px"}}>
        <Typography variant="h4">
            Vista2
        </Typography>
        </Box>
    </Box>
    </>
  )
}
