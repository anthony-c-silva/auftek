const basePalette = {
    primary: {
        main: '#0E223B',
        light: '#516275',
        dark: '#071221',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#516275',
        light: '#767A82',
        dark: '#15202B',
        contrastText: '#FFFFFF',
    },
    success: {
        main: '#2E7D32',
        light: '#81C784',
        dark: '#00391A',
        contrastText: '#FFFFFF',
    },
    warning: {
        main: '#F57C00',
        light: '#FFB74D',
        dark: '#3A2300',
        contrastText: '#FFFFFF',
    },
    info: {
        main: '#1976D2',
        light: '#90CAF9',
        dark: '#082338',
        contrastText: '#FFFFFF',
    },
    error: {
        main: '#BA1A1A',
        light: '#FFB4AB',
        dark: '#690005',
        contrastText: '#FFFFFF',
    },
    grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
    },
};

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  ...basePalette,
                  background: {
                      default: '#F8F9FA',
                      paper: '#FFFFFF',
                  },
                  text: {
                      primary: '#1B1B1F',
                      secondary: '#454A52',
                      disabled: '#767A82',
                  },
              }
            : {
                  ...basePalette,
                  primary: {
                      main: '#AFC6E6',
                      light: '#D7E2F2',
                      dark: '#2B3F58',
                      contrastText: '#071221',
                  },
                  secondary: {
                      main: '#BFC8D2',
                      light: '#D9E3ED',
                      dark: '#374653',
                      contrastText: '#1B1B1F',
                  },
                  background: {
                      default: '#000000',
                      paper: '#121212',
                  },
                  text: {
                      primary: '#E2E2E6',
                      secondary: '#C6C6C9',
                      disabled: '#8C8F97',
                  },
              }),
    },
    typography: {
        fontFamily: "'M PLUS Rounded 1c', sans-serif",
        h5: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
            defaultProps: {
                disableElevation: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    boxShadow:
                        theme.palette.mode === 'light'
                            ? 'rgba(149, 157, 165, 0.1) 0px 8px 24px'
                            : 'none',
                    border:
                        theme.palette.mode === 'dark'
                            ? `1px solid ${theme.palette.grey[800]}`
                            : 'none',
                }),
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.light,
                    },
                }),
            },
        },
    },
});
