const stats = [
  { number: "500+", label: "Partner Universities" },
  { number: "50,000+", label: "Students Placed" },
  { number: "92%", label: "Success Rate" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#FEECD6] px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#E84848] rounded-2xl px-8 py-12 relative overflow-hidden">
          {/* Decorative wavy line */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            viewBox="0 0 900 180"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 90 C150 40, 300 140, 450 90 C600 40, 750 140, 900 90"
              stroke="white"
              strokeWidth="40"
              fill="none"
            />
          </svg>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-5xl sm:text-[52px] font-bold text-[#120707] leading-none">
                  {stat.number}
                </span>
                <span className="text-base text-[#431A1A] font-normal">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
