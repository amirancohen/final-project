import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendmenew } from "../services/ApiService";
// import { sendmenew } from "../services/ApiService";

export interface Sendmessag {
  _id?: string;
  fullname?: string;
  phone?: string;
  email?: string;
  facebook?: string;
  fileup?: string;
  textarea?: string;
}

function Sendemail() {
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [fileup, setFileup] = useState("");
  const [textarea, setTextarea] = useState("");

  function handleClick() {
    sendmenew({
      fullname,
      phone,
      email,
      facebook,
      fileup,
      textarea,
    }).then((sendmenew: any) => {
      console.log(sendmenew);
      navigate("/");
    });
    setFullname("");
    setPhone("");
    setEmail("");
    setFacebook("");
    setFileup("");
    setTextarea("");
  }
  return (
    <>
      <div className="mt-5 text-center">
        <h1>Send mesaage for to job</h1>
        <div>
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
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="fullname"
                        label="Full Name"
                        value={fullname}
                        name="fullname"
                        onChange={(e) => setFullname(e.target.value)}
                        type="text"
                        autoComplete="fullname"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        value={phone}
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        label="Phone"
                        type="text"
                        id="Phone"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="facebook"
                        label="facebook"
                        value={facebook}
                        name="facebook"
                        onChange={(e) => setFacebook(e.target.value)}
                        autoComplete="facebook"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="file"
                        label="file"
                        value={fileup}
                        name="fileup"
                        onChange={(e) => setFileup(e.target.value)}
                        autoComplete="file"
                        type="file"
                      />
                    </Grid>
                  </Grid>
                  <div className="form-floating mt-3">
                    <textarea
                      required
                      value={textarea}
                      name="textarea"
                      onChange={(e) => setTextarea(e.target.value)}
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleClick}
                  >
                    send message
                  </Button>
                  <Grid container justifyContent="flex-end">
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

export default Sendemail;
