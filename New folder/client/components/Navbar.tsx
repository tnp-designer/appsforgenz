import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Universities", to: "/universities" },
  { label: "Jobs", to: "/jobs" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#FEECD6] border-b border-[#e8d4b8]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5">
          <div className="w-7 h-7 bg-[#E84848] rounded-md flex items-center justify-center">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-lg font-bold text-[#363534] tracking-tight">
            Apply<span className="text-[#E84848]">Fast</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors relative pb-0.5 ${
                  isActive
                    ? "text-[#E84848] font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E84848] after:rounded-full"
                    : "text-[#363534] hover:text-[#E84848]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: icons + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#363534] hover:text-[#E84848] transition-colors">
            <ShoppingCart className="w-4.5 h-4.5" strokeWidth={1.8} />
          </button>
          <button className="text-[#363534] hover:text-[#E84848] transition-colors">
            <User className="w-4.5 h-4.5" strokeWidth={1.8} />
          </button>
          <Link
            to="/signup"
            className="border border-[#E84848] text-[#6E2B2B] text-sm px-4 py-2 rounded hover:bg-[#E84848] hover:text-white transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#363534]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FEECD6] border-t border-[#e8d4b8] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-[#363534] hover:text-[#E84848] font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/signup"
            className="border border-[#E84848] text-[#6E2B2B] text-sm px-4 py-2 rounded text-center hover:bg-[#E84848] hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
