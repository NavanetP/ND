import { ArrowUp, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import p1_2_img1 from "../../Architectural planning/Mr.Balaji Residence/Balaji residence second floor plan-Model.jpg";

const ArchitecturalPlanning = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px", // Adjusted for mobile
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

  // Scroll event listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
  {/* Hero Section - Single Image with Content */}
<section className="relative h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[95vh] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={p1_2_img1}
      alt="Architectural Planning Hero"
      className="w-full h-full object-cover object-center xs:object-top sm:object-center"
      loading="eager"
    />
    {/* Dark overlay for text readability - responsive opacity */}
    <div className="absolute inset-0 bg-gradient-to-b
      from-black/40 via-black/30 to-black/60
      xs:from-black/35 xs:via-black/25 xs:to-black/65
      sm:from-black/30 sm:via-black/20 sm:to-black/60"
    />
  </div>

  {/* Content Overlay - responsive padding */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center
    px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
    py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">

    <div className="w-full max-w-[320px] xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto text-center">

      {/* Heading - fully responsive font sizes */}
      <h1 className="font-bold text-white mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7
        text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
        drop-shadow-xl leading-tight">
        Architectural Planning
      </h1>

      {/* Description Card - fully responsive */}
      <div className="relative z-10 w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        <p className="text-white text-justify sm:text-center
          text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
          px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
          py-3 xs:py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8
          bg-white/10 backdrop-blur-[2px] xs:backdrop-blur-sm
          border border-white/20 xs:border-white/30
          rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl
          shadow-sm xs:shadow-md sm:shadow-lg md:shadow-xl
          leading-relaxed">
          Architecture is the foundation of a lasting space. At Nitham
          Designs, we blend creativity with clarity to design residential
          and commercial spaces across Tamil Nadu that are structurally
          sound, climate-responsive, and aesthetically timeless.
        </p>
      </div>

      {/* Responsive spacing */}
      <div className="h-2 xs:h-3 sm:h-4 md:h-5 lg:h-6" />

      {/* Caption Pill - fully responsive */}
      <div className="flex justify-center px-2 xs:px-3">
        <div className="relative bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-400
          text-white whitespace-nowrap
          px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10
          py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3.5
          rounded-full
          shadow-[0_2px_8px_rgba(56,189,248,0.3)]
          xs:shadow-[0_4px_12px_rgba(56,189,248,0.35)]
          sm:shadow-[0_4px_15px_rgba(56,189,248,0.4)]
          md:shadow-[0_6px_20px_rgba(56,189,248,0.45)]
          transition-all duration-500 hover:scale-105">
          <div className="absolute -inset-[1px] xs:-inset-[2px] rounded-full
            from-cyan-400/20 to-cyan-400/20 blur-[2px] xs:blur-sm" />
          <p className="relative z-10
            text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg
            font-semibold tracking-wide drop-shadow-md">
            Spaces Built to Endure, Flow, and Inspire
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Benefits of Our Architectural Planning Service
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base mb-1 sm:mb-2">
                      Optimized site usage with zoning precision
                    </h3>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base mb-1 sm:mb-2">
                      Natural light & ventilation maximized
                    </h3>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base mb-1 sm:mb-2">
                      Vaastu-compliant layouts (if needed)
                    </h3>
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base mb-1 sm:mb-2">
                      Modern, minimal, and locally adapted
                    </h3>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base mb-1 sm:mb-2">
                      Cost-efficient planning with long-term durability
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            What's Included
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[
                "Site analysis and survey coordination",
                "Conceptual layouts",
                "Floor plans and elevations",
                "3D massing & built-form design",
                "Municipal drawing support (if needed)",
                "Structural design liaison",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "1",
                  title: "Site & Client Briefing",
                  description:
                    "Understanding the land, needs, and aspirations.",
                },
                {
                  step: "2",
                  title: "Zoning & Orientation Planning",
                  description:
                    "Plot-specific layouts for airflow, light, and accessibility.",
                },
                {
                  step: "3",
                  title: "Preliminary Drawings",
                  description: "We present floor plans and initial elevations.",
                },
                {
                  step: "4",
                  title: "Detailed Design Development",
                  description:
                    "Working drawings with material recommendations and structure-fit plans.",
                },
                {
                  step: "5",
                  title: "Site Support",
                  description:
                    "We provide on-call/visit-based site guidance during execution.",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6 reveal">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {[
              {
                question: "Do you help with building approvals?",
                answer: "Yes. We support all necessary municipal drawings.",
              },
              {
                question:
                  "Can you design a modern house within Vaastu principles?",
                answer:
                  "Absolutely. We balance cultural sensitivity with contemporary design.",
              },
              {
                question: "Is this separate from interior design?",
                answer:
                  "Yes, but our architecture complements interior planning seamlessly.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg reveal"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-500">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 reveal">
            Planning to Build Something Enduring?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 sm:mb-8 reveal px-2">
            Start your home or project the right way — with thoughtful
            architecture.
          </p>
          <Link to="/#transform-space">
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl reveal w-full sm:w-auto">
              Schedule a Discovery Call
            </button>
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .reveal {
          opacity: 0;
        }

        .animate-in {
          animation-fill-mode: both;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
        }

        .fade-in-left.animate-in {
          animation-name: fadeInLeft;
        }

        .fade-in-right.animate-in {
          animation-name: fadeInRight;
        }

        .fade-in-up.animate-in {
          animation-name: fadeInUp;
        }

        .fade-in-down.animate-in {
          animation-name: fadeInDown;
        }

        .pop-in.animate-in {
          animation-name: popIn;
        }
      `}</style>
    </div>
  );
};

export default ArchitecturalPlanning;
