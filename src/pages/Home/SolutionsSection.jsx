// src/pages/Home/SolutionsSection.jsx
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
            description:
                'Tecnologia inteligente para detectar e quantificar bactérias em tempo real.',
            image: bioailabDevice,
        },
        engenharia: {
            title: 'PVAG LAB',
            description:
                'Equipamento de alta precisão para emular situações de arco elétrico.',
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
                        color="secondary"
                        onClick={() => setActiveTab('microbiologia')}
                    >
                        Microbiologia Inteligente
                    </Button>
                    <Button
                        variant={
                            activeTab === 'engenharia'
                                ? 'contained'
                                : 'outlined'
                        }
                        color="secondary"
                        onClick={() => setActiveTab('engenharia')}
                    >
                        Engenharia de Precisão
                    </Button>
                </Box>

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            component="h3"
                            fontWeight={700}
                            gutterBottom
                        >
                            {currentSolution.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            {currentSolution.description}
                        </Typography>
                        <Button variant="outlined" color="secondary">
                            Saiba Mais
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
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
