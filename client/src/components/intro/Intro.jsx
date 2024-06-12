import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import React from "react";
import styles from "./Intro.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Intro() {

  return (
    <Container
    className='intro'
      maxWidth="lg"
      sx={{
        backgroundColor: "#c1dcdc",
        display: "flex",
        justifyContent: "space-between",
        height: 450,
        borderRadius: {xs:0, sm: 10,},
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          alignSelf: "flex-start",
          mx: 5,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          my: 5,
          width: 400,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 900, 
            maxWidth: {xs:'100%', md:350 },
            fontSize: {xs: '35px',}
          }}
        >
          Buy your dream plants
        </Typography>

        <Box sx={{ display:"flex", alignItems: "center", gap: 5 }}>
          <Box>
            <Typography component="p" variant="h4" sx={{ fontWeight: 500 }}>
              50+
            </Typography>
            <Typography component="p" variant="h6" sx={{ fontWeight: 600 }}>
              Plant Species
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ width: 2, backgroundColor: "black" }}
          />
          <Box>
            <Typography component="p" variant="h4" sx={{ fontWeight: 500 }}>
              100+
            </Typography>
            <Typography component="p" variant="h6" sx={{ fontWeight: 600 }}>
              Customers
            </Typography>
          </Box>
        </Box>

        <form noValidate autoComplete="off" className={styles.searchForm}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.search}
          />
          <button variant="contained" className={styles.searchBtn}>
            <SearchRoundedIcon />
          </button>
        </form>
      </Box>

      <Box
      className = 'imgBox'
        sx={{
          alignSelf: "flex-end",
          justifySelf: "flex-end",
          display: {xs:'none', sm: "flex",},
          position: "relative",
          height: "100%",
          width: "60%",
          gap: 5,
          justifyContent: "end",
        }}
      >
        <img
          style={{
            width: "100px",
            position: "absolute",
            bottom: "5%",
            left: "5%",
            // display: 'none',
            transform: "rotate(15deg)",
          }}
          className={styles.arrow}
          src="/img/c-arr-1.png"
          alt=""
        />
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "50% 50% 0 50%",
            alignSelf: "flex-end",
            mx: 10,
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          <img
            style={{ 
              // width: "400px", heigth: "400px", borderRadius: "50%"
            width: "100%",
            height: "auto", 
            maxWidth: "400px",
            borderRadius: "50%",
           }}
            src="/img/pot-2.jpeg"
            alt=""
          />
        </Box>
        <img
          style={{
            maxWidth: "80px",
            position: "absolute",
            top: "0%",
            right: "5%",
            transform: "rotate(180deg)",
            // display:'none',
            }}
          src="/img/c-arr-1.png"
          className={styles.arrow}
          alt=""
        />
      </Box>
    </Container>
  );
}

export default Intro;
