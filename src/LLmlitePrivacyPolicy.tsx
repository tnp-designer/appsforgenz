/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function LLmlitePrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300 selection:bg-lime-400 selection:text-black">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-xl px-4 py-2.5">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity bg-white/5 px-4 py-2.5 rounded-2xl border border-white/5"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </Link>
          <span className="text-sm font-bold opacity-40">LLmlite</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm opacity-50 font-medium mb-10">LLmlite - Last updated March 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">1. Introduction</h2>
            <p>
              LLmlite ("we," "our," or "the app") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">2. Information We Use</h2>
            <p>
              To provide our AI assistant features, LLmlite may process the following types of input you provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Images.</strong> You can send photos or other images to the app. We use these to understand your requests and provide answers, identifications, or suggestions.</li>
              <li><strong className="text-white">Voice inputs.</strong> You can speak to the app. We process your voice input to understand your questions and commands and to respond to you.</li>
            </ul>
            <p className="mt-3">
              This data is used to deliver and improve our AI services. We do not use your images or voice for advertising or to build profiles about you for third-party marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">3. How We Use Your Data</h2>
            <p>
              We use the information you provide (including images and voice) to operate the app, respond to your requests, improve our models and services, and as required by law. We may use trusted service providers to process data on our behalf under strict confidentiality and security obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">4. Data Security & Retention</h2>
            <p>
              We apply reasonable technical and organizational measures to protect your data. We retain information only as long as needed to provide our services and as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">5. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict use of your personal data. Contact us using the details in the app or on our website to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">6. Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes through the app or by other reasonable means. Continued use of LLmlite after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">7. Contact</h2>
            <p>
              For privacy-related questions or requests, please contact us through the support or contact options provided in the LLmlite app or on our website.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm hover:underline"
          >
            <ChevronLeft className="w-4 h-4" /> Back to LLmlite
          </Link>
        </div>
      </main>
    </div>
  );
}
