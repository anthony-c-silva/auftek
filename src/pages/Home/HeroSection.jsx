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
import heroDevice1 from '../../assets/BioAILabFront.png';
import heroDevice2 from '../../assets/BioAILabLado.png';

// ================= HERO SECTION =====================
export default function HeroSection() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 12 },
                backgroundColor: 'primary.dark',
                color: 'primary.contrastText',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={7} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                mb: 4,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    color: 'primary.dark',
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                }}
                            >
                                DEEPTECH BRASILEIRA
                            </Typography>
                        </Box>
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
                            <span style={{ display: 'block' }}>
                                Tecnologia inteligente
                            </span>
                            <span style={{ display: 'block' }}>
                                para o monitoramento
                            </span>
                            <span style={{ display: 'block' }}>
                                microbiológico em
                            </span>
                            <span style={{ display: 'block' }}>tempo real.</span>
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
                                color="info"
                                size="large"
                            >
                                Conheça a empresa
                            </Button>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
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

