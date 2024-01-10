import { Button, Stack } from "@mui/material";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import { Link } from "react-router-dom";

const BuyButton = ({purpose}) => {
return(
    <>
    <Button component={Link} to='/buy' variant="outlined" sx={{width:"30vh", height:"inherit", borderRadius:4, border:2, borderColor:'white', color:'white','&:hover':{borderColor:'white', background:'linear-gradient(rgba(148, 163, 155, 0.7),rgba(137, 149, 143, 0.79))'}, mx:2}}>
        <Stack alignItems='center'>
        <HomeWorkOutlinedIcon fontSize="large"/>
        {purpose}
        </Stack>
    </Button>
    </>
);
}

export default BuyButton;