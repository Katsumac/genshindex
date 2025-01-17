import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import "../style/Navbar.css"

export default function Navbar() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    
    <AppBar position="static" sx={{backgroundColor: "#224488", mb: 5}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* For smaller screens */}
          {/* Logo */}
          <a href="/"><img src={"/paimonSmile.png"} id="paimonNavImg" /></a>

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

                <MenuItem key="Characters" onClick={handleCloseNavMenu}>
                  <a href="/characters" className="menuItem"><Typography sx={{ textAlign: 'center' }}>Characters</Typography></a>
                </MenuItem>

                <MenuItem key="Weapons" onClick={handleCloseNavMenu}>
                  <a href="/weapons" className="menuItem"><Typography sx={{ textAlign: 'center' }}>Weapons</Typography></a>
                </MenuItem>

                <MenuItem key="Artifacts" onClick={handleCloseNavMenu}>
                  <a href="/artifacts" className="menuItem"><Typography sx={{ textAlign: 'center' }}>Artifacts</Typography></a>
                </MenuItem>

                <MenuItem key="Food" onClick={handleCloseNavMenu}>
                  <a href="/food" className="menuItem"><Typography sx={{ textAlign: 'center' }}>Food</Typography></a>
                </MenuItem>

                <MenuItem key="Profile" onClick={handleCloseNavMenu}>
                  <a href="/profile" className="menuItem"><Typography sx={{ textAlign: 'center' }}>Profile</Typography></a>
                </MenuItem>

            </Menu>
          </Box>


          {/* For larger screens */}
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
              <a href="/" className="menuItem">
                <Button
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
              </a>
              <a href="/characters" className="menuItem">
                <Button
                key="Characters"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Characters
                </Button>
              </a>
              <a href="/weapons" className="menuItem">
                <Button
                key="Weapons"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Weapons
                </Button>
              </a>
              <a href="/artifacts" className="menuItem">
                <Button
                key="Artifacts"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Artifacts
                </Button>
              </a>
              <a href="/food" className="menuItem">
                <Button
                key="Food"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Food
                </Button>
              </a>              
              <a href="/profile" className="menuItem">
                <Button
                key="Profile"
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