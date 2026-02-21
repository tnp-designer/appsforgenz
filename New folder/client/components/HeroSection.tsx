import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#FEECD6] min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl sm:text-6xl lg:text-[56px] xl:text-[64px] font-normal text-[#363534] leading-[1.1] tracking-tight">
              Apply fast<br />
              to your dream<br />
              job or university
            </h1>
            <p className="mt-6 text-sm text-[#7a6b62] max-w-sm leading-relaxed">
              We simplify the application process so you can find the right
              opportunity, apply in minutes, and get ahead of the competition.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              {/* Get Started button */}
              <Link
                to="/signup"
                className="bg-[#E84848] text-white text-sm px-8 py-4 rounded font-medium hover:bg-[#d03a3a] transition-colors inline-block"
              >
                Get Started
              </Link>

              {/* Watch Demo */}
              <button className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-[#1e1e1e] rounded flex items-center justify-center group-hover:bg-[#363534] transition-colors flex-shrink-0">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                <span className="text-sm text-[#363534] font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Decorative arrow */}
            <div className="mt-10 hidden md:block">
              <svg width="160" height="80" viewBox="0 0 160 80" fill="none" className="text-[#363534]">
                <path
                  d="M10 60 C30 20, 80 10, 130 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M118 8 L132 15 L122 26"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Swirl */}
                <path
                  d="M20 55 C15 45, 10 50, 15 58 C20 65, 28 60, 24 52"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right: image collage */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[480px] h-[420px] sm:h-[500px]">
              {/* Pink arc decorative */}
              <div
                className="absolute top-0 right-8 z-10"
                style={{ width: 52, height: 26 }}
              >
                <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
                  <path
                    d="M2 26 C2 12 12 2 26 2 C40 2 50 12 50 26"
                    stroke="#E87D9B"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Yellow pac-man shape */}
              <div className="absolute bottom-16 left-4 z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 20 L38 12 A20 20 0 1 0 38 28 Z"
                    fill="#F4B942"
                  />
                </svg>
              </div>

              {/* Black vinyl/disc */}
              <div className="absolute bottom-4 right-0 w-36 h-36 bg-[#1a1a1a] rounded-full flex items-center justify-center z-0">
                <div className="w-20 h-20 rounded-full border-2 border-[#E84848]/40 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#E84848]/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#2a2a2a]" />
                  </div>
                </div>
                {/* Circular text */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 144 144"
                >
                  <defs>
                    <path
                      id="circle-text-path"
                      d="M 72 72 m -52 0 a 52 52 0 1 1 104 0 a 52 52 0 1 1 -104 0"
                    />
                  </defs>
                  <text
                    fill="#E84848"
                    fontSize="7"
                    letterSpacing="2"
                    fontFamily="Inter, sans-serif"
                  >
                    <textPath href="#circle-text-path">
                      Apply Fast • Land Your Dream • Apply Fast •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Main image (front, slightly rotated) */}
              <div
                className="absolute left-0 top-8 w-[220px] sm:w-[260px] h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-lg z-20"
                style={{ transform: "rotate(-3deg)" }}
              >
                <img
                  src="https://images.pexels.com/photos/10502306/pexels-photo-10502306.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Student studying"
                  className="w-full h-full object-cover"
                  style={{ background: "#F4A228" }}
                />
              </div>

              {/* Secondary image (behind, right) */}
              <div
                className="absolute right-0 top-0 w-[180px] sm:w-[210px] h-[260px] sm:h-[310px] rounded-2xl overflow-hidden shadow-lg z-10"
                style={{ background: "#a8d8ea" }}
              >
                <img
                  src="https://images.pexels.com/photos/9178786/pexels-photo-9178786.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Happy student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
