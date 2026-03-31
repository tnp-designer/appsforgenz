import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider, AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import App from './App.tsx';
import OrangeAIPrivacyPolicy from './OrangeAIPrivacyPolicy.tsx';
import LLmlitePrivacyPolicy from './LLmlitePrivacyPolicy.tsx';
import SuperShopPrivacyPolicy from './SuperShopPrivacyPolicy.tsx';
import './index.css';
import TaplinkPrivacypolicy from './TaplinkPrivacypolicy.tsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerkEnabled =
  typeof PUBLISHABLE_KEY === 'string' &&
  PUBLISHABLE_KEY.startsWith('pk_') &&
  !PUBLISHABLE_KEY.includes('YOUR_CLERK_PUBLISHABLE_KEY');

if (!clerkEnabled) {
  // Keep the storefront usable in environments where Clerk is not configured.
  console.warn('Clerk is disabled: set a valid VITE_CLERK_PUBLISHABLE_KEY to enable auth.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {clerkEnabled ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/orange-ai/privacy-policy" element={<OrangeAIPrivacyPolicy />} />
            <Route path="/llmlite/privacy-policy" element={<LLmlitePrivacyPolicy />} />
            <Route path="/taplink/privacy-policy" element={<TaplinkPrivacypolicy />} />
            <Route path="/supershop/privacy-policy" element={<SuperShopPrivacyPolicy />} />

            <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />
          </Routes>
        </BrowserRouter>
      </ClerkProvider>
    ) : (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/orange-ai/privacy-policy" element={<OrangeAIPrivacyPolicy />} />
          <Route path="/llmlite/privacy-policy" element={<LLmlitePrivacyPolicy />} />
          <Route path="/taplink/privacy-policy" element={<TaplinkPrivacypolicy />} />
          <Route path="/supershop/privacy-policy" element={<SuperShopPrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    )}
  </StrictMode>,
);
