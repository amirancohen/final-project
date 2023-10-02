import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../App";
import { removeToken } from "../auth/TokenManager";

const user_pages = [{ name: "Projectx", route: "projectx" }];
const admin_pages = [
  { name: "Addprojectx", route: "projectx/create" },
  { name: "Messagebox", route: "messagebox" },
];
const connectedMenu = ["Signin", "Signup"];
const noConnectedMenu = ["Logout"];

function Header() {
  const context = React.useContext(AppContext);
  const navigator = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    removeToken();
    localStorage.removeItem("admin");
    localStorage.removeItem("login");
    context?.setIsLogin(false)
    context?.setAdmin(false)
    navigator("signin");
  };

  return (
    <AppBar position="static" className="bg-black bg-gradient">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className="d-flex justify-content-start">
              PROJECT
              <CloseIcon
                sx={{ display: { xs: "none", md: "flex" }, fontSize: 30 }}
              />
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {user_pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              {admin_pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  {context?.admin && (
                    <Typography textAlign="center">{page.name}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CloseIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PROJECT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user_pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to={`/${page.route}`}
                  className="nav-link active text-warning"
                  aria-current="page"
                >
                  {page.name}
                </NavLink>
              </Button>
            ))}
            {admin_pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {context?.admin && (
                  <NavLink
                    to={`/${page.route}`}
                    className="nav-link active text-warning"
                    aria-current="page"
                  >
                    {page.name}
                  </NavLink>
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {context?.isLogin &&
                noConnectedMenu.map((item) => (
                  <MenuItem key={item} onClick={() => handleCloseUserMenu()}>
                    <Typography
                      textAlign="center"
                      onClick={() => handleLogout()}
                      className="nav-link active text-warning"
                    >
                      {item}
                    </Typography>
                  </MenuItem>
                ))}
              { (!context || context.isLogin === false) && 
                connectedMenu.map((item) => (
                  <MenuItem key={item} onClick={() => handleCloseUserMenu()}>
                    <Typography textAlign="center">
                      <NavLink
                        to={"/" + item}
                        className="nav-link active text-warning"
                        aria-current="page"
                      >
                        {item}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
