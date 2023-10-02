import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import SocialButton from "./SocialButton";

 function Footer() {
  return (
    <>
    <Box
      sx={{
        backgroundColor: (theme) =>
        theme.palette.mode === "light"
        ? theme.palette.grey[500]
        : theme.palette.grey[800],
        p: 6,
      }}
      component="footer"
      >
      <Container maxWidth="sm">
        <SocialButton></SocialButton>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            PROJECT X
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
      </>
     );
}

export default Footer;