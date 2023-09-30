import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import React from "react";
import { plants } from "../../utils/data.js";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Cart() {
  const navigate = useNavigate();
  const breadcrumbs = [
    <Typography
      key="home"
      color="secondary"
      component="p"
      variant="subtitle2"
      sx={{ cursor: "pointer", "&:hover": { color: "#484c4c" } }}
      onClick={() => navigate("/")}
    >
      Home
    </Typography>,
    <Typography
      key="products"
      color="secondary"
      component="p"
      variant="subtitle2"
      sx={{ cursor: "pointer", "&:hover": { color: "#484c4c" } }}
      onClick={() => navigate("/products")}
    >
      Products
    </Typography>,
    <Typography
      key="mycart"
      color="secondary"
      component="p"
      variant="subtitle2"
      sx={{ cursor: "pointer", "&:hover": { color: "#484c4c" } }}
      onClick={() => navigate("/mycart")}
    >
      Cart
    </Typography>,
  ];
  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mx: 5 }}>
        {breadcrumbs}
      </Breadcrumbs>
      <Container
        className="Cart"
        maxWidth="lg"
        sx={{
          my: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={8}
            sx={{ display: "flex", flexDirection: "column", gap: 5 }}
          >
            {plants.slice(0, 5).map((p) => {
              return (
                <Item
                  key={p.id}
                  sx={{ display: "flex", color: "black", gap: 5 }}
                >
                  <Checkbox
                      checked={false}
                      // onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                      sx={{ml:5}}
                    />
                  <img src={p.img} alt="" className={styles.plantImg} />
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems:'flex-start'}}>
                    <Typography component="p" variant="subtitle2">
                      {p.plantName}
                    </Typography>
                    <Typography component="p" variant="subtitle3">
                      {p.category}
                    </Typography>
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                      sx={{ mt:3, }}
                    >
                      <Button sx={{ px: 0 }}>
                        <AddRoundedIcon />
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          cursor: "auto",
                          "&:hover": {
                            backgroundColor: "white",
                            color: "black",
                          },
                        }}
                      >
                        2
                      </Button>
                      <Button sx={{ px: 0 }}>
                        <RemoveRoundedIcon />
                      </Button>
                    </ButtonGroup>
                  </Box>
                  <Box
                    sx={{
                      ml: "auto",
                      display: "flex",
                      flexDirection: "column",
                      p: 2,
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography component="p" variant="h5" color="secondary">
                      ₹ {p.price}
                    </Typography>
                    <DeleteIcon sx={{ mt: "auto" }} />
                  </Box>
                </Item>
              );
            })}
          </Grid>
          <Grid item xs={4}>
            <Item sx={{color:'black', display:'flex', flexDirection:'column', alignItems:'flex-start', p:2, gap:2,}}>
            <Typography component="p" variant="h6">
              Order Summary
            </Typography>
            <Divider flexItem sx={{ height:1, color: "#8f8f8f", }} />
            
            <Box className="separateCharges" sx={{display:'flex', width:'100%', flexDirection:'column', gap:1, alignItems:'flex-start',}}>
            <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <Typography component="p" variant="subtitle3" color="tertiary">Items</Typography>
            <Typography component="p" variant="subtitle3" color="tertiary">2</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <Typography component="p" variant="subtitle3" color="tertiary">Items Total</Typography>
            <Typography component="p" variant="subtitle3" color="tertiary">₹ 100</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <Typography component="p" variant="subtitle3" color="tertiary">Taxes</Typography>
            <Typography component="p" variant="subtitle3" color="tertiary">₹ 10</Typography>
            </Box>

            <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <Typography component="p" variant="subtitle3" color="tertiary">Delivery</Typography>
            <Typography component="p" variant="subtitle3" color="tertiary">₹ 0</Typography>
            </Box>
            </Box>

            <Divider flexItem sx={{ height:1, color: "#8f8f8f", }} />

            <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <Typography component="p" variant="h6" color="tertiary">Total</Typography>
            <Typography component="p" variant="h6" color="tertiary">₹ 110</Typography>
            </Box>

           
            <Typography component="p" variant="h6">
              Address 
            </Typography>

            <form
                style={{
                  width:'100%', display:'flex', flexDirection:'column', gap:20, alignItems:'flex-start',
                }}
              >
                <TextField
                  type="text"
                  label="Enter Delivery Location"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon color="action" />
                      </InputAdornment>
                    ),
                    inputProps: {
                      maxLength: 200,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  sx={{
                    width:'100%',
                    border: "none",
                    boxShadow: 0,
                    color: "black",
                    textTransform: "none",
                    py: 1,
                    px: 2,
                    fontSize: 16,
                    borderRadius: 2,
                    "&:hover": {
                      color: "white",
                      boxShadow: 0,
                    },
                  }}
                >
                  Checkout (₹ 110)
                </Button>

              </form>

            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
