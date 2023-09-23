import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import React from "react";
import { plants } from "../../utils/data.js";
import styles from "./BestSelling.module.css";
import { useNavigate } from "react-router-dom";

function BestSelling() {
  const navigate = useNavigate();
  return (
    <Container
      className="BestSelling"
      maxWidth="lg"
      sx={{
        display: "flex",
        gap: 5,
        height: 450,
        alignItems: "center",
        my: 10,
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          height: 350,
          width: 250,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "flex-start",
          justifyItems: "start",
        }}
      >
        <Typography component="h4" variant="h4" sx={{ fontWeight: 800 }}>
          Best Selling Plants
        </Typography>
        <Typography component="h4" variant="h6" color="secondary">
          Easiest way to healthy life by buying your favorite plants{" "}
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
            px: 3,
            fontSize: 20,
            borderRadius: 3,
            "&:hover": {
              color: "white",
              boxShadow: 0,
            },
          }}
          onClick={() => navigate("/products")}
        >
          See more <ArrowForwardRoundedIcon />
        </Button>
      </Box>
      {plants.slice(0,3).map((p) => {
        return (
          <Box key={p.id}>
            <img src={p.img} alt="" className={styles.plantImg} />
            <Typography component="h5" variant="h6">
              {p.category}
            </Typography>
            <Typography component="p" variant="h6" color="secondary">
              ₹ {p.price}
            </Typography>
          </Box>
        );
      })}
    </Container>
  );
}

export default BestSelling;
