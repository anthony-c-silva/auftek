import React, { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'; // Importar o CssBaseline aqui
import { getDesignTokens } from './theme';

export const ThemeContext = createContext({
    toggleColorMode: () => {},
});

export const AppThemeProvider = ({ children }) => {
    // 1. LEITURA DO LOCALSTORAGE NO INÍCIO
    // Usamos uma função no useState para que a leitura do localStorage aconteça
    // apenas uma vez, na primeira renderização do componente.
    const [mode, setMode] = useState(() => {
        try {
            const savedMode = localStorage.getItem('themeMode');
            // Se houver um modo salvo ('light' or 'dark'), use-o. Senão, padrão para 'light'.
            return savedMode === 'dark' || savedMode === 'light'
                ? savedMode
                : 'light';
        } catch (error) {
            // Caso o localStorage não esteja disponível (ex: modo de navegação anônima em alguns browsers),
            // usa 'light' como padrão de forma segura.
            console.error(
                "Não foi possível acessar o localStorage. Usando tema 'light' como padrão.",
                error
            );
            return 'light';
        }
    });

    // 2. SALVAMENTO NO LOCALSTORAGE A CADA MUDANÇA
    // Este `useEffect` será executado sempre que o estado `mode` for alterado.
    useEffect(() => {
        try {
            localStorage.setItem('themeMode', mode);
        } catch (error) {
            console.error(
                'Não foi possível salvar a preferência de tema no localStorage.',
                error
            );
        }
    }, [mode]); // O array de dependências garante que o efeito rode apenas quando 'mode' mudar.

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                );
            },
        }),
        []
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {/* 3. CENTRALIZAÇÃO DO CSSBASELINE */}
                {/* É uma boa prática colocar o CssBaseline aqui para que ele também seja atualizado com o tema. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
