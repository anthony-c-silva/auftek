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

export default function ContactSection() {
    return (
        <Box
            id="contato"
            sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.paper' }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    textAlign="left"
                    gutterBottom
                    fontWeight={700}
                >
                    Contato
                </Typography>
                <Typography
                    variant="body1"
                    textAlign="left"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Conte um pouco sobre o seu projeto e como podemos ajudar!
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 5,
                        alignItems: { xs: 'center', md: 'stretch' },
                    }}
                >
                    <Box sx={{ width: '100%', flex: 1 }}>
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                label="Seu nome"
                                variant="outlined"
                                margin="normal"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="E-mail"
                                variant="outlined"
                                margin="normal"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Empresa"
                                variant="outlined"
                                margin="normal"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Como podemos ajudar?"
                                variant="outlined"
                                margin="normal"
                                multiline
                                rows={4}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#0D1B2A',
                                    color: 'white',
                                    borderRadius: '12px',
                                    py: 1.5,
                                    '&:hover': {
                                        backgroundColor: '#1B263B',
                                    },
                                }}
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ width: '100%', flex: 1 }}>
                        <Card
                            variant="outlined"
                            sx={{ height: '100%', borderRadius: '12px' }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <LocationOnIcon
                                        color="primary"
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography variant="h6" fontWeight={600}>
                                        Onde nos encontrar
                                    </Typography>
                                </Box>
                                <Typography color="text.secondary" sx={{ ml: 4 }}>
                                    Santa Maria | RS | Brasil <br />
                                    Avenida Roraima, nº 1000 <br />
                                    PULSAR, UFSM, sala 13, prédio 2
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        my: 2,
                                        ml: 4,
                                    }}
                                >
                                    <MailOutlineIcon
                                        color="primary"
                                        sx={{ mr: 1, fontSize: '1.2rem' }}
                                    />
                                    <Typography color="text.secondary">
                                        adriano.marques@auftek.com
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        height: 250,
                                        mt: 2,
                                        borderRadius: 1,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <iframe
                                        src="https://maps.google.com/maps?q=Pr%C3%A9dio%202%20-%20Av.%20Roraima%20-%20Camobi%2C%20Santa%20Maria%20-%20RS%2C%2097105-900&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Mapa da localização da Auftek"
                                    ></iframe>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}