import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import OrangeAIPrivacyPolicy from './OrangeAIPrivacyPolicy.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/orange-ai/privacy-policy" element={<OrangeAIPrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
