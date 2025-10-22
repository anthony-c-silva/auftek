// src/pages/Home/Header.jsx
import React, { useState, useContext } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Card,
    CardContent,
    TextField,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { ThemeContext } from '../../theme/AppThemeProvider'; // Ajuste o caminho do import
import auftekLogoImg from '../../assets/logo1.png'; // Ajuste o caminho do import

// --- COMPONENTE LOGO (CO-LOCADO) ---
const AuftekLogo = () => (
    <Box
        component="img"
        src={auftekLogoImg}
        alt="Auftek Logo"
        sx={{ height: 40, width: 'auto' }}
    />
);

// --- ITENS DE NAVEGAÇÃO (CO-LOCADO) ---
const navItems = [
    'Sobre nós',
    'Soluções',
    'Parceiros',
    'Premiações',
    'Blog',
    'Contato',
];

// ================= HEADER =====================
export default function Header() {
    const theme = useTheme();
    const colorMode = useContext(ThemeContext);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', width: 250 }}
        >
            <Box sx={{ my: 2 }}>
                <AuftekLogo />
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem component="button" key={item}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <AuftekLogo />
                    {isMobile ? (
                        <Box>
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                            >
                                {theme.palette.mode === 'dark' ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                            <IconButton
                                color="inherit"
                                edge="end"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    color="inherit"
                                    sx={{ ml: 2, textTransform: 'none' }}
                                >
                                    {item}
                                </Button>
                            ))}
                            <Button variant="contained" sx={{ ml: 3 }}>
                                Sistema
                            </Button>
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                                sx={{ ml: 1 }}
                            >
                                {theme.palette.mode === 'dark' ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </Container>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
