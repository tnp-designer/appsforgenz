import { Link } from "react-router-dom";
import { Zap, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "How It Works", to: "/how-it-works" },
    { label: "Universities", to: "/universities" },
    { label: "Jobs", to: "/jobs" },
    { label: "Pricing", to: "/pricing" },
  ],
  Resources: [
    { label: "Blog", to: "/blog" },
    { label: "Application Tips", to: "/blog" },
    { label: "Success Stories", to: "/blog" },
    { label: "FAQ", to: "/blog" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/about" },
    { label: "Privacy Policy", to: "/about" },
    { label: "Terms of Service", to: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      {/* CTA Banner */}
      <div className="bg-[#E84848] px-6 py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight">
              Ready to apply fast and<br className="hidden sm:block" /> land your dream?
            </h2>
            <p className="mt-3 text-white/80 text-sm max-w-sm">
              Join 50,000+ students who found their opportunities faster with
              ApplyFast.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/signup"
              className="bg-white text-[#E84848] text-sm font-semibold px-7 py-3.5 rounded hover:bg-[#FEECD6] transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/how-it-works"
              className="border border-white/50 text-white text-sm font-medium px-7 py-3.5 rounded hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-6 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#E84848] rounded-md flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-base font-bold tracking-tight">
                Apply<span className="text-[#E84848]">Fast</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              The fastest way for students to apply to universities and jobs
              worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@applyfast.com"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ApplyFast. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with ❤️ for ambitious students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
