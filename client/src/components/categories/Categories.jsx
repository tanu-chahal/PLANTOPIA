import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <Box
      className="Categories"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt:5, userSelect:'none'
      }}
    >
      <Typography variant="h4" component="h4" sx={{ fontWeight: 800 }}>
        Categories
      </Typography>
      <Typography
        color="secondary"
        component="p"
        variant="h6"
        sx={{ mt:2, }}
      >
        Find what you're looking for
      </Typography>

      <Box className='images'
        sx={{
          backgroundColor: "#c1dcdc",
          mt: 10,
          display: "flex",
          gap: 15,
          width: "100%",
          pt:5,
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            position: "absolute",
            top: "-5%",
            left: "7%",
          }}
        >
          <img
            src="/img/plant-12.jpg"
            alt=""
            style={{
              width: "350px",
              height: "550px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <Typography component="h6" variant="h6" sx={{ fontWeight: 800,}}>
            Natural Plants
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <img
            src="/img/plant-4.jpg"
            alt=""
            style={{
              width: "350px",
              height: "550px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Typography component="h6" variant="h6" sx={{ fontWeight: 800,}}>
            Plant Accessories
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            position: "absolute",
            top: "-5%",
            right: "7%",
          }}
        >
          <img
            src="/img/plant-13.jpg"
            alt=""
            style={{
              width: "350px",
              height: "550px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <Typography component="h6" variant="h6" sx={{ fontWeight: 800,}}>
            Artificial Plants
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{backgroundColor: '#c1dcdc', width:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap:2, pt:2, pb: 10,}}>
      <Typography component="p" variant="h6" color="secondary" sx={{textAlign:'center', maxWidth: 300,  userSelect:'none'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            border: "none",
            boxShadow: 0,
            color: "black",
            textTransform: "none",
            py: 1,
            px: 3,
            fontSize: 20,
            borderRadius: 3,
            '&:hover': {
                color: "white",
                boxShadow: 0,
              },
          }}
          onClick={() => navigate("/products")}
        >
          Explore <ArrowForwardRoundedIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Categories;
