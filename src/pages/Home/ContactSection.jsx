// src/pages/Home/ContactSection.jsx
import React from 'react';
import {
    Typography,
    Button,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
    TextField,
} from '@mui/material';
import {
    LocationOn as LocationOnIcon,
    MailOutline as MailOutlineIcon,
} from '@mui/icons-material';

// ================= CONTATO =====================
export default function ContactSection() {
    return (
        <Box
            id="contato"
            sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.paper' }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    textAlign="center"
                    gutterBottom
                    fontWeight={700}
                >
                    Contato
                </Typography>
                <Grid container spacing={5} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                label="Seu nome"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="E-mail"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Empresa"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                label="Como podemos ajudar?"
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    fontWeight={600}
                                >
                                    Onde nos encontrar
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        my: 2,
                                    }}
                                >
                                    <LocationOnIcon
                                        color="primary"
                                        sx={{ mr: 2 }}
                                    />
                                    <Typography color="text.secondary">
                                        Santa Maria | RS | Brasil <br />
                                        Avenida Roraima, nº 1000 <br />
                                        PULSAR, UFSM, sala 13, prédio 2
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        my: 2,
                                    }}
                                >
                                    <MailOutlineIcon
                                        color="primary"
                                        sx={{ mr: 2 }}
                                    />
                                    <Typography color="text.secondary">
                                        adriano.marques@auftek.com
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
