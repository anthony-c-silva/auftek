import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { AppThemeProvider } from './theme/AppThemeProvider.jsx';

import '@fontsource/m-plus-rounded-1c/300.css';
import '@fontsource/m-plus-rounded-1c/400.css';
import '@fontsource/m-plus-rounded-1c/500.css';
import '@fontsource/m-plus-rounded-1c/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppThemeProvider>
            <App />
        </AppThemeProvider>
    </React.StrictMode>
);
