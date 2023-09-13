import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'

function Footer() {
  return (
    <Box className="Footer" sx={{backgroundColor: "#c1dcdc",height:'400px', display: 'flex', justifyContent:'space-between', width: '100%'}}>
        <Box className="left" sx={{mx:10, mt:7, display:'flex', flexDirection:'column', gap:4, userSelect:'none'}}>
            <Typography component='h1' variant='h5' sx={{fontFamily: "'Barlow', sans-serif",}}>PLANTOPIA</Typography>
            <Typography component="h2" variant="h6" color='secondary' sx={{maxWidth:200}}>
          We help you find your dream plant
        </Typography>
        <Box className='socialMedia' sx={{display:'flex', gap:2 }}>
        <Box sx={{borderRadius:'50%', border: '1px solid #484c4c', p:1, display:'flex', justifyContent: 'center', alignItems:'center', cursor:'pointer', '&:hover': {borderColor: 'black'},}}><GitHubIcon color='tertiary' sx={{'&:hover': { color: 'black'}}} /></Box>
            <Box sx={{borderRadius:'50%', border: '1px solid #484c4c', p:1, display:'flex', justifyContent: 'center', alignItems:'center', cursor:'pointer', '&:hover': {borderColor: 'black'},}}><InstagramIcon color='tertiary' sx={{'&:hover': { color: 'black'}}}  /></Box>
            <Box sx={{borderRadius:'50%', border: '1px solid #484c4c', p:1, display:'flex', justifyContent: 'center', alignItems:'center', cursor:'pointer', '&:hover': {borderColor: 'black'},}}><TwitterIcon color='tertiary' sx={{'&:hover': { color: 'black'}}}  /></Box>
        </Box>
        <Typography component="h2" variant="h6" color='secondary' sx={{mt:'auto', mb:5}} >2023 all Right Reserved Term of use PLANTOPIA</Typography>
        </Box>

        <Box className="right" sx={{display: 'flex', gap:5, mt:7, mx:10, userSelect:'none'}}>
          <Box sx={{display:'flex', flexDirection:'column', gap:3}}>
          <Typography component="h6" variant="subtitle1">Information</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>About</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Product</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Blog</Typography>
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', gap:3}}>
          <Typography component="h6" variant="subtitle1">Company</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Community</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Career</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Our Story</Typography>
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', gap:3}}>
          <Typography component="h6" variant="subtitle1">Contact</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Getting Started</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Pricing</Typography>
          <Typography color="secondary" component="p" variant="subtitle2" sx={{cursor:'pointer', '&:hover': { color: '#484c4c',},}}>Resources</Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default Footer