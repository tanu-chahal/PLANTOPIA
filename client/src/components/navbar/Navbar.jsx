import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { useRecoilState } from "recoil";
import {menuState, activePage} from "../../recoilState.js"
import styles from "./Navbar.module.css"
import {useLocation} from "react-router-dom"

function Navbar() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [menu, setMenu] = useRecoilState(menuState);
  const [active, setActive] = useRecoilState(activePage);
  useEffect(() => {
    setActive(pathname); 
  }, [pathname, setActive]);
  return (
    <Container className="Navbar" maxWidth='lg' sx={{height:100, display: 'flex', alignItems:'center', userSelect:'none'}}>
      <Typography component='h1' variant='h5' className="logo" sx={{fontFamily: "'Barlow', sans-serif", mr:10,}} onClick={()=>navigate("/")}>PLANTOPIA</Typography>
      <Box className="pages" sx={{display: 'flex', gap:5}}>
      <Typography color={active === "/" ? "tertiary": "secondary" }component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}} onClick={()=>navigate("/")}>Home</Typography>
      <Typography color={active === "/products" ? "tertiary": "secondary" } component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}} onClick={()=>navigate("/products")}>Products</Typography>
      <Typography color={active === "/contact" ? "tertiary": "secondary" } component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}} onClick={()=>navigate("/contact") }>Contact</Typography>
      </Box>
      <Box className="utils" sx={{ml:'auto', display:'flex', gap:5}}>
         
        <ShoppingCartOutlinedIcon onClick={()=>navigate("/mycart")} className={`${styles.slideInOut} ${menu ? styles.visible : ''}`}/>
        <PersonOutlineRoundedIcon onClick={()=>navigate("/login")} className={`${styles.slideInOut} ${menu ? styles.visible : ''}`}/>
        {menu && <Divider orientation="vertical" flexItem sx={{ width: '0.5px', backgroundColor: "black", objectFit:'fill' }} />}
        <MenuRoundedIcon sx={{'&.hover':{transform: "rotate(360deg)",}}} onClick={()=> setMenu(prevMenu => !prevMenu)}/>
      </Box>
    </Container>
  )
}

export default Navbar