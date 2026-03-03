import {
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Home as HomeIcon
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



// ---------------------------------------------------------------------------
// Image Slider Component for each testimonial
// ---------------------------------------------------------------------------
const TestimonialImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-48 overflow-hidden group/slider">
      {/* Slider Images */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}

              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
      </div>



      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover/slider:opacity-100 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-cyan-500 scale-125"
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md z-10">
        <span className="text-xs text-white font-medium">
          {currentSlide + 1}/{images.length}
        </span>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main Page Component
// ---------------------------------------------------------------------------
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
      {/* ----------------------------------------------------------------- */}
      {/* Hero Section                                                       */}
      {/* ----------------------------------------------------------------- */}
   {/* Hero Section - Single Image with Content */}
<section className="relative h-[90vh] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://fastly.picsum.photos/id/1047/536/354.jpg?hmac=Hqs-Rz08WiLc2elw4gHvY1P-wxDJfmiZ-CSay2BH-1U"
      alt="Residential Interior Design Hero"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
  </div>

  {/* Content Overlay */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <HomeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
        Residential Interior Design
      </h1>

      {/* Subheading */}
      <p className="text-xl sm:text-2xl text-cyan-300 font-semibold mb-4 sm:mb-6 drop-shadow-md">
        Live in a Space That Tells Your Story
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg text-white/90 text-justify sm:text-center px-2 mb-8 sm:mb-10 drop-shadow">
        Your home isn't just a place — it's a feeling. At Nitham Designs,
        we specialize in residential interior design that mirrors your
        personality, adapts to your lifestyle, and stands the test of
        time. From minimalist urban apartments to elegant villas, we
        create homes that feel like you.
      </p>

      {/* Caption Pill */}
      <div className="flex justify-center">
        <div className="relative bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(56,189,248,0.4)] transition-all duration-500 hover:scale-[1.05]">
          <div className="absolute -inset-[2px] rounded-full from-cyan-400/30 to-cyan-400/30 blur-sm" />
          <p className="relative z-10 text-[11px] sm:text-sm md:text-base font-semibold tracking-wide drop-shadow-md">
            like you.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ----------------------------------------------------------------- */}
      {/* Why Choose Us                                                       */}
      {/* ----------------------------------------------------------------- */}
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
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 reveal"
                >
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

      {/* ----------------------------------------------------------------- */}
      {/* What's Included                                                     */}
      {/* ----------------------------------------------------------------- */}
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

      {/* ----------------------------------------------------------------- */}
      {/* Process Section                                                     */}
      {/* ----------------------------------------------------------------- */}
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
                <div
                  key={index}
                  className="flex items-start space-x-4 sm:space-x-6 reveal"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
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

      {/* ----------------------------------------------------------------- */}
      {/* Who We Work With                                                    */}
      {/* ----------------------------------------------------------------- */}


      {/* ----------------------------------------------------------------- */}
      {/* FAQs                                                                */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-8 px-4 sm:py-10 sm:px-6 bg-gray-50">
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
                <p className="text-gray-700 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* CTA Section                                                         */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-500">
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
