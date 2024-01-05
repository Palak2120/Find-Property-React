import { Box, Container, Stack,  Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import img1 from './img1.jpg'

const Home = () => {
    return (
        <>
        <Box sx={{position:'fixed', width:'100%', height:'100%', zIndex:'-10'}} bgcolor='red'>
        <img src={img1} style={{ width: "100%", height:'100%'}}></img>
        </Box>
        <Box sx={{width: '100%'}}>
            <Box sx={{width: '100%', height:'100%', position:'fixed', zIndex: -10, top: 0, left: 0, right: 0}}>
                <img src={img1} style={{ width: "100%", height:'100%'}}></img>
            </Box>

            <Container sx={{
          height: "100vh",
          border: '3px'
        }}>
            <Stack sx={{ height: "100%" }} justifyContent='center'>
            <Typography variant="h4" color="white"
          >
            Explore your
          </Typography>
          <Typography variant="h2" color="white"
          >
           Dream Properties
          </Typography>
            </Stack>
            </Container>
        </Box>
        </>
    );
}

export default Home;