import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Palette,
  ArrowRight,
  Home as HomeIcon,
  Building,
} from "lucide-react";

const InteriorDesign = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
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
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 reveal">
              <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 reveal">
              Interior Design
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-cyan-600 font-semibold mb-4 sm:mb-6 reveal">
              Where Function Meets Aesthetic in Every Detail
            </p>
            <p className="text-base sm:text-lg text-gray-700 text-justify sm:text-center leading-relaxed reveal">
              At Nitham Designs, interior design is more than styling — it's
              about shaping everyday experiences. We transform raw spaces into
              environments that elevate lifestyle and functionality. Whether
              it's a home, office, cafe, or boutique, our designs speak your
              story with purpose and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Our Interior Design Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Link to="/services/residential-interior" className="group">
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 reveal">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <HomeIcon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                  Residential Interior Design
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Live in a space that tells your story. Bespoke home interiors
                  that mirror your personality and adapt to your lifestyle.
                </p>
                <div className="flex items-center text-cyan-500 font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300 justify-center sm:justify-start">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link to="/services/commercial-interior" className="group">
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 reveal">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <Building className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                  Commercial Interior Design
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Functional interiors that reflect your brand. Create
                  commercial spaces that amplify your brand voice and enhance
                  productivity.
                </p>
                <div className="flex items-center text-cyan-500 font-semibold text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-300 justify-center sm:justify-start">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Benefits of Working With Our Interior Designers
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {[
                "Personalized designs tailored to your taste and needs",
                "Enhanced functionality through spatial intelligence",
                "Smart material selection for durability and budget",
                "Time-saving execution with professional supervision",
                "Harmonious blend of form, color, light, and layout",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base leading-relaxed">
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
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            What's Included
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                "Site assessment and requirement gathering",
                "Concept ideation with mood boards and material palettes",
                "Layout planning and space zoning",
                "2D drawings, 3D renderings, and optional VR previews",
                "Custom furniture suggestions and decor curation",
                "Vendor coordination and turnkey execution (if opted)",
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

      {/* Process Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "1",
                  title: "Discovery & Briefing",
                  description:
                    "We listen to your lifestyle, aesthetic goals, and preferences.",
                },
                {
                  step: "2",
                  title: "Space Planning & Zoning",
                  description: "Functional optimization of available space.",
                },
                {
                  step: "3",
                  title: "Design Visualizations",
                  description:
                    "You receive 3D renders, color palettes, and finish plans.",
                },
                {
                  step: "4",
                  title: "Material & Furniture Selection",
                  description: "We curate moodboards and samples for review.",
                },
                {
                  step: "5",
                  title: "Execution & Final Styling",
                  description:
                    "Either with your contractor or through our execution services.",
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

      {/* Who Is It For */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Who Is It For?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Homeowners wanting a refresh or complete design",
                "Entrepreneurs opening a new office, café, or boutique",
                "Families planning modular solutions or new builds",
                "Builders looking to stage model flats or spaces",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mt-0.5 sm:mt-1 flex-shrink-0" />
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

      {/* FAQs */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {[
              {
                question: "Do you design for both residential and commercial?",
                answer:
                  "Yes, our team is equipped to handle all types of interiors with equal expertise.",
              },
              {
                question: "Do you offer just design or execution too?",
                answer: "Both. We offer design-only or full turnkey services.",
              },
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Timelines range from 4 to 12 weeks depending on scope and size.",
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

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 reveal">
            Let's Design a Space That Reflects You
          </h2>
          <p className="text-lg sm:text-xl text-cyan-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 reveal">
            We combine creativity with functionality to give you timeless
            interiors.
          </p>
          <Link to="/#transform-space">
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto reveal">
              Book a Free Design Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Add CSS animations */}
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
            transform: scale(0.9);
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

export default InteriorDesign;