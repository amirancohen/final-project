import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setToken } from "./TokenManager";
import { login } from "../services/ApiService";
import { AppContext } from "../App";
import { toast } from "react-toastify";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const validate = (): boolean => {
    if (!email) {
      // also check that email is required with regex
      toast.error("email is required.");
      return false;
    }

    if (!password || password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleClick = () => {
    if (!validate()) {
      return;
    }
    
    login({
      email,
      password,
    }).then((user) => {
      setToken(user.token);
      localStorage.setItem("admin", JSON.stringify(user.isAdmin))
      localStorage.setItem("login", "true")
      if (context) {
        context.setAdmin(user.isAdmin || false);
        context.setIsLogin(true)
      }
      navigate("/");
    }).catch(error => {
      //TODO: handle if has error
    });
  };

  return (
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleClick}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
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
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleClick()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signin;
