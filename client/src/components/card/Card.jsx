import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Card.module.css'

function Card({id,name,img,category,price,rate, desc}) {
  const navigate = useNavigate();
  return (
    <Paper key={id} elevation={2} sx={{overflow:'hidden', height:'fit-content', display:'flex', width:'400px', my:10 }}>

            <img src={img} alt="" className={styles.plantImg} />

            <Box className="plantDesc" sx={{mt:5, mx:2, display:'flex', flexDirection:'column'}}>

            <Box className="info">
              <Typography component="h3" variant="h6">
              {name}
              </Typography>
            <Typography component="p" variant="subtitle3" color="secondary">
              {category}
            </Typography>
            <Typography component="p" variant="subtitle3" sx={{mt:1}}>
              {desc}
            </Typography>
            </Box>

            <Box sx={{my:'auto', gap:2}}>

            <Box sx={{display:'flex', gap:1, alignItems:'center'}}>
              <AccessTimeIcon fontSize="small"/> <Typography component="p" variant="subtitle3" >
              2 days
            </Typography>
            </Box>


            <Box sx={{display: 'flex', alignItems:'center'}}><Rating name="read-only" size="small" value={rate} readOnly defaultValue={0} precision={0.5}/> {rate}</Box>

            <Box className="CTA" sx={{display:"flex", flexDirection:'column', gap:1, mt:1}}>
            <Typography component="p" variant="h6" color="secondary">
              ₹ {price}
            </Typography>
            <Button
          variant="contained"
          color="primary"
          sx={{
            border: "none",
            boxShadow: 0,
            color: "black",
            textTransform: "none",
            py: 1,
            px: 2,
            fontSize: 12,
            "&:hover": {
              color: "white",
              boxShadow: 0,
            },
          }}
          onClick={()=>navigate("/mycart")}
        >
          Add to Cart
        </Button>
            </Box>

            </Box>
            
            </Box>
    </Paper>
  )
}

export default Card