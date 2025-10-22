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
    CardMedia,
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
    Brightness4 as Brightness4Icon,
    Brightness7 as Brightness7Icon,
    ScienceOutlined as ScienceOutlinedIcon,
    TipsAndUpdatesOutlined as TipsAndUpdatesOutlinedIcon,
    EnergySavingsLeafOutlined as EnergySavingsLeafOutlinedIcon,
} from '@mui/icons-material';
import { ThemeContext } from '../theme/AppThemeProvider';

// --- IMAGENS ---
import auftekLogoImg from '../assets/logo1.png';
import auftekLogoImgCompleta from '../assets/logo2.png';
import heroDevice1 from '../assets/BioAILabFront.png';
import heroDevice2 from '../assets/BioAILabLado.png';
import bioailabDevice from '../assets/BioAILabLado.png';
import pvaglabDevice from '../assets/PVGAGLab.png';
import governoRsLogo from '../assets/governo_rs.png';
import finepLogo from '../assets/finep.png';
import fapergsLogo from '../assets/fapergs.png';
import sebraeLogo from '../assets/sebrae.png';
import ufsmLogo from '../assets/ufsm.png';

const AuftekLogo = () => (
    <Box
        component="img"
        src={auftekLogoImg}
        alt="Auftek Logo"
        sx={{ height: 40, width: 'auto' }}
    />
);
const AuftekLogo2 = () => (
    <Box
        component="img"
        src={auftekLogoImgCompleta}
        alt="Auftek Logo"
        sx={{ height: 40, width: 'auto' }}
    />
);

const navItems = [
    'Sobre nós',
    'Soluções',
    'Parceiros',
    'Premiações',
    'Blog',
    'Contato',
];

// ================= HEADER =====================
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
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
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
                                edge="end"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    color="inherit"
                                    sx={{ ml: 2, textTransform: 'none' }}
                                >
                                    {item}
                                </Button>
                            ))}
                            <Button variant="contained" sx={{ ml: 3 }}>
                                Sistema
                            </Button>
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

// ================= HERO SECTION =====================
// Texto à esquerda, imagens à direita; imagens lado-a-lado em desktop
const HeroSection = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box
            sx={{
                py: { xs: 6, md: 12 },
                backgroundColor: 'primary.dark',
                color: 'primary.contrastText',
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    wrap={isMdUp ? 'nowrap' : 'wrap'}
                    sx={{ minHeight: { md: '68vh' } }}
                >
                    {/* Texto à esquerda */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            px: { xs: 2, md: 0 },
                        }}
                    >
                        <Typography
                            variant="overline"
                            color="secondary.light"
                            sx={{ mb: 1 }}
                        >
                            DEEPTECH BRASILEIRA
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                lineHeight: 1.05,
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.6rem',
                                    md: '3.2rem',
                                    lg: '3.6rem',
                                },
                            }}
                        >
                            Tecnologia inteligente para o monitoramento
                            microbiológico em tempo real.
                        </Typography>

                        <Typography
                            variant="h6"
                            color="secondary.light"
                            sx={{ mb: 4, maxWidth: { md: '90%' } }}
                        >
                            Conheça o BioAiLab e obtenha resultados em horas,
                            não dias.
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: {
                                    xs: 'center',
                                    md: 'flex-start',
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                color="info"
                                size="large"
                            >
                                Explorar soluções
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                            >
                                Conheça a empresa
                            </Button>
                        </Box>
                    </Grid>

                    {/* Imagens à direita — lado a lado em desktop */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'row', md: 'row' }, // manter lado a lado em md+
                                gap: { xs: 1.5, md: 3 },
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: { xs: '100%', md: '100%' },
                                maxWidth: { md: 520 }, // limita o bloco de imagens para não empurrar o texto
                                px: { xs: 1, md: 0 },
                            }}
                        >
                            <Box
                                component="img"
                                src={heroDevice1}
                                alt="Dispositivo BioAiLab 1"
                                sx={{
                                    width: { xs: '66%', sm: '50%', md: '48%' },
                                    maxWidth: { xs: 160, sm: 200, md: 260 },
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                            />
                            <Box
                                component="img"
                                src={heroDevice2}
                                alt="Dispositivo BioAiLab 2"
                                sx={{
                                    width: { xs: '60%', sm: '40%', md: '48%' },
                                    maxWidth: { xs: 160, sm: 180, md: 260 },
                                    height: 'auto',
                                    objectFit: 'contain',
                                    transform: { md: 'translateY(-6%)' },
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// ================= SOBRE NÓS =====================
const AboutSection = () => {
    const features = [
        {
            icon: (
                <ScienceOutlinedIcon
                    sx={{ fontSize: 40, color: 'primary.main' }}
                />
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

    return (
        <Box
            id="quem-somos"
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                {/* Row principal: texto (left) + vídeo (right) */}
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    sx={{
                        // garante bom espaçamento vertical e evita quebra inesperada
                        alignContent: 'center',
                    }}
                >
                    {/* Coluna do texto */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            order: { xs: 1, md: 1 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: { xs: 'center', md: 'left' },
                            pr: { md: 4 },
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            fontWeight={700}
                        >
                            Quem Somos
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                        >
                            A Auftek Tecnologia, startup de Santa Maria (RS),
                            transforma ciência em instrumentação inteligente.
                            Nosso lema — “It’s time to save time” — reflete o
                            propósito de criar tecnologias que economizam tempo
                            e otimizam processos.
                        </Typography>

                        <Typography variant="body1" color="text.secondary">
                            Nosso principal produto, o BioAiLab, reduz análises
                            microbiológicas de dias para horas, com aplicações
                            no saneamento, indústria, agronegócio e meio
                            ambiente. E no setor de energia, desenvolvemos
                            instrumentos para pesquisa e certificação de
                            sistemas fotovoltaicos.
                        </Typography>
                    </Grid>

                    {/* Coluna do vídeo (lado direito em md+) */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            order: { xs: 2, md: 2 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '100%' },
                                maxWidth: 720,
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: 3,
                            }}
                        >
                            {/* Substitua este bloco pelo iframe do vídeo quando tiver o link */}
                            <Box
                                sx={{
                                    width: '100%',
                                    aspectRatio: '16/9',
                                    backgroundColor: 'action.hover',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography variant="h6" color="text.secondary">
                                    Vídeo institucional
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* ROW SEPARADO PARA OS CARDS - sempre abaixo */}
                <Grid container spacing={3} sx={{ mt: 6 }}>
                    {features.map((feature) => (
                        <Grid key={feature.title} item xs={12} sm={6} md={4}>
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
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

// ================= SOLUÇÕES =====================
const SolutionsSection = () => {
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
};

// ================= CONTATO =====================
const ContactSection = () => (
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
                        <TextField fullWidth label="Seu nome" margin="normal" />
                        <TextField fullWidth label="E-mail" margin="normal" />
                        <TextField fullWidth label="Empresa" margin="normal" />
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

// ================= FOOTER =====================
const Footer = () => (
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

export default function HomePage() {
    return (
        <Box>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SolutionsSection />
                <ContactSection />
            </main>
            <Footer />
        </Box>
    );
}
