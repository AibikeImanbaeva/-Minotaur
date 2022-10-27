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
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

//custom
import { ThemeProvider, createTheme } from "@mui/material";

const themeNav = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7319d28a",
    },
  },
});



const pages = [
  {
    type: "Собрать набор",
    path: "/createbaskets",
  },
  {
    type: "Создать дизайн",
    path: "/createdesign",
  },

  {
    type: "Каталог",
    path: "/catalog",
  },
  {
    type: <img src="https://d.wattpad.com/story_parts/694124829/images/15825c1f140909d7491378560656.png" className="navIcon" alt="" />,
    path: "/",
  },
  {
    type: "Корзина",
    path: "/cart",
  },
];
//custom

const ResponsiveAppBar = () => {
  //custom

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <ThemeProvider theme={themeNav}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
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
                  {pages.map((page) => (
                    <MenuItem key={page.type} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate(page.path)}
                      >
                        {page.type}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.type}
                    onClick={() => navigate(page.path)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.type}
                  </Button>
                ))}
                <Button
                  onClick={() => navigate("/login")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Вход
                </Button>
                <Button
                  onClick={() => navigate("/registration")}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Регистрация
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
export default ResponsiveAppBar;
