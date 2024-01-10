import { Button, Stack } from "@mui/material";
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import { Link } from "react-router-dom";

const RentButton = ({purpose}) => {
return(
    <>
    <Button component={Link} to='/rent' variant="outlined" sx={{width:"30vh", height:"inherit", borderRadius:4, border:2, borderColor:'white', color:'white', mx:2, '&:hover':{borderColor:'white', background:'linear-gradient(rgba(148, 163, 155, 0.7),rgba(137, 149, 143, 0.79))'}}}>
        <Stack alignItems='center'>
        <RoofingOutlinedIcon fontSize="large"/>
        {purpose}
        </Stack>
    </Button>
    </>
);
}

export default RentButton;