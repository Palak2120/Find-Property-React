import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#123456', position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', alignContent: 'center', height: '5%', }}>
                <Typography color='black'>Footer</Typography>
            </Box>
        </>
    );
}

export default Footer;