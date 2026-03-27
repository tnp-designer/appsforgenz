/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  Moon, 
  Sun, 
  ChevronLeft, 
  ExternalLink, 
  Share2, 
  CheckCircle2,
  TrendingUp,
  Droplets,
  BarChart3,
  Rocket,
  ChevronDown,
  FileText
} from 'lucide-react';
import { MOCK_APPS, AppData } from './types';
import { SignedIn, SignedOut, UserButton, useSignIn } from '@clerk/clerk-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const filteredApps = MOCK_APPS.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen transition-colors duration-300 selection:bg-lime-400 selection:text-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-xl px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div 
              className="cursor-pointer group"
              onClick={() => setSelectedApp(null)}
            >
              <span className="logo-capx transform group-hover:skew-x-[-10deg] transition-transform">capx</span>
            </div>
            
            <div className="hidden md:flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.15em] opacity-50">
              <button className="hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg hover:bg-white/5">Trade</button>
              <button className="text-white opacity-100 bg-white/10 px-3 py-1.5 rounded-lg">Store</button>
              <button className="hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg hover:bg-white/5">Governance</button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="btn-launch flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all">
              <Rocket className="w-3.5 h-3.5 fill-white" />
              Launch
            </button>

            <div className="h-6 w-[1px] bg-white/10 mx-1"></div>
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl hover:bg-white/5 transition-colors text-white/60 hover:text-white"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <SignedOut>
              <GoogleSignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-8 h-8',
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          {!selectedApp ? (
            <motion.div
              key="store"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-16"
            >
              {/* Hero Section */}
              <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] sm:aspect-[3.5/1] group cursor-pointer shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/genz-hero/1920/1080" 
                  alt="Hero" 
                  className="w-full h-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-[1.5s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-10 sm:px-20 space-y-5">
                  <h1 className="text-5xl sm:text-8xl font-black italic tracking-tighter leading-[0.9] drop-shadow-2xl">
                    Airdrop <span className="text-lime-400">Unlock 2.0</span>
                  </h1>
                  <button className="bg-white text-black w-fit px-10 py-3.5 rounded-2xl font-black uppercase tracking-tighter text-sm hover:scale-110 active:scale-95 transition-all shadow-xl">
                    Claim Now
                  </button>
                </div>
              </div>

              {/* App Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredApps.map((app) => (
                  <AppCard key={app.id} app={app} onClick={() => setSelectedApp(app)} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <AppDetail app={selectedApp} onBack={() => setSelectedApp(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

const AppCard: React.FC<{ app: AppData, onClick: () => void }> = ({ app, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-[#111214] border border-white/[0.06] rounded-[40px] p-7 cursor-pointer hover:border-white/15 transition-all duration-500 card-inner-shadow"
    >
      <div className="flex gap-7">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[36px] overflow-hidden bg-white shrink-0 shadow-2xl group-hover:scale-105 transition-transform duration-500">
          <img src={app.iconUrl} alt={app.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase leading-none">{app.name}/{app.symbol}</h3>
              <p className="text-sm opacity-40 font-medium mt-1">{app.publisher.replace('@', '')}</p>
            </div>
          </div>
          
          <div className="pt-3">
            <p className="text-[10px] opacity-30 uppercase font-black tracking-[0.2em]">Price</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black tracking-tighter">{app.price}</span>
              <span className="text-sm opacity-40 font-bold">({app.capxPrice})</span>
            </div>
          </div>

          <div className="flex gap-2 pt-3">
            {app.tags.map(tag => (
              <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.5)]"></span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8 p-5 rounded-[24px] bg-black/20 border border-white/[0.04]">
        <StatItem label="24h Vol" value={app.vol24h} />
        <StatItem label="Liquidity" value={app.liquidity} />
        <StatItem label="MCAP" value={app.marketCap} />
        <StatItem label="Holders" value={app.holders} />
        <StatItem label="Age" value={app.age} />
        <StatItem label="Txns" value={app.txns} />
      </div>

      <div className="flex gap-4 mt-8">
        <button className="flex-1 btn-glossy-white py-4 rounded-[20px] font-black uppercase tracking-[0.15em] text-xs hover:scale-[1.02] active:scale-95 transition-all">
          Trade
        </button>
        <div className="flex-1 flex gap-2">
          <button className="flex-1 btn-glossy-dark py-4 rounded-[20px] font-black uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
            Store <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </button>
          <button className="px-4 btn-glossy-dark rounded-[20px] hover:scale-[1.02] active:scale-95 transition-all">
            <ChevronDown className="w-4 h-4 opacity-60" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[9px] opacity-30 uppercase font-black tracking-[0.2em] mb-1.5">{label}</p>
      <p className="font-mono text-base font-bold tracking-tight text-white/90">{value}</p>
    </div>
  );
}

function AppDetail({ app, onBack }: { app: AppData, onBack: () => void }) {
  return (
    <div className="space-y-16">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity bg-white/5 px-5 py-2.5 rounded-2xl border border-white/5"
      >
        <ChevronLeft className="w-4 h-4" /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-[56px] overflow-hidden bg-white shrink-0 shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
          <img src={app.iconUrl} alt={app.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="flex-1 space-y-8 w-full">
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <h2 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none">{app.name}</h2>
              <p className="text-xl opacity-50 font-medium">Your AI assistant. Use images and voice to get things done.</p>
              <div className="flex gap-2 pt-3">
                {app.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-lime-400/10 text-lime-400 border border-lime-400/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.6)]"></span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-glossy-dark px-16 py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all">
              Open App <ExternalLink className="w-5 h-5 opacity-60" />
            </button>
            {app.id === 'orange-ai' && (
              <Link
                to="/orange-ai/privacy-policy"
                className="inline-flex items-center gap-2 px-6 py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-xs border border-white/20 text-white/80 hover:text-white hover:bg-white/5 transition-all"
              >
                <FileText className="w-4 h-4 opacity-60" /> Privacy Policy
              </Link>
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-10 border-y border-white/5">
            <DetailStat label="Trading Volume" value={app.vol24h} />
            <DetailStat label="Market Cap" value={app.marketCap} />
            <DetailStat label="Liquidity" value={app.liquidity} />
            <div>
              <p className="text-[10px] opacity-30 uppercase font-black tracking-[0.2em] mb-2">Trading Status</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tighter">Active</span>
                <CheckCircle2 className="w-6 h-6 text-lime-400" />
              </div>
              <button className="mt-3 text-[10px] font-black uppercase tracking-widest border border-lime-400/30 text-lime-400 px-4 py-1.5 rounded-xl hover:bg-lime-400/10 transition-colors">
                Trade ${app.symbol}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="space-y-8">
        <h3 className="text-3xl font-black tracking-tighter uppercase">Screenshots</h3>
        <div className="flex gap-8 overflow-x-auto pb-6 no-scrollbar snap-x">
          {app.screenshots.map((src, i) => (
            <div key={i} className="w-72 sm:w-96 aspect-[9/16] rounded-[48px] overflow-hidden bg-white/5 shrink-0 border border-white/10 shadow-2xl snap-center hover:scale-[1.02] transition-transform duration-500">
              <img src={src} alt={`Screenshot ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-3xl font-black tracking-tighter uppercase">About</h3>
          <p className="text-xl opacity-60 leading-relaxed font-medium">
            {app.description}
          </p>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-black tracking-tighter uppercase opacity-30">Metadata</h3>
          <div className="bg-white/[0.03] rounded-[32px] p-8 space-y-6 border border-white/5 card-inner-shadow">
            <div className="flex justify-between items-center">
              <span className="opacity-40 font-bold uppercase text-[10px] tracking-widest">Release Date</span>
              <span className="font-mono font-bold">{app.releaseDate}</span>
            </div>
            <div className="h-[1px] bg-white/5"></div>
            <div className="flex justify-between items-center">
              <span className="opacity-40 font-bold uppercase text-[10px] tracking-widest">Publisher</span>
              <span className="font-mono font-bold text-lime-400">{app.publisher}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailStat({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] opacity-30 uppercase font-black tracking-[0.2em] mb-2">{label}</p>
      <p className="text-4xl font-black tracking-tighter">{value}</p>
    </div>
  );
}

function Stat({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs opacity-40 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
        {label}
      </p>
      <p className="text-3xl font-bold tracking-tighter">{value}</p>
    </div>
  );
}

function GoogleSignInButton() {
  const { isLoaded, signIn } = useSignIn();

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;
    await signIn.authenticateWithRedirect({
      strategy: 'oauth_google',
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/',
    });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-white text-black px-5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all"
    >
      Continue with Google
    </button>
  );
}
