import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';


const Banner = ({imageURL,purpose}) => {
return (
    <>
    {/* <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}> */}
    <Box>
    {/* <img src={imageURL} width='100%' height='100%' position='relative'></img> */}
    {/* <Typography>{purpose}</Typography > */}
    <Button position='fixed' >{purpose}</Button>
    </Box>
    </>
);
}

export default Banner;