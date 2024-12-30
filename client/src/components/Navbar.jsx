import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import "../style/Navbar.css"

const pages = ["Home", "Profile"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    
    <AppBar position="static" sx={{backgroundColor: "#224488", mb: 5}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* For larger screens */}
          {/* Logo */}
          <a href="/"><img src={"/src/img/paimonSmile.png"} id="paimonNavImg" /></a>

          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GenshinDex
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            {/* Navbar Accordion Button */}
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >

              {/* Menu Items */}
                <MenuItem key="Home" onClick={handleCloseNavMenu}>
                  <a href="/" className="menuItem"><Typography sx={{ textAlign: 'center' }}>Home</Typography></a>
                </MenuItem>

                <MenuItem key="Profile" onClick={handleCloseNavMenu}>
                  <a href="/profile" className="menuItem"><Typography sx={{ textAlign: 'center' }}>Profile</Typography></a>
                </MenuItem>

            </Menu>
          </Box>

          {/* For smaller screens */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GenshinDex
          </Typography>

          {/* Menu Items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <a href="/">
                <Button
                key="Home"
                src="/"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
              </a>
              <a href="/profile">
                <Button
                key="Profile"
                src="/profile"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Profile
              </Button>
            </a>              
          </Box>
          <a href="/login"><Button variant="contained">Log Out</Button></a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}