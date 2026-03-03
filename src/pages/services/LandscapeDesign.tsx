import { ArrowUp, CheckCircle, Flower, Leaf, Sun, Trees } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import p4444 from "../../Architectural planning/Maraimalainagar residence/Untitled-1.png";

const LandscapeDesign = () => {
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
      src={p4444}
      alt="Landscape Design Hero"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <Trees className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
        Landscape Design
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold mb-4 sm:mb-6 drop-shadow-md">
        Designing Outdoor Spaces That Breathe with You
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg text-white/90 text-justify sm:text-center px-2 mb-8 sm:mb-10 drop-shadow">
        Landscape design is where architecture meets nature. We design
        residential and commercial landscapes that are usable, meditative,
        and climate-responsive. Whether you have a garden, terrace, or
        courtyard — we bring green thinking into your design.
      </p>

      {/* Caption Pill */}
      <div className="flex justify-center">
        <div className="relative bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(56,189,248,0.4)] transition-all duration-500 hover:scale-[1.05]">
          <div className="absolute -inset-[2px] rounded-full from-cyan-400/30 to-cyan-400/30 blur-sm" />
          <p className="relative z-10 text-[11px] sm:text-sm md:text-base font-semibold tracking-wide drop-shadow-md">
            slides[0].caption
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
            Benefits of Our Landscape Design
          </h2>
          <div className="max-w-10xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Improve aesthetics and air quality
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Climate-smart plant selection
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Trees className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Low-maintenance designs
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Flower className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Zones for play, peace, and function
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Integration with architecture and interiors
                </h3>
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
                "Site and soil analysis",
                "Hardscape and softscape layout",
                "Water feature/lighting suggestions",
                "Plant curation and placement plan",
                "Maintenance guide",
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
                  title: "Site Assessment",
                  description: "We understand light, soil, and wind behavior.",
                },
                {
                  step: "2",
                  title: "Design Conceptualization",
                  description: "Moodboards and layout ideas.",
                },
                {
                  step: "3",
                  title: "Material & Plant Planning",
                  description:
                    "We finalize textures, tiles, planters, and plant types.",
                },
                {
                  step: "4",
                  title: "Execution Planning or Support",
                  description:
                    "We offer install guidance or manage full installation.",
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
                question: "Do you provide maintenance?",
                answer:
                  "We don't offer ongoing maintenance, but we give care guides and planning.",
              },
              {
                question: "Can you work with existing balconies/terraces?",
                answer:
                  "Yes — we specialize in transforming small urban outdoor spaces too.",
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
            Ready to Design Nature into Your Space?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 sm:mb-8 reveal px-2">
            Let's create something green and grounding.
          </p>
          <Link to="/#transform-space">
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl reveal w-full sm:w-auto">
              Book a Landscape Consult
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

export default LandscapeDesign;
