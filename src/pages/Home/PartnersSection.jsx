import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

// --- IMAGENS (Substituídas por Placeholders) ---
// Logos dos Parceiros
import governoRsLogo from '../../assets/governo_rs.png';
import finepLogo from '../../assets/finep.png';
import fapergsLogo from '../../assets/fapergs.png';
import sebraeLogo from '../../assets/sebrae.png';
import ufsmLogo from '../../assets/ufsm.png';

const PartnersSection = () => {
    const partners = [
        { name: 'Governo do Estado do Rio Grande do Sul', logo: governoRsLogo },
        { name: 'Finep', logo: finepLogo },
        { name: 'FAPERGS', logo: fapergsLogo },
        { name: 'Sebrae', logo: sebraeLogo },
        { name: 'UFSM', logo: ufsmLogo },
    ];

    return (
        <Box
            id="parceiros"
            sx={{
                py: { xs: 8, md: 10 },
                backgroundColor: 'background.paper',
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
                    Nossos parceiros e apoiadores
                </Typography>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: 4 }}
                >
                    {partners.map((partner) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={2.4}
                            key={partner.name}
                            sx={{ textAlign: 'center' }}
                        >
                            <Box
                                component="img"
                                src={partner.logo}
                                alt={partner.name}
                                sx={{
                                    maxHeight: 60,
                                    width: 'auto',
                                    maxWidth: '100%',
                                    opacity: 0.8,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default PartnersSection;
