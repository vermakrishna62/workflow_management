import React, { useState } from "react";

import axios from "../interceptor/axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function TestAuthentication() {
  const navigate_user = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const defaultTheme = createTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Username and password are required", {
        position: "top-center",
      });
      return;
    }

    const rememberMeChecked = e.target.querySelector(
      'input[type="checkbox"]'
    ).checked;

    if (!rememberMeChecked) {
      toast.error("Please check the 'Remember me' checkbox", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await axios.post(
        "token/",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
        { withCredentials: true }
      );

      localStorage.clear();

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      const access_token = response.data.access;
      // const refresh_token = response.data.refresh;
      console.log(access_token);

      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;

      console.log(response);
      // alert(access_token + "\n" + refresh_token);

      setNavigate(true);
    } catch (e) {
      toast.error("Invalid Login Credentials", { position: "top-center" });
      navigate_user("/");
    }
  };

  if (navigate) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button type="submit">Login</button>
        </div> */}
      {/* </form> */}

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign-in Form
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" required />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default TestAuthentication;
