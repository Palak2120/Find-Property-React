import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Buy from '../pages/BuyProperty';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';

//sx={{position: 'absolute', top: '0', left: '50%', width: '100%', transform: 'translateX(-50%)', padding: '2rem 1rem', margin: 'auto', overflow: 'hidden'}}

const Navbar = () => {
  return (
    <Box sx={{position:'fixed'}}> 
      <AppBar sx={{bgcolor: 'transparent'}} elevation={0}>
        <Toolbar >
        <Box display='flex' flexDirection='row' alignItems='flex-end' justifyContent='space-between'  width='100%'>
          <Box display='flex' flexDirection='row' width='40%' alignItems='flex-end' justifyContent='space-between'>
            <Link to='/' style={{color: 'white'}}>
          <Typography fontSize='2em'>
            Property Grid
          </Typography>
          </Link>
          <Typography fontSize='1em'><Link to='/buy' style={{color: 'white'}}>Buy Properties</Link></Typography>
          <Typography fontSize='1em' color='black'><Link style={{color: 'white'}}>Rent Properties</Link></Typography>
          </Box>
          <Box display='flex'>
          <Link style={{color: 'white'}}>Login</Link>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;