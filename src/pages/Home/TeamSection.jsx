import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';

const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Nome do Membro 1',
            role: 'CEO & Founder',
            avatar: 'https://placehold.co/150',
        },
        {
            name: 'Nome do Membro 2',
            role: 'Desenvolvedor Front-End',
            avatar: 'https://placehold.co/150',
        },
        {
            name: 'Nome do Membro 3',
            role: 'Engenheiro de Hardware',
            avatar: 'https://placehold.co/150',
        },
        {
            name: 'Nome do Membro 4',
            role: 'Cientista de Dados',
            avatar: 'https://placehold.co/150',
        },
        {
            name: 'Nome do Membro 5',
            role: 'UI/UX Designer',
            avatar: 'https://placehold.co/150',
        },
    ];

    return (
        <Box
            id="time"
            sx={{
                py: { xs: 8, md: 10 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    textAlign="center"
                    gutterBottom
                    fontWeight={700}
                    color="text.primary"
                >
                    Conheça nosso time
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 3,
                        py: 4,
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                        justifyContent: { xs: 'flex-start', md: 'center' },
                    }}
                >
                    {teamMembers.map((member) => (
                        <Card
                            key={member.name}
                            sx={{ minWidth: 220, textAlign: 'center' }}
                        >
                            <CardMedia
                                component="img"
                                image={member.avatar}
                                alt={member.name}
                                sx={{
                                    borderRadius: '50%',
                                    width: 120,
                                    height: 120,
                                    margin: '16px auto 8px',
                                    objectFit: 'cover',
                                }}
                            />
                            <CardContent>
                                <Typography fontWeight="bold">
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {member.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default TeamSection;