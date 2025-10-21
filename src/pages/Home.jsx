import React, { useState, useContext } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
    TextField,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    Menu as MenuIcon,
    LocationOn as LocationOnIcon,
    MailOutline as MailOutlineIcon,
    Biotech as BiotechIcon,
    PrecisionManufacturing as PrecisionManufacturingIcon,
    Handshake as HandshakeIcon,
    CorporateFare as CorporateFareIcon,
    EnergySavingsLeaf as EcoIcon,
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { ThemeContext } from '../theme/AppThemeProvider';

const AuftekLogo = () => (
    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
        AUFTEK
    </Typography>
);

const navItems = ['Quem Somos', 'Soluções', 'Blog', 'Sistema'];

const Header = () => {
    const theme = useTheme();
    const colorMode = useContext(ThemeContext);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', width: 250 }}
        >
            <Box sx={{ my: 2 }}>
                <AuftekLogo />
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem component="button" key={item}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            color="primary"
            elevation={0}
            sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <AuftekLogo />
                    {isMobile ? (
                        <Box>
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                            >
                                {theme.palette.mode === 'dark' ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box>
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    color="inherit"
                                    sx={{ ml: 2 }}
                                >
                                    {item}
                                </Button>
                            ))}
                            <IconButton
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                                sx={{ ml: 1 }}
                            >
                                {theme.palette.mode === 'dark' ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </Container>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

const HeroSection = () => (
    <Box
        sx={{
            py: { xs: 8, md: 12 },
            textAlign: 'center',
            backgroundColor: 'primary.dark',
            color: 'primary.contrastText',
        }}
    >
        <Container maxWidth="md">
            <Typography variant="overline" color="secondary.light">
                DEEPTECH BRASILEIRA
            </Typography>
            <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 700 }}
            >
                Tecnologia inteligente para o monitoramento microbiológico em
                tempo real.
            </Typography>
            <Typography variant="h6" color="secondary.light" sx={{ mb: 2 }}>
                Conheça o BioAiLab e obtenha resultados em horas, não dias.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 4 }}
            >
                Quero saber mais
            </Button>
        </Container>
    </Box>
);

