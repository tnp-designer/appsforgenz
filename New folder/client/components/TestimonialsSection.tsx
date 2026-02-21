import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Admitted to MIT, Computer Science",
    avatar: "PS",
    avatarBg: "#fde8e8",
    avatarColor: "#E84848",
    quote:
      "ApplyFast helped me apply to 12 universities in a single weekend. The smart matching showed me programs I hadn't even considered. I got into my top choice!",
    stars: 5,
  },
  {
    name: "James Okafor",
    role: "Software Engineer at Google",
    avatar: "JO",
    avatarBg: "#e8effe",
    avatarColor: "#5B8DEF",
    quote:
      "I was applying to 30+ jobs and losing track of everything. ApplyFast's dashboard kept me organized and I landed a role at my dream company within 6 weeks.",
    stars: 5,
  },
  {
    name: "Aisha Malik",
    role: "MBA Student at Wharton",
    avatar: "AM",
    avatarBg: "#e4f5ec",
    avatarColor: "#4CAF7D",
    quote:
      "The profile builder is incredible. It helped me present my experience in the best possible light. My acceptance rate went from 10% to over 60%.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#E84848] uppercase tracking-widest">
            Success Stories
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-normal text-[#363534] leading-tight">
            Students who applied fast,
            <br />
            <span className="text-[#E84848]">won faster</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#FEECD6] rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#E84848] text-[#E84848]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#363534] leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#e8d4b8]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{
                    backgroundColor: t.avatarBg,
                    color: t.avatarColor,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#363534]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#7a6b62]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
