import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const breadcrumbs = [
    <Typography
      color="secondary"
      component="p"
      variant="subtitle2"
      sx={{ cursor: "pointer", "&:hover": { color: "#484c4c" } }}
      onClick={() => navigate("/")}
    >
      Home
    </Typography>,
    <Typography
      color="secondary"
      component="p"
      variant="subtitle2"
      sx={{ cursor: "pointer", "&:hover": { color: "#484c4c" } }}
      onClick={() => navigate("/products")}
    >
      Products
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
        </Container>
    </>
  );
}

export default Cart;