const AboutSection = () => (
    <Box
        id="quem-somos"
        sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default' }}
    >
        <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h4"
                        component="h2"
                        gutterBottom
                        fontWeight={700}
                        color="primary.dark"
                    >
                        Quem Somos
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                    >
                        A Auftek, startup de Santa Maria (RS), transforma
                        ciência em instrumentação inteligente.
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                    >
                        Nosso lema "It's time, to save time" reflete o propósito
                        de criar tecnologias que economizam tempo e otimizam
                        processos.
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                    >
                        Nosso principal produto é o BioAiLab, que reduz análises
                        microbiológicas de dias para horas, com aplicações em
                        saneamento, indústria, agronegócio e meio ambiente.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        No setor de energia, desenvolvemos instrumentos para
                        pesquisa e certificação de sistemas fotovoltaicos.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        {[
                            {
                                icon: (
                                    <CorporateFareIcon
                                        fontSize="large"
                                        color="primary"
                                    />
                                ),
                                title: 'P&D de alta performance',
                                description:
                                    'Parcerias estratégicas para gerar impacto real.',
                            },
                            {
                                icon: (
                                    <BiotechIcon
                                        fontSize="large"
                                        color="primary"
                                    />
                                ),
                                title: 'Tecnologia proprietária',
                                description:
                                    'Soluções exclusivas com base científica.',
                            },
                            {
                                icon: (
                                    <EcoIcon fontSize="large" color="primary" />
                                ),
                                title: 'Foco em sustentabilidade',
                                description:
                                    'Tecnologia que cuida da saúde e do meio ambiente.',
                            },
                        ].map((item) => (
                            <Grid item xs={12} key={item.title}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box sx={{ mr: 2 }}>{item.icon}</Box>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

const SolutionsSection = () => (
    <Box
        id="solucoes"
        sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.paper' }}
    >
        <Container maxWidth="lg">
            <Typography
                variant="h4"
                component="h2"
                textAlign="center"
                gutterBottom
                fontWeight={700}
                color="primary.dark"
            >
                Nossas Soluções
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                {[
                    {
                        icon: (
                            <BiotechIcon
                                sx={{ fontSize: 60, color: 'primary.main' }}
                            />
                        ),
                        category: 'Microbiologia Inteligente',
                        title: 'BioAiLab',
                        description:
                            'Tecnologia inteligente para detectar e quantificar bactérias em tempo real. Monitoramento rápido, preciso e versátil para setores como saneamento, indústria, agricultura e pesquisa.',
                    },
                    {
                        icon: (
                            <PrecisionManufacturingIcon
                                sx={{ fontSize: 60, color: 'primary.main' }}
                            />
                        ),
                        category: 'Engenharia de Precisão',
                        title: 'Instrumentação Customizada',
                        description:
                            'Desenvolvimento de equipamentos e sensores sob medida para pesquisa e desenvolvimento, com foco no setor de energia e sistemas fotovoltaicos.',
                    },
                ].map((solution) => (
                    <Grid item xs={12} sm={6} md={5} key={solution.title}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                p: 2,
                            }}
                        >
                            <CardContent
                                sx={{ flexGrow: 1, textAlign: 'center' }}
                            >
                                <Box sx={{ mb: 2 }}>{solution.icon}</Box>
                                <Typography
                                    variant="overline"
                                    color="text.secondary"
                                >
                                    {solution.category}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    gutterBottom
                                    fontWeight={700}
                                >
                                    {solution.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {solution.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ p: 2, textAlign: 'center' }}>
                                <Button variant="outlined" color="primary">
                                    Saiba Mais
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
);

const PartnersSection = () => {
    const theme = useTheme();
    const partners = [
        {
            name: 'Conecta Startup Brasil',
            logo: 'https://placehold.co/150x60?text=Conecta',
            details: 'MCTI, Softes, Seb',
        },
        {
            name: 'Caso de Sucesso de Inovação RS 2022',
            logo: 'https://placehold.co/150x60?text=Sucesso+RS',
            details: 'SICTI/RS',
        },
        {
            name: 'Programa Centelha & Techfuturo',
            logo: 'https://placehold.co/150x60?text=Centelha',
            details: 'Fomento estadual',
        },
        {
            name: 'Eletrobras',
            logo: 'https://placehold.co/150x60?text=Eletrobras',
            details: 'Cepel',
        },
        { name: 'UFSM', logo: 'https://placehold.co/150x60?text=UFSM' },
        { name: 'FAPERGS', logo: 'https://placehold.co/150x60?text=FAPERGS' },
        { name: 'Finep', logo: 'https://placehold.co/150x60?text=Finep' },
        { name: 'IEE USP', logo: 'https://placehold.co/150x60?text=IEE+USP' },
        {
            name: 'Mackenzie',
            logo: 'https://placehold.co/150x60?text=Mackenzie',
        },
        { name: 'SoluBio', logo: 'https://placehold.co/150x60?text=SoluBio' },
    ];

    return (
        <Box
            id="parceiros"
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
                    color="primary.dark"
                >
                    Nossos principais parceiros e apoiadores
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
                            md={3}
                            lg={2}
                            key={partner.name}
                            sx={{ textAlign: 'center' }}
                        >
                            <Box
                                component="img"
                                src={partner.logo}
                                alt={partner.name}
                                sx={{
                                    maxHeight: 60,
                                    maxWidth: '100%',
                                    filter:
                                        theme.palette.mode === 'dark'
                                            ? 'invert(1) grayscale(1)'
                                            : 'grayscale(1)',
                                    opacity: 0.7,
                                    transition: '0.3s',
                                    '&:hover': {
                                        filter: 'none',
                                        opacity: 1,
                                    },
                                }}
                            />
                            {partner.details && (
                                <Typography
                                    variant="caption"
                                    display="block"
                                    color="text.secondary"
                                    sx={{ mt: 1 }}
                                >
                                    {partner.details}
                                </Typography>
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

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

const ContactSection = () => (
    <Box
        id="contato"
        sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.paper' }}
    >
        <Container maxWidth="lg">
            <Typography
                variant="h4"
                component="h2"
                textAlign="center"
                gutterBottom
                fontWeight={700}
                color="primary.dark"
            >
                Contato
            </Typography>
            <Typography
                textAlign="center"
                color="text.secondary"
                sx={{ mb: 2 }}
            >
                Conte um pouco sobre o seu projeto e como podemos ajudar!
            </Typography>
            <Grid container spacing={5} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            fullWidth
                            label="Seu nome"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="E-mail"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Empresa"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Como podemos ajudar?"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
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
                            <Box
                                sx={{
                                    height: 250,
                                    mt: 2,
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    filter: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? 'invert(0.9) hue-rotate(180deg)'
                                            : 'none',
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.739722349437!2d-53.71698668489324!3d-29.72750198199723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503ad1d53a18e07%3A0x51480b33418c21!2sPulsar%20-%20Incubadora%20Tecnol%C3%B3gica%20da%20UFSM!5e0!3m2!1spt-BR!2sbr!4v1678886397631!5m2!1spt-BR!2sbr"
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
                </Grid>
            </Grid>
        </Container>
    </Box>
);

const Footer = () => (
    <Box
        component="footer"
        sx={{
            backgroundColor: 'primary.dark',
            color: 'primary.contrastText',
            py: 6,
        }}
    >
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <AuftekLogo />
                    <Typography
                        variant="body2"
                        sx={{ mt: 1, color: 'secondary.light' }}
                    >
                        Tecnologia inteligente para o monitoramento
                        microbiológico.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Typography variant="h6" gutterBottom>
                        Explore
                    </Typography>
                    <Box component="nav">
                        <Button color="inherit" sx={{ display: 'block' }}>
                            Quem Somos
                        </Button>
                        <Button color="inherit" sx={{ display: 'block' }}>
                            Soluções
                        </Button>
                        <Button color="inherit" sx={{ display: 'block' }}>
                            Blog
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="h6" gutterBottom>
                        Nossos Apoiadores
                    </Typography>
                    <Box component="nav">
                        <Button color="inherit" sx={{ display: 'block' }}>
                            Finep
                        </Button>
                        <Button color="inherit" sx={{ display: 'block' }}>
                            FAPERGS
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" gutterBottom>
                        Contato
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'secondary.light' }}
                    >
                        Santa Maria - RS, Brasil
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'secondary.light' }}
                    >
                        adriano.marques@auftek.com
                    </Typography>
                </Grid>
            </Grid>
            <Box
                sx={{
                    textAlign: 'center',
                    mt: 4,
                    pt: 4,
                    borderTop: 1,
                    borderColor: 'secondary.dark',
                }}
            >
                <Typography variant="body2" color="secondary.light">
                    © {new Date().getFullYear()} AUFTEK. Todos os direitos
                    reservados.
                </Typography>
            </Box>
        </Container>
    </Box>
);

export default function HomePage() {
    return (
        <Box>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SolutionsSection />
                <PartnersSection />
                <CtaSection />
                <ContactSection />
            </main>
            <Footer />
        </Box>
    );
}
