import { Avatar, Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import img1 from './img1.png'
import BuyButton from "../components/BuyButton";
import RentButton from "../components/RentButton";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
        {/* Main Background */}
        <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', height: '100%', zIndex: '-10' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(7, 1, 1, 0.7),transparent)' }}></Box>
          <img src={img1} style={{ width: "100%", height: '100%', zIndex: '-11' }}></img>
        </Box>

        {/* Content */}
        <Container sx={{ height: '80vh' }}>
          <Stack justifyContent="flex-end" height="inherit" width="fit-content">
            <Title variant={{ xs: "h5", sm: "h4", md: "h3" }}
              sx={{ letterSpacing: "0.5em", color: "white", fontFamily: "monospace" }}>Explore Your</Title>
            <Title variant={{ xs: "h4", sm: "h3", md: "h2" }}
              sx={{ fontWeight: 600, color: "white", mb: 3, letterSpacing: '0.5em' }}>Dream Properties</Title>
            <Stack direction='row' height="30vh" justifyContent="space-around">
              <BuyButton purpose={"Looking to Buy a Property"} />
              <RentButton purpose={"Find a Property for Rent"} />
            </Stack>
          </Stack>
        </Container>

      {/* Section 1 - Featured Agencies */}
      {/* <Box sx={{
        bgcolor:'red', height: "500px",
        position: "relative", bottom: 0, left: 0, right: 0, top:'100%', mt: 5, width: '100vw'
      }}>
        <Container sx={{ mt: 5, bgcolor: 'grey' }}>
          <Container maxWidth="600px">
            <Title variant={{ xs: "h5", sm: "h4", md: "h3" }} sx={{ textAlign: "center", color: "#1e1e1c" }}>
              Featured Agencies
            </Title>
          </Container>
          <Grid container rowSpacing={4} sx={{ mt: 2, mx: 4 }} justifyContent="center">
            {
              agencyList.map((agency) => {
                return (
                  <Grid item key={agency.name} xs={4} md={3} lg={2.4}>
                    <img src={agency.logo.url} style={{ height: "120px", width: "150px", objectFit: "", borderRadius: 10, borderColor: 'black', border: 10 }} />
                  </Grid>
                );
              })
            }
          </Grid>
        </Container>
      </Box> */}
    </>
  );
}

export default Home;