import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import GrassIcon from '@mui/icons-material/Grass';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import React from 'react'

function About() {
  return (
    <Container className="About" maxWidth="lg" sx={{ height:450, display: 'flex', flexDirection: 'column', alignItems: "center", gap:2}}>
        <Typography variant="h4" component="h4" sx={{fontWeight: 900}}>About us</Typography>
        <Typography color="secondary" component="p" variant="h6" sx={{ fontWeight: 400 }}>Order now and appreciate the beauty of nature</Typography>
        <Box sx={{mt:5, display: 'flex', gap:5, width: "100%"}}>
            <Box sx={{display: 'flex', flexDirection:"column", alignItems: "center",}}>
                <Box sx={{width:100, height:100, borderRadius:"50%",backgroundColor: "#c1dcdc", display: 'flex', alignItems: "center",justifyContent: "center",}}><LocalFloristIcon sx={{fontSize: 50}}/></Box>
                <Typography component="h6" variant="h6" sx={{fontWeight: 900}}>Large Assortment</Typography>
                <Typography color="secondary" component="p" variant="h6" sx={{ fontWeight: 400, textAlign: 'center' }}>we offer many different type of products with fewer variations in each category.</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection:"column", alignItems: "center",}}>
                <Box sx={{width:100, height:100, borderRadius:"50%",backgroundColor: "#c1dcdc", display: 'flex', alignItems: "center",justifyContent: "center",}}><LocalShippingOutlinedIcon sx={{fontSize: 50}}/></Box>
                <Typography component="h6" variant="h6" sx={{fontWeight: 900}}>Fast & Free Shipping</Typography>
                <Typography color="secondary" component="p" variant="h6" sx={{ fontWeight: 400, textAlign: 'center' }}>4-day or less delivery time, free shipping and an expedited delivery option.</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection:"column", alignItems: "center",}}>
                <Box sx={{width:100, height:100, borderRadius:"50%",backgroundColor: "#c1dcdc", display: 'flex', alignItems: "center",justifyContent: "center",}}><PhoneCallbackIcon sx={{fontSize: 50}}/></Box>
                <Typography component="h6" variant="h6" sx={{fontWeight: 900}}>24/7 Support</Typography>
                <Typography color="secondary" component="p" variant="h6" sx={{ fontWeight: 400, textAlign: 'center' }}>answers to any business related inquiry 24/7 and in real-time.</Typography>
            </Box>
        </Box>
    </Container>
  )
}

export default About