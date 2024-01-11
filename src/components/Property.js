import React from "react";
import { Typography, Box, Card, CardActionArea, CardMedia, CardContent, Stack, Avatar } from "@mui/material"
import millify from 'millify';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Property = ({ property }) => {
    return (
        <>
            <Card>
                <CardActionArea>
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia component='img' image={property.coverPhoto.url} height='300px' loading="lazy" />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                bgcolor: 'transparent',
                                color: 'black',
                                background: 'linear-gradient(to right, rgba(232, 226, 226, 0.7),rgba(211, 200, 200, 0.7))',
                                padding: '10px'
                            }}
                        >
                            <Typography sx={{ fontFamily: 'monospace', fontSize: '1.5em', fontWeight: 'bold' }}>{property?.location[3]?.name}</Typography>
                            <Stack direction='row' >
                                <PlaceIcon variant="outlined" fontSize="small" />
                                <Typography sx={{ fontFamily: 'monospace' }}>{property?.location[2]?.name}, {property?.location[1]?.name}</Typography>
                            </Stack>
                        </Box>
                    </Box>
                    <CardContent>
                        <Stack spacing={1}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Stack direction='row' alignItems='center'>
                                    <SellOutlinedIcon fontSize="medium" />
                                    <Typography variant="h6">{millify(property?.price)}</Typography>
                                </Stack>
                                <BookmarkBorderIcon />
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Stack direction='row' alignItems='center'>
                                    <BedOutlinedIcon />
                                    <Typography>{property?.rooms}</Typography>
                                </Stack>
                                <Stack direction='row' alignItems='center'>
                                    <BathtubOutlinedIcon />
                                    <Typography>{property?.baths}</Typography>
                                </Stack>
                                <Typography variant="h6">{millify(property?.area)} sqft</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between'>
                                <Box width='30%'>
                                    {/* <img src={property?.agency?.logo?.url} maxWidth='fit-content' height='4vh'/> */}
                                    <Avatar src={property?.agency?.logo?.url} variant="square" sx={{ width: '100%', height: '5vh' }} />
                                </Box>
                                <CallIcon />
                            </Stack>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default Property;
