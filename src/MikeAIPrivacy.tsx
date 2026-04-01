/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function MikeAIPrivacy() {
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
          <span className="text-sm font-bold opacity-40">Mike AI</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm opacity-50 font-medium mb-10">
          Mike AI · Last updated April 1, 2026
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Mike AI ("we," "our," or "the app") provides AI-powered search and
              contract drafting tools. This Privacy Policy explains what information
              we collect, how we use it, and how we protect it when you use Mike AI.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              2. Information We Collect
            </h2>
            <p>To provide Mike AI services, we may collect and process:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-white">Account information.</strong> This may
                include your name, email address, sign-in details, and profile data
                you provide when creating or accessing your account.
              </li>
              <li>
                <strong className="text-white">Search queries and prompts.</strong>{' '}
                We process the questions, keywords, instructions, and other content
                you submit to generate AI search results and contract drafts.
              </li>
              <li>
                <strong className="text-white">Uploaded documents and text.</strong>{' '}
                If you upload contracts, clauses, templates, or related materials, we
                process them to analyze, summarize, revise, or draft documents for
                you.
              </li>
              <li>
                <strong className="text-white">Usage and device data.</strong> This
                may include log data, browser type, device information, IP address,
                interaction events, and diagnostic information used to secure and
                improve the app.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              3. How We Use Information
            </h2>
            <p>We use personal information and submitted content to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide AI search, legal drafting assistance, and related features.</li>
              <li>Generate, edit, review, and organize contract-related content.</li>
              <li>Maintain security, prevent abuse, and troubleshoot technical issues.</li>
              <li>Improve product quality, model performance, and user experience.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              4. Sensitive and Legal Content
            </h2>
            <p>
              Contract drafts and legal text may contain sensitive business or personal
              information. Please avoid submitting confidential information unless you
              are authorized to do so. Mike AI is designed to assist with drafting and
              research, but it does not replace review by a qualified legal
              professional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              5. Sharing of Information
            </h2>
            <p>
              We do not sell your personal information. We may share data with trusted
              vendors and infrastructure providers that help us operate Mike AI, such
              as hosting, analytics, authentication, and AI processing providers,
              subject to appropriate confidentiality and security obligations. We may
              also disclose information when required by law or to protect rights,
              safety, and security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              6. Data Retention and Security
            </h2>
            <p>
              We apply reasonable administrative, technical, and organizational
              safeguards to protect information. We retain data only for as long as
              needed to provide services, resolve disputes, maintain security, and
              satisfy legal or operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights to request access,
              correction, deletion, or restriction of your personal information. You
              may also have the right to object to certain processing activities or
              request data portability where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material
              changes, we may provide notice through the app, website, or other
              appropriate channels. Your continued use of Mike AI after an update means
              the revised policy will apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">
              9. Contact
            </h2>
            <p>
              For privacy questions, data requests, or concerns about Mike AI, please
              contact the Mike AI support channel or the contact method provided in the
              app or on the related website.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm hover:underline"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Mike AI
          </Link>
        </div>
      </main>
    </div>
  );
}
