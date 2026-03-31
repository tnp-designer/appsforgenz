import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function SuperShopPrivacyPolicy() {
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
          <span className="text-sm font-bold opacity-40">SuperShop</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm opacity-50 font-medium mb-10">
          SuperShop - Last updated March 2026
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">1. Introduction</h2>
            <p>
              SuperShop ("we," "our," or "the app") provides an in-app browsing
              experience that allows users to open and navigate supported ecommerce
              websites. This Privacy Policy explains what information may be collected
              when you use SuperShop and how that information is handled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">2. Information We May Collect</h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-white">Browsing activity inside the app.</strong> This
                may include pages visited, links tapped, session timestamps, and
                interactions necessary to load and navigate ecommerce sites in the
                in-app browser.
              </li>
              <li>
                <strong className="text-white">Technical and device information.</strong> This
                may include device model, operating system, browser engine details, IP
                address, crash logs, diagnostics, and approximate location inferred from
                network information.
              </li>
              <li>
                <strong className="text-white">Account or support details.</strong> If you
                contact support or sign in to app features, we may receive the
                information you provide, such as your name, email, or request details.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">3. Third-Party Websites</h2>
            <p>
              SuperShop may open third-party ecommerce websites within an in-app browser.
              Those websites operate under their own terms and privacy policies. We are
              not responsible for the privacy practices, content, or checkout flows of
              third-party sites you visit through the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">4. How Information Is Used</h2>
            <p>
              We use information to provide the in-app browsing experience, improve app
              stability and performance, maintain security, troubleshoot issues, prevent
              abuse, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">5. Cookies and Site Data</h2>
            <p>
              Third-party ecommerce sites viewed in SuperShop may place cookies or use
              similar technologies according to their own policies. SuperShop may also
              locally store limited session data required for page loading, login state,
              preferences, or security functions inside the in-app browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">6. Sharing and Disclosure</h2>
            <p>
              We may share data with service providers that support hosting, analytics,
              crash reporting, fraud prevention, or customer support. We may also
              disclose information when required by law or when necessary to protect the
              rights, property, and safety of SuperShop, users, partners, or others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">7. Retention and Security</h2>
            <p>
              We retain information only for as long as reasonably necessary for the
              purposes described in this policy, including security, support, legal, and
              operational needs. We apply reasonable safeguards, but no transmission or
              storage system can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">8. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete,
              or object to certain processing of your personal information. You may also
              be able to control some permissions or clear browsing-related data through
              your device or app settings where available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updated versions will
              apply when posted in the app or on the relevant website unless stated
              otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black tracking-tighter text-white mb-3">10. Contact</h2>
            <p>
              For privacy-related questions or requests, please contact us through the
              support or contact channel made available for SuperShop.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lime-400 font-bold text-sm hover:underline"
          >
            <ChevronLeft className="w-4 h-4" /> Back to SuperShop
          </Link>
        </div>
      </main>
    </div>
  );
}
