import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [value, setValue] = React.useState("login");
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
      onClick={() => navigate("/login")}
    >
      Login
    </Typography>,
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {" "}
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mx: 5 }}>
        {breadcrumbs}
      </Breadcrumbs>
      <Container
        maxWidth="lg"
        sx={{
          my: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            minWidth: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            borderRadius: "0px",
            py:5,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="login" label="Login" />
            <Tab value="register" label="Register" />
          </Tabs>
          {value == "login" ? (
            <Box sx={{ display:"flex", flexDirection:'column', gap:5}}>
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
                    fontSize: 16,
                    borderRadius: 2,
                    "&:hover": {
                      color: "white",
                      boxShadow: 0,
                    },
                  }}
                >
                  <GoogleIcon sx={{mr:2}}/>
                  Continue with Google
                </Button>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
    
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  sx={{
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
                  Log In
                </Button>
                {/* {error && <span>{error}</span>} */}
              </form>
            </Box>
          ) : (
            <Box sx={{ display:"flex", flexDirection:'column', gap:5}}>
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
                    fontSize: 16,
                    borderRadius: 2,
                    "&:hover": {
                      color: "white",
                      boxShadow: 0,
                    },
                  }}
                >
                  <GoogleIcon sx={{mr:2}}/>
                  Continue with Google
                </Button>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <TextField
                  type="text"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineRoundedIcon color="action" />
                      </InputAdornment>
                    ),
                    inputProps: {
                      maxLength: 25, 
                    },
                  }}
                />
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
    
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  sx={{
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
                  Log In
                </Button>
                {/* {error && <span>{error}</span>} */}
              </form>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default Login;
