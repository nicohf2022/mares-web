import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // 🔹 Importamos estilos externos
import logoMares from '../assets/logoMares@1x.webp';
import logoMares2 from '../assets/logoMares@2x.webp';
const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: '¿Que ofrecemos?', path: '/ofrecemos' },
  { name: 'Contacto', path: '/contacto' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="drawer-container">
      <Box className="drawer-logo">
        <img
       src={logoMares}
          alt="Logo Mares"
          className="drawer-img"
          aria-label="Volver al inicio de Mares Construcción"
          srcSet={`${logoMares} 1x, ${logoMares2} 2x`}
          width="192"
          height="133"
          loading="eager"
          fetchPriority="high"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </Box>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Button
            key={item.name}
            component={Link}
            to={item.path}
            fullWidth
            className={`drawer-link ${isActive ? 'active' : ''}`}
          >
            {item.name}
          </Button>
        );
      })}
    </Box>
  );

  return (
    <Box className="navbar-root">
      <CssBaseline />
      <AppBar component="nav" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          {/* Logo */}
          <Button component={Link} to="/" className="logo-btn">
            <img
              src={logoMares}
              alt="Logo Mares"
              className="logo-img"
            />
          </Button>

          {/* Ícono Hamburguesa */}
          <IconButton
            aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            edge="end"
            onClick={handleDrawerToggle}
            className="menu-icon"
          >
            <MenuIcon className="menu-icon-size" />
          </IconButton>

          {/* Navegación Desktop */}
          <Box className="desktop-nav">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          className="mobile-drawer"
          PaperProps={{
            role: "navigation",
            "aria-label": "Menú principal de navegación"
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;