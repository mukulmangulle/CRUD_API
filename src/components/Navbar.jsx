import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Navbar = () => {
   return (
      <AppBar color='warning'>
         <Toolbar>
            <Typography variant='h5' sx={{ flexGrow: 1 }}>CRUD API </Typography>
            <Typography variant='h6'>Ver. 01.0 </Typography>
         </Toolbar>
      </AppBar>
   )
}

export default Navbar