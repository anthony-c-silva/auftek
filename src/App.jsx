import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* A rota "/" agora renderiza diretamente sua HomePage completa */}
                <Route path="/" element={<HomePage />} />

                {/* No futuro, você pode adicionar outras páginas aqui */}
                {/* <Route path="/blog" element={<BlogPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
