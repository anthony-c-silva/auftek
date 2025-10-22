// src/pages/Home/AboutSection.jsx
import React from 'react';
import {
    Typography,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
} from '@mui/material';
import {
    ScienceOutlined as ScienceOutlinedIcon,
    TipsAndUpdatesOutlined as TipsAndUpdatesOutlinedIcon,
    EnergySavingsLeafOutlined as EnergySavingsLeafOutlinedIcon,
} from '@mui/icons-material';

const features = [
    {
        icon: (
            <ScienceOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        ),
        title: 'P&D de alta performance',
        description: 'Parcerias estratégicas para gerar impacto real.',
    },
    {
        icon: (
            <TipsAndUpdatesOutlinedIcon
                sx={{ fontSize: 40, color: 'primary.main' }}
            />
        ),
        title: 'Tecnologia proprietária',
        description: 'Soluções exclusivas com base científica.',
    },
    {
        icon: (
            <EnergySavingsLeafOutlinedIcon
                sx={{ fontSize: 40, color: 'primary.main' }}
            />
        ),
        title: 'Inovação responsável',
        description: 'Tecnologia que cuida da saúde e do meio ambiente.',
    },
];

export default function AboutSection() {
    return (
        <Box
            id="quem-somos"
            sx={{
                py: { xs: 8, md: 10 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        gap: { md: 6 },
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            mb: { xs: 6, md: 0 },
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            fontWeight={700}
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Quem Somos
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                mb: 2,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            A Auftek Tecnologia, startup de Santa Maria (RS),
                            transforma ciência em instrumentação inteligente.
                            Nosso lema — “It’s time to save time” — reflete o
                            propósito de criar tecnologias que economizam tempo
                            e otimizam processos.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Nosso principal produto, o BioAiLab, reduz análises
                            microbiológicas de dias para horas, com aplicações
                            no saneamento, indústria, agronegócio e meio
                            ambiente. E no setor de energia, desenvolvemos
                            instrumentos para pesquisa e certificação de
                            sistemas fotovoltaicos.
                        </Typography>
                    </Box>

                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Box
                            sx={{
                                width: '100%',
                                aspectRatio: '16 / 9',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: 3,
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/2Fo3hD60sSA"
                                title="Vídeo Institucional Auftek"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        mt: { xs: 6, md: 8 },
                    }}
                >
                    {features.map((feature) => (
                        <Box
                            key={feature.title}
                            sx={{
                                flex: {
                                    xs: '1 1 100%',
                                    sm: '1 1 45%',
                                    md: '1 1 30%',
                                },
                                maxWidth: { xs: '100%', sm: '45%', md: '30%' },
                            }}
                        >
                            <Card
                                variant="outlined"
                                sx={{
                                    textAlign: 'center',
                                    p: 2,
                                    height: '100%',
                                }}
                            >
                                <CardContent>
                                    {feature.icon}
                                    <Typography
                                        variant="h6"
                                        fontWeight="700"
                                        sx={{ my: 1 }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
