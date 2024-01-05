import React from "react";
import { Typography, Box, Card, CardActionArea, CardMedia, CardContent} from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import millify from 'millify';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const Property = ({property}) => {
    return(
    <>
    <Card sx={{ maxWidth: '20vw', height: '500px' }}>
        <CardActionArea>
            <CardMedia component="img" height="300"
            image={property.coverPhoto.url}/>
        <CardContent>
            <Box>
            <Typography variant="h5">{property?.location[3]?.name}</Typography>
            <Typography variant="h6">{property?.location[2]?.name}</Typography>
            <Typography variant="h7">{property?.location[1]?.name}</Typography>
            <Typography variant="h6">{millify(property?.price)}</Typography>
            </Box>
        </CardContent>
        </CardActionArea>
    </Card>
    </>
    );
}

export default Property;
