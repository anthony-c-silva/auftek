import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import {
    Phone as PhoneIcon,
    MailOutline as MailOutlineIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon,
    WhatsApp as WhatsAppIcon,
    LocationOn as LocationOnIcon,
} from '@mui/icons-material';

import auftekLogoImgCompleta from '../../assets/logo2.png';

const AuftekLogo2 = () => (
    <Box
        component="img"
        src={auftekLogoImgCompleta}
        alt="Auftek Logo"
        sx={{
            height: 'auto',
            width: 150,
            mb: 2,
        }}
    />
);

const Footer = () => (
    <>
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0D1B2A', // Cor azul escura da imagem
                color: 'white',
                pt: 8,
                pb: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <AuftekLogo2 />
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                            <Typography variant="body2">
                                (55) 99126-1525 → Comercial
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                            <Typography variant="body2">
                                (55) 98153-9457 → Engenharia e P&D
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <MailOutlineIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                            <Typography variant="body2">
                                contato@auftek.com.br
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton href="#" color="inherit">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <WhatsAppIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={2.5}>
                        <Typography variant="h6" gutterBottom>
                            A Auftek
                        </Typography>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}>
                            Políticas e Termos
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}>
                            Nossa história
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block">
                            Soluções
                        </Link>
                    </Grid>

                    <Grid item xs={6} md={2.5}>
                        <Typography variant="h6" gutterBottom>
                            Explore
                        </Typography>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}>
                            Últimas notícias
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block" mb={1}>
                            Parcerias
                        </Link>
                        <Link href="#" color="inherit" underline="none" display="block">
                            Padrões de qualidade
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="h6">Endereço</Typography>
                        </Box>
                        <Typography variant="body2">
                            Avenida Roraima, nº 1000 <br />
                            PULSAR, UFSM, sala 13, prédio 2
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box
            sx={{
                py: 2,
                backgroundColor: '#37474F', // Cor cinza da barra inferior
                color: 'rgba(255, 255, 255, 0.7)',
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <Typography variant="body2" sx={{ mb: { xs: 1, sm: 0 } }}>
                    © Auftek Tecnologia. CNPJ: 35.789.235/0001-99
                </Typography>
                <Box>
                    <Link href="#" color="inherit" underline="hover" sx={{ mr: 2 }}>
                        Privacidade
                    </Link>
                    <Link href="#" color="inherit" underline="hover">
                        Termos
                    </Link>
                </Box>
            </Container>
        </Box>
    </>
);

export default Footer;