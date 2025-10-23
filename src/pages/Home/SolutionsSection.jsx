import React, { useState } from 'react';
import { Typography, Button, Container, Grid, Box } from '@mui/material';

// --- IMAGENS ---
import bioailabDevice from '../../assets/BioAILabLado.png'; // Ajuste o caminho
import pvaglabDevice from '../../assets/PVGAGLab.png'; // Ajuste o caminho


// ================= SOLUÇÕES =====================
export default function SolutionsSection() {
    const [activeTab, setActiveTab] = useState('microbiologia');

    const solutions = {
        microbiologia: {
            title: 'BioAiLab',
            description: [
                'Tecnologia inteligente para detectar e quantificar bactérias em tempo real. Monitoramento ', 
                'rápido, preciso e versátil para setores como saneamento, indústria, agricultura e pesquisa.',
            ],
            image: bioailabDevice,
        },
        engenharia: {
            title: 'PVAG LAB',
            description: [
                'Equipamento de alta precisão projetado para emular situações de arco elétrico, permitindo a', 
                'validação de inversores fotovoltaicos conforme os requisitos da norma internacional IEC 63027.',
            ],
            image: pvaglabDevice,
        },
    };

    const currentSolution = solutions[activeTab];

    return (
        <Box
            id="solucoes"
            sx={{
                py: { xs: 8, md: 10 },
                backgroundColor: 'primary.dark',
                color: 'primary.contrastText',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    fontWeight={700}
                    sx={{ mb: 4 }}
                >
                    Nossas Soluções
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                    <Button
                        variant={
                            activeTab === 'microbiologia'
                                ? 'contained'
                                : 'outlined'
                        }
                        onClick={() => setActiveTab('microbiologia')}
                        sx={{
                            borderRadius: '50px',
                            textTransform: 'none',
                            px: 3,
                            py: 1,
                            backgroundColor:
                                activeTab === 'microbiologia'
                                    ? 'white'
                                    : 'transparent',
                            color:
                                activeTab === 'microbiologia'
                                    ? 'primary.dark'
                                    : 'white',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            '&:hover': {
                                backgroundColor:
                                    activeTab === 'microbiologia'
                                        ? '#f0f0f0'
                                        : 'rgba(255, 255, 255, 0.1)',
                                borderColor: 'white',
                            },
                        }}
                    >
                        Microbiologia Inteligente
                    </Button>
                    <Button
                        variant={
                            activeTab === 'engenharia' ? 'contained' : 'outlined'
                        }
                        onClick={() => setActiveTab('engenharia')}
                        sx={{
                            borderRadius: '50px',
                            textTransform: 'none',
                            px: 3,
                            py: 1,
                            backgroundColor:
                                activeTab === 'engenharia'
                                    ? 'white'
                                    : 'transparent',
                            color:
                                activeTab === 'engenharia'
                                    ? 'primary.dark'
                                    : 'white',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            '&:hover': {
                                backgroundColor:
                                    activeTab === 'engenharia'
                                        ? '#f0f0f0'
                                        : 'rgba(255, 255, 255, 0.1)',
                                borderColor: 'white',
                            },
                        }}
                    >
                        Engenharia de Precisão
                    </Button>
                </Box>

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Typography
                            variant="h3"
                            component="h3"
                            fontWeight={700}
                            gutterBottom
                        >
                            {currentSolution.title}
                        </Typography>
                        {currentSolution.description.map((text, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{
                                    mb:
                                        index ===
                                        currentSolution.description.length - 1
                                            ? 3
                                            : 2,
                                }}
                            >
                                {text}
                            </Typography>
                        ))}
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '50px',
                                textTransform: 'none',
                                px: 4,
                                py: 1,
                                color: 'white',
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            Saiba Mais
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                        }}
                    >
                        <Box
                            component="img"
                            src={currentSolution.image}
                            alt={currentSolution.title}
                            sx={{
                                maxWidth: { xs: '90%', md: '80%' },
                                height: 'auto',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}