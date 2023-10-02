import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { resetPassword } from "../services/ApiService";

const defaultTheme = createTheme();

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validate = (): boolean => {
    if (!email) {
      // also check that email is required with regex
      toast.error("email is required.");
      return false;
    }
    return true;
  };
  

  const handleClick = () => {
    if (!validate()) {
      return;
    }

    resetPassword(email)
      .then(res => {
        navigate(`/new-password/${res.userId}`)
      })
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
          <Typography component="h1" variant="h5">
            Forgot Password
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
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleClick()}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ResetPassword;
