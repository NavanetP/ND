import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Home as HomeIcon,
  Users,
  Heart,
  Lightbulb,
} from "lucide-react";

const ResidentialInterior = () => {
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
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 reveal">
              <HomeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 reveal">
              Residential Interior Design
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-600 font-semibold mb-4 sm:mb-6 reveal">
              Live in a Space That Tells Your Story
            </p>
            <p className="text-base sm:text-lg text-gray-700 text-justify sm:text-center reveal">
              Your home isn't just a place — it's a feeling. At Nitham Designs,
              we specialize in residential interior design that mirrors your
              personality, adapts to your lifestyle, and stands the test of
              time. From minimalist urban apartments to elegant villas, we
              create homes that feel like you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 px-4 sm:py-10 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Why Choose Us for Home Interior Design?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                "Bespoke layouts based on how your family lives",
                "Smart space optimization in every corner",
                "Visual balance through textures, lighting, and materials",
                "Design with empathy — we listen before we plan",
                "3D or VR walkthrough to experience your future home based on demand",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 reveal">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-sm sm:text-base">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-8 px-4 sm:py-10 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            What's Included
          </h2>
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[
                "Design consultation & budget planning",
                "Space planning and layout finalization",
                "Theme-based design concepts (modern, traditional, minimal, etc.)",
                "Custom modular kitchen and wardrobe design",
                "Furniture & soft furnishing selection",
                "Lighting, decor, and styling",
                "On Demand: On-site execution and supervision",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg reveal"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 px-4 sm:py-10 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Our Step-by-Step Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "1",
                  title: "Home Visit & Briefing",
                  description:
                    "We understand your vision, lifestyle, and family's daily habits.",
                },
                {
                  step: "2",
                  title: "Design Development",
                  description:
                    "Floor plans, color schemes, and 3D visualizations for every room.",
                },
                {
                  step: "3",
                  title: "Material Finalization",
                  description:
                    "Modular units, tiles, fabrics, and finishes approved with samples.",
                },
                {
                  step: "4",
                  title: "Project Execution",
                  description:
                    "Managed by our in-house team or coordinated with your contractor.",
                },
                {
                  step: "5",
                  title: "Styling & Handover",
                  description:
                    "We complete the final touch — ready to live in.",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6 reveal">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-8 px-4 sm:py-10 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Who Do We Work With?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  Newlyweds or Young Couples
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Setting up their first home with style and functionality.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  Growing Families
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Renovating for more functionality and comfort.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">NRIs</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Designing for parents or retirement spaces.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg reveal">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  Apartment Owners
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Wanting modern, modular upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 px-4 sm:py-10 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {[
              {
                question: "Do you design small homes and apartments?",
                answer:
                  "Absolutely. We're known for smart, space-saving solutions for small, mid-sized, large sized homes, villas, bungalow, etc.",
              },
              {
                question: "Is the furniture custom-built?",
                answer:
                  "We offer both custom designs and modular factory-made solutions, based on your need.",
              },
              {
                question: "Can I get just the design without execution?",
                answer: "Yes, we offer standalone design packages too.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg reveal"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 reveal">
            Let's Create a Home That Feels Like You
          </h2>
          <p className="text-lg sm:text-xl text-cyan-100 mb-6 sm:mb-8 reveal">
            Design that feels like home from the first step inside.
          </p>
          <Link to="/#transform-space">
            <button className="bg-white text-cyan-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto reveal">
              Schedule a Home Design Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResidentialInterior;