import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { updateUserPassword } from "../services/ApiService";


const defaultTheme = createTheme();

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams()
  const navigate = useNavigate();
  const userId = params.id;

  const validate = (): boolean => {
    if (!password) {
      // also check that email is required with regex
      toast.error("password is required.");
      return false;
    }
    return true;
  };
  

  const handleClick = () => {
    if (!validate() || !userId) {
      return;
    }
    updateUserPassword(userId, password)
      .then(() => {
        navigate("/signin") 
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
            New Password
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
              id="password"
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleClick()}
            >
              Send Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default NewPassword;
