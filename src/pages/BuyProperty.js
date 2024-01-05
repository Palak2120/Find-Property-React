import { Box, Grid, Typography } from '@mui/material';
import Property from '../components/Property';
import Search from '../components/Search';
import { useState } from 'react';
import { fetchApi, baseUrl } from "../utils/FetchApi";


const Buy = ({ propertyForSale }) => {
    const [filteredProperties, setFilteredProperties] = useState(propertyForSale);
    
    const getFilteredProperty = async({query}) => {
        const purpose = query.purpose || 'for-rent';
        const rentFrequency = query.rentFrequency || 'yearly';
        const minPrice = query.minPrice || '0';
        const maxPrice = query.maxPrice || '1000000';
        const roomsMin = query.roomsMin || '0';
        const bathsMin = query.bathsMin || '0';
        const sort = query.sort || 'price-desc';
        const areaMax = query.areaMax || '35000';
        const locationExternalIDs = query.locationExternalIDs || '5002';
        const categoryExternalID = query.categoryExternalID || '4';

    //    fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)
    //    .then((data) => setFilteredProperties(data.hits));
      }

    return (
        <>
            <Box display='flex' flexDirection='row' marginTop='2%' >
            <Search getFilterValues={getFilteredProperty}/>
            <Box>
            <Box maxWidth='80vw' marginLeft='5vw'>
                <Grid>
                    <Grid container rowSpacing={2}>
                        {filteredProperties.map((property) => {
                            return <Grid item xs={4} key={property.id}>
                                <Property key={property.id} property={property} />
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Box>
            </Box>
            </Box>
        </>
    );
}

export default Buy;