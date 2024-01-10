import { Box, Grid, Typography } from '@mui/material';
import Property from '../components/Property';
import Search from '../components/Search';
import { useState } from 'react';
import { baseUrl, fetchApi } from '../utils/FetchApi';
import Loader from '../components/Loader';


const Rent = ({purpose}) => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
             <Box display='flex' flexDirection='row' sx={{my:'4%', mx:'2%', marginBottom:'10%'}} position='relative' top={40}>
             <Search setFilteredProperties={setFilteredProperties} explorePurpose={purpose} setIsLoading={setIsLoading}/>
             {isLoading && <Loader open={isLoading}/>}
             {!isLoading && (
                             <Box maxWidth='80vw' marginLeft='4vw'>
                             <Grid>
                                 <Grid container rowSpacing={4} spacing={5}>
                                     {filteredProperties.map((property) => {
                                         return <Grid item xs={12} sm={12} md={6} lg={4} key={property.id}>
                                             <Property key={property.id} property={property} />
                                         </Grid>
                                     })}
                                 </Grid>
                             </Grid>
                         </Box>
             )}
             </Box>
        </>
    );
}

export default Rent;