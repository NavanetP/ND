import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  RefreshCw,
  TrendingUp,
  Zap,
  Shield,
  Users,
  ArrowUp,
} from "lucide-react";

const Renovation = () => {
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
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 reveal">
              <RefreshCw className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 reveal">
              Renovation Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-600 font-semibold mb-4 sm:mb-6 reveal">
              Transform the Old Into Timeless New
            </p>
            <p className="text-base sm:text-lg text-gray-700 text-justify sm:text-center reveal px-2">
              At Nitham Designs, we don't just renovate — we reimagine. Whether
              it's a dated home, a worn-out office, or a rental property in need
              of modernization, our renovation services breathe new life into
              existing spaces. Our expert team blends structural functionality
              with aesthetic upgrades to create spaces that feel brand new while
              preserving their original essence.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Benefits of Renovating With Nitham Designs
          </h2>
          <div className="max-w-10xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Improved space efficiency and layout optimization
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Upgraded aesthetics with modern design elements
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Enhanced property value and long-term investment returns
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Energy-efficient and sustainable material upgrades
                </h3>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="font-bold text-black text-sm sm:text-base text-center">
                  Minimal disruption with professional project management
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
          <div className="max-w-10xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                "On-site inspection and structural assessment",
                "Design proposal with functional and visual upgrades",
                "Demolition planning and material reuse strategy",
                "2D and 3D visualization of the renovated space",
                "Electrical, plumbing, and civil refurbishments",
                "Finishing, furnishing, and decor styling",
                "Optional: VR visualization and turnkey project execution",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mt-1 flex-shrink-0" />
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
            Our Renovation Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "1",
                  title: "Site Survey & Evaluation",
                  description:
                    "We assess structural integrity, limitations, and renovation potential.",
                },
                {
                  step: "2",
                  title: "Design Planning",
                  description:
                    "Visualize the transformed space with renders and layout plans.",
                },
                {
                  step: "3",
                  title: "Material & Budget Finalization",
                  description:
                    "We balance cost with quality to make the most of your investment.",
                },
                {
                  step: "4",
                  title: "Execution Phase",
                  description:
                    "We handle everything — from demolition to delivery — with daily updates.",
                },
                {
                  step: "5",
                  title: "Final Styling & Handover",
                  description:
                    "Your new space is styled and delivered, ready for use.",
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

      {/* Who Is It For */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Who Is It For?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                "Apartment owners looking to modernize old layouts",
                "Homeowners preparing for resale or rental",
                "Office spaces requiring a brand refresh",
                "Commercial property owners upgrading to meet current codes",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal"
                >
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
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

      {/* FAQs */}
      <section className="py-8 sm:py-10 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {[
              {
                question: "Can I stay at home while renovation happens?",
                answer:
                  "Depending on the scale, partial renovations can be planned with minimal disruption.",
              },
              {
                question: "Do you handle structural changes too?",
                answer:
                  "Yes. We work with structural engineers for safe and compliant alterations.",
              },
              {
                question:
                  "Is renovation cost-effective compared to rebuilding?",
                answer:
                  "Absolutely. A well-planned renovation can increase functionality and resale value at a fraction of the cost.",
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
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 reveal">
            Ready to Renovate Smart?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 sm:mb-8 reveal px-2">
            Whether it's a kitchen upgrade, bathroom makeover, or a full
            property transformation — we make it happen.
          </p>
          <Link to="/#transform-space">
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl reveal w-full sm:w-auto">
              Book a Renovation Site Visit
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

export default Renovation;