import { Zap, Target, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Applications",
    description:
      "Apply to 10+ opportunities in the time it takes to fill one traditional form. Our pre-filled templates save you hours every week.",
    color: "#E84848",
    bg: "#fde8e8",
  },
  {
    icon: Target,
    title: "Smart Matching",
    description:
      "Our AI analyzes your profile and matches you with jobs and universities where you have the highest chance of being accepted.",
    color: "#F4B942",
    bg: "#fdf3e0",
  },
  {
    icon: BarChart3,
    title: "Application Tracker",
    description:
      "Keep all your applications organized in one place. Track statuses, deadlines, and follow-ups without missing a beat.",
    color: "#5B8DEF",
    bg: "#e8effe",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Access thousands of universities and employers worldwide. Expand your horizons and discover opportunities you didn't know existed.",
    color: "#4CAF7D",
    bg: "#e4f5ec",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#FEECD6] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm font-semibold text-[#E84848] uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-[#363534] leading-tight max-w-md">
              Everything you need to apply smarter
            </h2>
          </div>
          <p className="text-[#7a6b62] text-sm leading-relaxed max-w-xs">
            Built specifically for students who are serious about landing their
            dream opportunity without the stress.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-base font-semibold text-[#363534] leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#7a6b62] leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
