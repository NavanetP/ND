import {
  ArrowRight,
  ArrowUp,
  Award,
  Building2,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hammer,
  Home as HomeIcon,
  Instagram,
  Mail,
  MapPin,
  Palette,
  Phone,
  RefreshCw,
  Star,
  Trees,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import q3 from "../img_home/06.jpg";
import q4 from "../img_home/07.jpg";
import q5 from "../img_home/08.jpg";
import q1 from "../img_home/2.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    'project-type': '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const slides = [
    {
      image:
        q1,
      caption: "Modern living spaces designed for contemporary lifestyles",
    },
    {
      image:
        q3,
      caption: "Architectural excellence with thoughtful design details",
    },
    {
      image:
q4,
      caption: "Elegant interiors that blend comfort with sophistication",
    },
    {
      image:
q5,
      caption: "Seamless integration of indoor and outdoor living spaces",
    },
  ];

  // Intersection Observer for reveal animations
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/enquiry@nithamdesigns.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New inquiry from Nitham Designs website',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      if (data.success === 'true') {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          'project-type': '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Architectural Pattern SVG Component
  const ArchPattern = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  // Geometric SVG Component
  const GeometricPattern = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  const stats = [
    { icon: Users, number: "20+", label: "Happy Clients" },
    { icon: Building2, number: "50+", label: "Projects Completed" },
    { icon: Award, number: "3+", label: "Years Experience" },

  ];

  return (
    <div className="relative overflow-x-hidden">
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        @media (min-width: 640px) {
          .reveal {
            transform: translateY(30px);
          }
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card {
          @apply bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-cyan-500 relative overflow-hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(6, 182, 212, 0.02) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .pattern-overlay {
          background-image:
            linear-gradient(45deg, transparent 35%, rgba(6, 182, 212, 0.05) 35%, rgba(6, 182, 212, 0.05) 65%, transparent 65%),
            linear-gradient(-45deg, transparent 35%, rgba(6, 182, 212, 0.05) 35%, rgba(6, 182, 212, 0.05) 65%, transparent 65%);
          background-size: 80px 80px;
        }
        .hero-gradient {
          background: linear-gradient(135deg, #22d3ee  0%, #a5f3fc 25%, #a5f3fc 50%, #67e8f9 75%, #22d3ee 100%);
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Background Pattern Elements */}


      {/* Image Slider Section */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

             <div className="absolute bottom-16 sm:bottom-24 left-0 right-0 flex justify-center">
  <div className="relative bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(56,189,248,0.4)] transition-all duration-500 hover:scale-[1.05]">

    {/* Accent ring */}
    <div className="absolute -inset-[2px] rounded-full  from-cyan-400/30 to-cyan-400/30 blur-sm"></div>

    {/* Text */}
    <p className="relative z-10 text-[11px] sm:text-sm md:text-base font-semibold tracking-wide drop-shadow-md">
      {slide.caption}
    </p>
  </div>
</div>

            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full p-2 sm:p-4 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-cyan-600 transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full p-2 sm:p-4 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-cyan-600 transition-colors" />
        </button>

        {/* Enhanced Dots Indicator */}
        <div className="absolute bottom-2 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${index === currentSlide
                ? "w-6 sm:w-8 h-2 sm:h-3 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full scale-110"
                : "w-2 sm:w-3 h-2 sm:h-3 bg-white/60 hover:bg-white/80 rounded-full hover:scale-110"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Hero Section */}
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 hero-gradient pattern-overlay">
  <div className="container mx-auto text-center relative z-10">
    {/* Floating decorative elements - FIXED POSITIONING */}
    <div className="absolute top-4 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-cyan-200/20 rounded-full floating-element hidden sm:block"></div>
    <div className="absolute top-24 right-20 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-300/30 rounded-full floating-element hidden sm:block" style={{ animationDelay: '3s' }}></div>

    <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-white/80 backdrop-blur-md rounded-full mb-8 sm:mb-10 reveal">
      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mr-2" />
      <span className="text-xs sm:text-sm font-semibold text-gray-700">Premium Architectural & Interior Design</span>
    </div>

    {/* FIXED HEADING - CRITICAL CHANGES */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-10 sm:mb-12 reveal leading-normal px-4 min-h-[1.2em]">
      Designing Spaces That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 pb-1">Endure</span>
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 reveal font-light px-4 leading-relaxed mt-2">
      Architectural and Interior Design Solutions
    </p>

    <div className="max-w-5xl mx-auto mb-8 sm:mb-12 px-4">
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed reveal">
        At Nitham Designs, we believe that great design is both timeless and
        functional. Our name, derived from the Tamil word 'நித்தம்' meaning
        'eternal' or 'daily', reflects our commitment to creating spaces
        that serve everyday needs while standing the test of time.
      </p>
    </div>
 {/*
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 reveal px-4">
      <Link to="/#transform-space" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-cyan-500 text-white rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
          <span className="relative z-10 flex items-center justify-center">
            Contact Us
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </Link>
    </div>*/}

    {/* Stats Section */}
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto reveal px-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
            <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
          <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Enhanced Services Overview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 relative">
        <div className="absolute inset-0 pattern-overlay opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-cyan-100 rounded-full mb-4 sm:mb-6 reveal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 mr-2"
              >
                <path d="M12 3l9 18H3L12 3z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-cyan-700">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 reveal px-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Link
              to="/services/architectural-planning"
              className="service-card reveal group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Architectural Planning
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Thoughtful layouts that optimize space, light, and functionality
                for modern living.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors text-sm sm:text-base">
                Learn More
              </div>
            </Link>

            <Link
              to="/services/elevation-design"
              className="service-card reveal group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Elevation Designing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Striking facades that blend contemporary aesthetics with
                structural integrity.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors text-sm sm:text-base">
                Learn More
              </div>
            </Link>

            <Link
              to="/services/interior-design"
              className="service-card reveal group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Interior Designing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Tailored interiors that reflect your personality, creating
                spaces you love to be in.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors text-sm sm:text-base">
                Learn More
              </div>
            </Link>

            <Link
              to="/services/interior-execution"
              className="service-card reveal group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Interior Execution
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Meticulous, quality-controlled implementation ensuring fidelity
                to the design.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors text-sm sm:text-base">
                Learn More
              </div>
            </Link>

            <Link
              to="/services/renovation"
              className="service-card reveal group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Renovation</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Transforming existing spaces into renewed, functional, and
                beautiful experiences.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors text-sm sm:text-base">
                Learn More
              </div>
            </Link>

            <Link
              to="/services/landscape-design"
              className="service-card reveal group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trees className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Landscape Designing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Create calming outdoor environments that blend seamlessly with
                your architecture.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors text-sm sm:text-base">
                Learn More
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Why Trust Us */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
          <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-100 rounded-full opacity-50 floating-element"></div>
          <div className="absolute bottom-40 right-20 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-200 rounded-full opacity-40 floating-element" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-cyan-50 rounded-full mb-4 sm:mb-6 reveal">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 reveal px-4">
              Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700">Trust</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 gap-y-8 sm:gap-y-12">
              {[
                {
                  title: "Client-Centric Approach",
                  desc: "Your vision is our blueprint. We listen first, then design.",
                },
                {
                  title: "Customized Solutions",
                  desc: "Designs tailored to your lifestyle and preferences.",
                },
                {
                  title: "Modern Aesthetics",
                  desc: "Sleek, minimal designs for contemporary living.",
                },
                {
                  title: "Complete Accountability",
                  desc: "We treat your project with the same care as our own.",
                },
                {
                  title: "Iterative Design Process",
                  desc: "Revisions until you're satisfied with the plan.",
                },
                {
                  title: "Cost-Effective Strategies",
                  desc: "Smart solutions that respect your budget.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6 reveal group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-white/80 backdrop-blur-md rounded-full mb-4 sm:mb-6 reveal">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Client Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 reveal px-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto reveal px-4">
              Hear from homeowners who have transformed their spaces with Nitham Designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 reveal border border-white/20 group hover:scale-[1.02]">
              <div className="flex items-center mb-4 sm:mb-6">
               <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg flex-shrink-0">
                  1
                </div>
                <div className="ml-1 sm:ml-2">
                  <h4 className="font-bold text-gray-900 text-base sm:text-md"> Mr. Vijayakumar</h4>
                  <p className="text-cyan-600 text-xs sm:text-sm font-medium">Property Owner | Namakkal | Residential Interior
</p>
                </div>
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
Nitham Designs recently completed the interior work for our home, and I must say—they did a phenomenal job! They transformed our ideas into a beautiful and functional reality. I truly appreciate the effort they put into every detail of the project.
              </p>
            </div>

            {/* Testimonial 2 */}
           <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 reveal border border-white/20 group hover:scale-[1.02]">
              <div className="flex items-center mb-4 sm:mb-6">
               <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg flex-shrink-0">
                  2
                </div>
                <div className="ml-1 sm:ml-2">
                  <h4 className="font-bold text-gray-900 text-base sm:text-md">Mr. Balaji
</h4>
                  <p className="text-cyan-600 text-xs sm:text-sm font-medium">Property Owner | Srivilliputhur | Architectural Planning cum Residential Interior
</p>
                </div>
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                Nitham designs home elevation designer and architect exceeded my expectations with their professionalism and attention to detail. Their innovative designs greatly enhanced the aesthetic appeal of my residence. I highly recommend their services to anyone seeking quality and excellence.
              </p>
            </div>

            {/* Testimonial 3 */}
           <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 reveal border border-white/20 group hover:scale-[1.02]">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg flex-shrink-0">
                  3
                </div>
                <div className="ml-1 sm:ml-2">
                  <h4 className="font-bold text-gray-900 text-base sm:text-md">Mr. Santharam </h4>
                  <p className="text-cyan-600 text-xs sm:text-sm font-medium">Endosys Technologies| Chennai | Commercial Interior</p>
                </div>
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
Great design and sincere follow up with the workers to ensure good quality.

              </p>
            </div>


{/* Testimonial 4 */}
           <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 reveal border border-white/20 group hover:scale-[1.02]">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg flex-shrink-0">
                  4
                </div>
                <div className="ml-1 sm:ml-2">
                  <h4 className="font-bold text-gray-900 text-base sm:text-md">Mr. Venkatesh
</h4>
                  <p className="text-cyan-600 text-xs sm:text-sm font-medium">Property Owner | Mayiladuthurai | Commercial Interior</p>
                </div>
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
Much appreciated work, delivered the plan layout and subsequent requirements with detail explanation in short interval. Understand our needs and suggested the optimum way to utilise the maximum space with their explicit ideas. Also, they're expertise in providing end to end solution for construction related queries and support. Committed towards to Customer Satisfaction.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="transform-space" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-40 left-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded-full opacity-20 floating-element"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full opacity-15 floating-element" style={{ animationDelay: '3s' }}></div>
          <GeometricPattern className="absolute top-20 right-40 w-24 h-24 sm:w-32 sm:h-32 text-cyan-200 opacity-30 floating-element"  />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-white/90 backdrop-blur-md rounded-full mb-6 sm:mb-8 reveal shadow-xs">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 reveal px-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700">Transform</span> Your Space?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto reveal leading-relaxed px-4">
              Contact us today to schedule a consultation and bring your vision to life with our expert design team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 max-w-7xl mx-auto">
            {/* Enhanced Contact Form */}
            <div className="reveal">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  Send us a Message
                </h3>
                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">

                </h3>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 text-green-700 rounded-xl sm:rounded-2xl border border-green-200 flex items-start sm:items-center text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Thank you for your message! We'll get back to you within 24 hours.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 text-red-700 rounded-xl sm:rounded-2xl border border-red-200 text-sm sm:text-base">
                    There was an error submitting your form. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2 sm:mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2 sm:mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="project-type" className="block text-sm font-bold text-gray-900 mb-2 sm:mb-3">
                      Project Type *
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      required
                      value={formData['project-type']}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                    >
                      <option value="">Select your project type</option>
                      <option value="Residential Interior">Residential Interior</option>
                      <option value="Commercial Interior">Commercial Interior</option>
                      <option value="Architectural Planning">Architectural Planning</option>
                      <option value="Elevation Design">Elevation Design</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Landscape Design">Landscape Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2 sm:mb-3">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, space dimensions, style preferences, budget range, timeline, or any specific requirements..."
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none text-sm sm:text-base"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-cyan-500 to-cyan-500 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl'
                        } shadow-xl flex items-center justify-center space-x-2 sm:space-x-3`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="reveal space-y-6 sm:space-y-8">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-6 md:p-5  border border-grey-700">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  Get in Touch
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 sm:w-5 sm:h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Our Location</h4>
                      <p className="text-gray-600 text-base sm:text-lg">Chennai, Tamil Nadu</p>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 sm:w-5 sm:h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Email Us</h4>
                      <a
                        href="mailto:enquiry@nithamdesigns.in"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors text-base sm:text-lg font-medium break-all"
                      >
                       enquiry@nithamdesigns.in
                      </a>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 sm:w-5 sm:h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Call Us</h4>
                      <p className="text-gray-600 text-base sm:text-lg font-medium">+91 6379939849</p>
                       <p className="text-gray-600 text-base sm:text-lg font-medium">+91 9381485740</p>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="w-6 h-6 sm:w-5 sm:h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Follow Us</h4>
                      <a
                        href="https://www.instagram.com/nitham_designs?igsh=MXRpNmNuYzJmZGJpcQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors text-base sm:text-lg font-medium"
                      >
                        @nithamdesigns
                      </a>

                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 sm:w-5 sm:h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Business Hours</h4>
                      <div className="space-y-1">
                        <p className="text-gray-600 text-sm sm:text-base">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600 text-sm sm:text-base">Sunday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-r from-cyan-100 to-cyan-100 p-6 sm:p-4 rounded-2xl sm:rounded-3xl border border-cyan-400">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 sm:w-6 sm:h-6 text-cyan-600 mr-2 sm:mr-3" />
                  What to Expect
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">24-hour response</p>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Free consultation</p>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Detailed discussion</p>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Transparent pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default Home;
