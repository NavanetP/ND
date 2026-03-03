import { ArrowUp, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rrrr from "../../Elevation/Pallikaranai residence/06.jpg";
const ElevationDesign = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

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
<section className="relative h-[90vh] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={rrrr}
      alt="Elevation Design Hero"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Icon */}

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
        Elevation Design
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold mb-4 sm:mb-6 drop-shadow-md">

      </p>
   <div className="relative z-10 max-w-4xl px-4">
      <p
        className="text-base sm:text-lg text-white text-justify sm:text-center
               px-6 py-6
               bg-white/10 backdrop-blur-md
               border border-white/30
               rounded-xl
               shadow-lg"
      >
        Your building's elevation sets the tone. At Nitham Designs, we
        craft facades that are more than decorative — they are responsive,
        climate-aware, and distinctly modern. Whether it's a villa,
        duplex, or commercial building, we create elevations that reflect
        your identity.
      </p>
    </div>
      {/* Description */}
<br></br>

      {/* Caption Pill */}
      <div className="flex justify-center">
        <div className="relative bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(56,189,248,0.4)] transition-all duration-500 hover:scale-[1.05]">
          <div className="absolute -inset-[2px] rounded-full from-cyan-400/30 to-cyan-400/30 blur-sm" />
          <p className="relative z-10 text-[11px] sm:text-sm md:text-base font-semibold tracking-wide drop-shadow-md">
            First Impressions That Stand the Test of Time
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
            Benefits of Elevation Design with Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                "Enhances curb appeal and resale value",
                "Weather-conscious materials & textures",
                "Seamless blend of form and function",
                "3D visualization for clarity",
                "Consistency with interiors and landscape",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base">
                      {benefit}
                    </h3>
                  </div>
                </div>
              ))}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {[
                "Front, side, and rear elevation drawings",
                "3D renderings & facade animation",
                "Material palette curation",
                "Façade lighting suggestions",
                "Coordination with structural plans",
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
                  title: "Style Discovery",
                  description:
                    "We learn your preferences — minimal, traditional, ultra-modern, etc.",
                },
                {
                  step: "2",
                  title: "Draft & Concept Renders",
                  description: "You'll receive initial designs to refine.",
                },
                {
                  step: "3",
                  title: "Final Visualization",
                  description: "High-quality renders with material tagging.",
                },
                {
                  step: "4",
                  title: "Site Coordination",
                  description: "Drawings adapted for contractor execution.",
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
                question: "Can you do elevation for an existing house?",
                answer: "Yes, we offer elevation redesigns for renovations.",
              },
              {
                question: "Do you offer only design or full execution too?",
                answer:
                  "We offer both, depending on project location and need.",
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
            Want to Make Your Home Stand Out?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 sm:mb-8 reveal px-2">
            Let's design a facade that feels both timeless and personal.
          </p>
          <Link to="/#transform-space">
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl reveal w-full sm:w-auto">
              Get in Touch
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

export default ElevationDesign;
