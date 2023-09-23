import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
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
      onClick={() => navigate("/contact")}
    >
      Contact
    </Typography>,
  ];
  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mx: 5 }}>
        {breadcrumbs}
      </Breadcrumbs>
      <Container
        className="Contact"
        maxWidth="lg"
        sx={{
          my: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontWeight: 800,
            }}
          >
            Contact Us
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50vw" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              my: 3,
              gap: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Enter you email"
              maxRows={1}
            />
            <TextField
              id="outlined-multiline-static"
              label="What's your question?"
              multiline
              rows={4}
              defaultValue=""
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                border: "none",
                boxShadow: 0,
                color: "black",
                textTransform: "none",
                py: 0.5,
                px: 2,
                fontSize: 16,
                borderRadius: 2,
                "&:hover": {
                  color: "white",
                  boxShadow: 0,
                },
                alignSelf: "flex-end",
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Contact;
