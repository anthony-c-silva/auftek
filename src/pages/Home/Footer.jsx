// src/pages/Home/Footer.jsx
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

// ================= FOOTER =====================
export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.dark',
                color: 'primary.contrastText',
                py: 6,
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" textAlign="center">
                    © {new Date().getFullYear()} AUFTEK. Todos os direitos
                    reservados.
                </Typography>
            </Container>
        </Box>
    );
}
