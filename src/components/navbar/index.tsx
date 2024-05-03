import {
  AppBar,
  Box,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import theme from "../../utils/theme";
import React, { useCallback, useState } from "react";
import Logo from "../../assets/png/logo.png";
import { pages } from "../../constants";

const getIcon = (page: string) => {
  if (page === "Services") return <ExpandMoreOutlinedIcon fontSize="small" />;
  if (page === "Login") return <ArrowRightAltIcon fontSize="small" />;
  return null;
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      anchorElNav ? handleCloseNavMenu() : setAnchorElNav(event.currentTarget);
    },
    [anchorElNav]
  );

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);
  return (
    <>
      <AppBar position="static" sx={classes.root}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={classes.toolBar}>
            <Box sx={{ cursor: "pointer" }}>
              <img src={Logo} alt="Logo" />
            </Box>
            <Box sx={classes.rightContainer}>
              <Box sx={classes.navWrapper}>
                {pages.map((page) => (
                  <Typography
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      ...classes.navItem,
                      ...(page === "Book Service" && {
                        padding: "10px 30px",
                        borderRadius: "40px",
                        backgroundColor: theme.palette.primary.main,
                      }),
                    }}
                  >
                    {page}
                    {getIcon(page)}
                  </Typography>
                ))}
              </Box>
              <IconButton
                aria-label="Cart"
                color="primary"
                sx={classes.cartIcon}
              >
                <AddShoppingCartOutlinedIcon fontSize="large" />
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
            {pages.map((page) => (
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

export default Navbar;

const classes = {
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
    padding: "10px 0",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 0,
  },
  navWrapper: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
  },
  navItem: {
    fontSize: 16,
    fontWeight: "600",
    margin: "0 12px",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  cartIcon: {
    color: theme.palette.text.primary,
    margin: "0 0 0 20px",
  },
  menuIcon: {
    display: { md: "none" },
    color: {
      xs: theme.palette.text.primary,
      md: theme.palette.primary.main,
    },
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
    margin: " 10px",
    color: theme.palette.text.primary,
    textAlign: "center",
  },
};
