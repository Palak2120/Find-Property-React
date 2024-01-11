import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import useScrollPosition from '../hooks/useScrollPosition';
import { Button, IconButton, Stack, useMediaQuery } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  return (
    <AppBar
      sx={{ bgcolor: location.pathname === '/' && scrollPosition < 10 ? 'transparent' : '#1E1E1Cff', height: 75 }}
      elevation={scrollPosition > 10 ? 10 : 0}
    >
      <Toolbar>
        <Stack direction="row" alignItems='center' justifyContent='space-between' flexWrap="wrap" width='100%'>
          <Link to='/' style={{ color: 'white' }}>
            <Typography fontSize='2em'>
              Property Grid
            </Typography>
          </Link>

          <Stack direction="row" justifyContent='center' spacing={10} sx={{ flex: 1, alignItems: 'flex-end' }} flexWrap="wrap">
            <Link to='/buy' style={{ textDecoration: 'none' }}><Typography sx={{ color: '#ccccca', '&:hover': { color: 'white' }, fontFamily: 'monospace' }} fontSize='1.5em'>Buy Properties</Typography></Link>
            <Link to='/rent' style={{ textDecoration: 'none' }}><Typography sx={{ color: '#ccccca', '&:hover': { color: 'white' }, fontFamily: 'monospace' }} fontSize='1.5em'>Rent Properties</Typography></Link>
          </Stack>
          <Button variant='outlined' sx={{ color: '#ccccca', width: 'fit-content', borderRadius: 3, borderColor: 'white', alignItems: "flex-start", justifyContent: 'stretch', '&:hover': { color: 'white', borderColor: 'white' } }} size='large'>
            <PersonOutlineOutlinedIcon />
            <Typography>Login</Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;