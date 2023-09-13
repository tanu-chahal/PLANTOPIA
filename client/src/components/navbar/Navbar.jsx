import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React from 'react'

function Navbar() {
  return (
    <Container className="Navbar" maxWidth='lg' sx={{height:100, display: 'flex', alignItems:'center',}}>
      <Typography component='h1' variant='h5' className="logo" sx={{fontFamily: "'Barlow', sans-serif", mr:10,}}>PLANTOPIA</Typography>
      <Box className="pages" sx={{display: 'flex', gap:5}}>
      <Typography color="tertiary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Home</Typography>
      <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Products</Typography>
      <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Contacts</Typography>
      </Box>
      <Box className="utils" sx={{ml:'auto', display:'flex', gap:5}}>
        <ShoppingCartOutlinedIcon/>
        <PersonOutlineRoundedIcon/>
        <Divider orientation="vertical" flexItem sx={{ width: '0.5px', backgroundColor: "black" }}/>
        <MenuRoundedIcon/>
      </Box>
    </Container>
  )
}

export default Navbar