/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function TaplinkPrivacypolicy() {
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
          <span className="text-sm font-bold opacity-40">Taplink</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm opacity-50 font-medium mb-10">Taplink - Last updated March 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">1. Introduction</h2>
            <p>
              Taplink ("we," "our," or "the app") respects your privacy. This Privacy
              Policy explains what information may be collected when you use Taplink,
              how that information is used, and the choices available to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">2. Information We Collect</h2>
            <p>
              Depending on how you use Taplink, we may collect information such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-white">Account and profile details.</strong> This can
                include your display name, username, email address, or other information
                you provide when creating or managing your profile.
              </li>
              <li>
                <strong className="text-white">Content you submit.</strong> This can include
                links, profile images, descriptions, social handles, and other materials
                you choose to upload or publish through the app.
              </li>
              <li>
                <strong className="text-white">Usage and device information.</strong> This can
                include app interactions, browser type, device type, operating system,
                IP address, approximate location, crash data, and diagnostic information.
              </li>
              <li>
                <strong className="text-white">Support communications.</strong> If you contact
                support, we may keep records of your messages and related details needed
                to respond.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">3. How We Use Information</h2>
            <p>
              We use information to operate Taplink, personalize your experience, host
              and display your content, maintain security, analyze performance, improve
              features, respond to support requests, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">4. Sharing of Information</h2>
            <p>
              We may share information with trusted service providers that help us run
              the app, such as hosting, analytics, customer support, and infrastructure
              providers. We may also disclose information if required by law, to enforce
              our terms, or to protect the rights, safety, and security of Taplink,
              our users, or others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">5. Data Retention and Security</h2>
            <p>
              We retain information only for as long as reasonably necessary to provide
              the service, resolve disputes, enforce agreements, and meet legal
              requirements. We use reasonable technical and organizational safeguards to
              protect information, but no system can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">6. Your Choices and Rights</h2>
            <p>
              Depending on your location, you may have the right to access, update,
              delete, or restrict the use of your personal information. You may also
              have choices about marketing communications and certain analytics or cookie
              technologies where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Taplink is not intended for children under the age required by applicable
              law to use the service independently. If you believe a child has provided
              personal information in violation of this policy, contact us so we can
              review and take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material
              changes, we may provide notice through the app or by other reasonable
              means. Continued use of Taplink after an update means the revised policy
              will apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">9. Contact</h2>
            <p>
              For privacy-related questions, requests, or concerns, please contact us
              using the support or contact options made available in the Taplink app or
              on the related website or store listing.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm hover:underline"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Taplink
          </Link>
        </div>
      </main>
    </div>
  );
}
