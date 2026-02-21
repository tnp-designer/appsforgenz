import { UserPlus, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Build a standout profile in minutes. Add your academic background, skills, and goals. Our smart system formats everything perfectly for each application.",
  },
  {
    number: "02",
    icon: Search,
    title: "Search & Match",
    description:
      "Browse thousands of jobs and universities. Our AI matches you with the best opportunities based on your profile, boosting your chances of success.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Apply & Get Accepted",
    description:
      "Apply to multiple opportunities with one click. Track all your applications in one dashboard and get real-time updates on your status.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#E84848] uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-[#363534] leading-tight">
            How ApplyFast works
          </h2>
          <p className="mt-4 text-[#7a6b62] max-w-lg mx-auto text-sm leading-relaxed">
            From profile to acceptance letter — we've streamlined every step so
            you spend less time applying and more time succeeding.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                {/* Connector line (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+44px)] right-[-50%] h-px border-t-2 border-dashed border-[#e8d4b8] z-0" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center gap-5">
                  {/* Icon circle */}
                  <div className="w-20 h-20 rounded-full bg-[#FEECD6] flex items-center justify-center flex-shrink-0 relative">
                    <Icon className="w-8 h-8 text-[#E84848]" strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#E84848] rounded-full text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#363534] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#7a6b62] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
