import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import theme from "../../utils/theme";
import React, { useState } from "react";

const pages = ["Services", "Commercial", "Login"];
const responsiveMenu = ["Home", "Product", "Pricing", "Account"];

const Home = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    anchorElNav ? handleCloseNavMenu() : setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={classes.root}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={classes.logoText}
              >
                Bandage
              </Typography>
            </Link>
            <Box sx={classes.navWrapper}>
              {pages.map((page) => (
                <Typography
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={classes.navItem}
                >
                  {page}
                  {page === "Shop" && (
                    <ExpandMoreOutlinedIcon fontSize="small" />
                  )}
                  {page === "Login" && <ArrowRightAltIcon fontSize="small" />}
                </Typography>
              ))}
            </Box>
            <Box sx={classes.rightContainer}>
              <IconButton
                aria-label="Cart"
                color="primary"
                sx={classes.cartIcon}
              >
                <AddShoppingCartOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Menu"
                onClick={handleOpenNavMenu}
                sx={classes.menuIcon}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        {anchorElNav && (
          <Box sx={classes.mobNavContainer}>
            {responsiveMenu.map((page) => (
              <MenuItem key={page}>
                <Typography key={page} sx={classes.mobNavItem}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        )}
      </AppBar>
    </>
  );
};

export default Home;

const classes = {
  root: {
    backgroundColor: "#f0f0f0",
    boxShadow: "none",
  },
  logoText: {
    flexGrow: { xs: 1, md: 0 },
    mr: 3,
    fontFamily: "monospace",
    fontWeight: 700,
    fontSize: "24px",
    letterSpacing: ".3rem",
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  navWrapper: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
  },
  navItem: {
    fontSize: 14,
    fontWeight: "700",
    margin: "0 12px",
    color: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 0,
  },
  loginButton: {
    display: { xs: "none", md: "flex", cursor: "pointer" },
  },
  loginText: {
    color: theme.palette.primary.main,
    fontSize: 14,
    mr: 2,
  },
  searchIcon: {
    color: {
      xs: theme.palette.text.primary,
      md: theme.palette.primary.main,
    },
  },
  menuIcon: {
    display: { md: "none" },
    color: {
      xs: theme.palette.text.primary,
      md: theme.palette.primary.main,
    },
  },
  cartIcon: {
    fontSize: 14,
    color: {
      xs: theme.palette.text.primary,
      md: theme.palette.primary.main,
    },
  },
  favoriteIcon: {
    color: theme.palette.primary.main,
    display: { xs: "none", md: "flex" },
    fontSize: 14,
    alignItems: "center",
  },
  mobNavContainer: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "transparent",
    marginTop: "50px",
    marginBottom: "50px",
  },
  mobNavItem: {
    fontSize: 30,
    margin: "0 10px",
    color: theme.palette.primary.light,
    display: "block",
    textAlign: "center",
  },
};
