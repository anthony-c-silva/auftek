import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const CtaSection = () => (
    <Box
        sx={{
            py: { xs: 8, md: 10 },
            backgroundColor: 'secondary.dark',
            color: 'secondary.contrastText',
        }}
    >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                fontWeight={700}
            >
                Pronto para economizar tempo?
            </Typography>
            <Typography variant="body1" color="secondary.light" sx={{ mb: 2 }}>
                Converse com a nosso time e descubra como a Auftek se encaixa no
                seu cenário.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
            >
                Agendar conversa
            </Button>
        </Container>
    </Box>
);

export default CtaSection;
