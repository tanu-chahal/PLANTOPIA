import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import React from "react";
import styles from "./Intro.module.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Intro() {
    
  const inputStyle = { fontSize: '18px', width: '100%', borderRadius: "10px", height: '20px', padding: '20px 15px', border: 'none', color: "black",}

  return (
    <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#c1dcdc",
          display: "flex",
          justifyContent: "space-between",
          height: 450,
          borderRadius: 10,
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
            width: 400
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 900, maxWidth: 300 }}>
            Buy your dream plants
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Box>
              <Typography component="p" variant="h4" sx={{ fontWeight: 500 }}>
                50+
              </Typography>
              <Typography component="p" variant="h6" sx={{ fontWeight: 400 }}>
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
              <Typography component="p" variant="h6" sx={{ fontWeight: 400 }}>
                Customers
              </Typography>
            </Box>
          </Box>

          <form noValidate autoComplete="off" className={styles.searchForm}>
            <input type="text" placeholder="What are you looking for?" className={styles.search} style={inputStyle} />
            <button className={styles.searchBtn}><SearchRoundedIcon/></button>
          </form>
        </Box>

        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "50% 50% 0 50%",
            alignSelf: "flex-end",
            mx: 10,
          }}
        >
          <img
            style={{ width: "400px", borderRadius: "50%" }}
            src="/img/pot-2.jpeg"
            alt=""
            className="right"
          />
        </Box>
      </Container>
  )
}

export default Intro