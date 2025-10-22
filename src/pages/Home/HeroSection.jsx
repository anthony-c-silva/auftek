// src/pages/Home/HeroSection.jsx
import React from 'react';
import {
    Typography,
    Button,
    Container,
    Grid,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material';

// --- IMAGENS ---
import heroDevice1 from '../../assets/BioAILabFront.png'; // Ajuste o caminho
import heroDevice2 from '../../assets/BioAILabLado.png'; // Ajuste o caminho

// ================= HERO SECTION =====================
export default function HeroSection() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box
            sx={{
                py: { xs: 6, md: 12 },
                backgroundColor: 'primary.dark',
                color: 'primary.contrastText',
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    wrap={isMdUp ? 'nowrap' : 'wrap'}
                >
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="overline"
                            color="secondary.light"
                            sx={{
                                mb: 1,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            DEEPTECH BRASILEIRA
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                lineHeight: 1.05,
                                textAlign: { xs: 'center', md: 'left' },
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.6rem',
                                    md: '3.2rem',
                                    lg: '3.6rem',
                                },
                            }}
                        >
                            Tecnologia inteligente para o monitoramento
                            microbiológico em tempo real.
                        </Typography>
                        <Typography
                            variant="h6"
                            color="secondary.light"
                            sx={{
                                mb: 4,
                                maxWidth: { md: '90%' },
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Conheça o BioAiLab e obtenha resultados em horas,
                            não dias.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: {
                                    xs: 'center',
                                    md: 'flex-start',
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                color="info"
                                size="large"
                            >
                                Explorar soluções
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                            >
                                Conheça a empresa
                            </Button>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: { xs: 1.5, md: 3 },
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={heroDevice1}
                                alt="Dispositivo BioAiLab 1"
                                sx={{
                                    width: { xs: '50%', md: '48%' },
                                    height: 'auto',
                                }}
                            />
                            <Box
                                component="img"
                                src={heroDevice2}
                                alt="Dispositivo BioAiLab 2"
                                sx={{
                                    width: { xs: '50%', md: '48%' },
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
