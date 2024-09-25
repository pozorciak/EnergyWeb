import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Images/logoEnergy.png'; // Cesta k logu
import { Link } from 'react-router-dom'; // Import Link z React Router

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = ['MALÁ ENERGETIKA', 'VEĽKÁ ENERGRTIKA', 'KONTAKT'];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* Logo namiesto textu v rozťahovacom menu */}
            <Link to="/">
                <img src={logo} alt="Logo" style={{ height: '80px', margin: '16px auto' }} />
            </Link>
            <List>
                <ListItem button key={'MALÁ ENERGETIKA'}>
                    <ListItemText primary={'MALÁ ENERGETIKA'} />
                </ListItem>
                <ListItem button key={'VEĽKÁ ENERGRTIKA'}>
                    <ListItemText primary={'VEĽKÁ ENERGRTIKA'} />
                </ListItem>
                <ListItem button key={'KONTAKT'}>
                    <ListItemText primary={'KONTAKT'} />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo */}
                <img src={logo} alt="Logo" style={{ height: '80px' }} />

                {/* Mobilné menu */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <MenuIcon sx={{ color: 'black' }} />
                </IconButton>

                {/* Desktop navigácia */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button component={Link} to="/mala-energetika" key={'MALÁ ENERGETIKA'} sx={{ color: 'gray', fontSize: '16px', fontWeight: '500', fontFamily: 'Exo 2, sans-serif' }}>
                        {'MALÁ ENERGETIKA'}
                    </Button>
                    <Button component={Link} to="/velka-energetika" key={'VEĽKÁ ENERGRTIKA'} sx={{ color: 'gray', fontSize: '16px', fontWeight: '500', fontFamily: 'Exo 2, sans-serif' }}>
                        {'VEĽKÁ ENERGRTIKA'}
                    </Button>
                    <Button component={Link} to="/kontakt" key={'KONTAKT'} sx={{ color: 'gray', fontSize: '16px', fontWeight: '500', fontFamily: 'Exo 2, sans-serif' }}>
                        {'KONTAKT'}
                    </Button>
                </Box>
            </Toolbar>

            {/* Vysúvacie menu pre mobil */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}

export default Header;
