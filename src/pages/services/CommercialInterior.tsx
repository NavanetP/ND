import {
  Building,
  CheckCircle,
  Eye,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import p111 from "../../Commercial Interior Design/Endosys/19.png";

const CommercialInterior = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ── SECTION 1: Full-Width Hero Image ── */}
      <section className="relative h-[45vh] xs:h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[90vh] 2xl:h-[95vh] overflow-hidden">
        <img
          src={p111}
          alt="Commercial Interior Design Hero"
          className="w-full h-full object-cover object-center xs:object-top sm:object-center"
          loading="eager"
        />
        {/* Subtle bottom fade to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-600/80 to-transparent" />
      </section>

      {/* ── SECTION 2: Content Banner ── */}
      <section className="bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-400 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 md:px-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Heading */}
          <h1 className="font-bold text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            drop-shadow-lg leading-tight tracking-tight">
            Commercial Interior Design
          </h1>

          {/* Divider accent */}
          <div className="flex items-center justify-center gap-3 mb-5 xs:mb-6 sm:mb-7 md:mb-8">
            <span className="h-px w-12 xs:w-16 sm:w-20 bg-white/50 rounded-full" />
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <span className="h-px w-12 xs:w-16 sm:w-20 bg-white/50 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-white/90 text-justify xs:text-center
            text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl
            leading-relaxed max-w-3xl mx-auto mb-7 xs:mb-8 sm:mb-9 md:mb-10">
            We don't just decorate — we design experiences. At Nitham Designs,
            we craft commercial interiors across India that amplify your brand
            voice, boost productivity, and foster meaningful engagement.
            Whether it's an office, showroom, cafe, or retail outlet, we align
            your space with your purpose.
          </p>

          {/* Caption Pill */}
          <div className="flex justify-center">
            <div className="relative bg-white/20 backdrop-blur-sm border border-white/40
              text-white whitespace-nowrap
              px-5 xs:px-6 sm:px-7 md:px-8 lg:px-10
              py-2 xs:py-2.5 sm:py-3 md:py-3.5
              rounded-full shadow-lg
              transition-all duration-500 hover:scale-105 hover:bg-white/30">
              <p className="relative z-10
                text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg
                font-semibold tracking-wide drop-shadow-sm">
                Functional Interiors That Reflect Your Brand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Benefits of Our Commercial Interior Design
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { icon: TrendingUp, text: "Boost brand identity with intelligent spatial storytelling" },
                { icon: Users,      text: "Improve employee efficiency through ergonomic layouts" },
                { icon: Eye,        text: "Make a lasting first impression on visitors & clients" },
                { icon: Zap,        text: "Modular, scalable design for future growth" },
                { icon: CheckCircle,text: "On-site execution with professional supervision" },
                { icon: Building,   text: "Smart budgeting without sacrificing style" },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                    </div>
                    <h3 className="font-bold text-black text-sm sm:text-base leading-relaxed">
                      {benefit.text}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            What's Included
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[
                "Brand study & requirement gathering",
                "Layout planning & design concept",
                "Custom furniture & modular fixtures",
                "Lighting & acoustic planning",
                "Material selection & sample boards",
                "3D walkthroughs & optional VR presentation",
                "End-to-end project execution",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "1",
                  title: "Brand Discovery",
                  description: "Understanding your purpose, audience, and space goals.",
                },
                {
                  step: "2",
                  title: "Design Direction",
                  description:
                    "Mood boards, color schemes, and zoning based on workflows and experience mapping.",
                },
                {
                  step: "3",
                  title: "Visualization & Approval",
                  description: "Photorealistic renders or virtual walkthroughs.",
                },
                {
                  step: "4",
                  title: "Execution Plan",
                  description: "Detailed BoQ, schedules, and procurement roadmap.",
                },
                {
                  step: "5",
                  title: "On-Site Execution",
                  description:
                    "Real-time updates, vendor coordination, and design fidelity checks.",
                },
                {
                  step: "6",
                  title: "Final Styling & Delivery",
                  description: "Space is polished, styled, and handed over — on time.",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6 reveal">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 mt-1">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {[
              {
                question: "Do you take up turnkey commercial projects?",
                answer: "Yes. We handle design, procurement, site execution, and styling.",
              },
              {
                question: "Can you work with an existing contractor?",
                answer: "Yes. We can collaborate with your team or manage everything in-house.",
              },
              {
                question: "How long do commercial projects take?",
                answer: "Typically 1–4 months, depending on size and service scope.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg reveal"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-500">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 reveal">
            Ready to Align Your Space with Your Brand?
          </h2>
          <p className="text-lg sm:text-xl text-cyan-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 reveal">
            Let's design a space where business meets beauty.
          </p>
          <Link to="/#transform-space">
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto reveal">
              Book a Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* ── CSS Animations ── */}
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }

        .reveal { opacity: 0; }

        .animate-in {
          animation-fill-mode: both;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
          animation-name: fadeInUp;
        }

        .fade-in-left.animate-in  { animation-name: fadeInLeft; }
        .fade-in-right.animate-in { animation-name: fadeInRight; }
        .fade-in-up.animate-in    { animation-name: fadeInUp; }
        .fade-in-down.animate-in  { animation-name: fadeInDown; }
        .pop-in.animate-in        { animation-name: popIn; }
      `}</style>
    </div>
  );
};

export default CommercialInterior;
