import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider, AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import App from './App.tsx';
import OrangeAIPrivacyPolicy from './OrangeAIPrivacyPolicy.tsx';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/orange-ai/privacy-policy" element={<OrangeAIPrivacyPolicy />} />
          <Route path="/llmlite/privacy-policy" element={<OrangeAIPrivacyPolicy />} />

          <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
);
