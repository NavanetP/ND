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
    { image: q1, caption: "Modern living spaces designed for contemporary lifestyles" },
    { image: q3, caption: "Architectural excellence with thoughtful design details" },
    { image: q4, caption: "Elegant interiors that blend comfort with sophistication" },
    { image: q5, caption: "Seamless integration of indoor and outdoor living spaces" },
  ];

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger so they don't all fire at once (avoids single-frame jank spike)
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, i * 60);
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
      setShowScrollButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/nithamdesigns@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'New inquiry from Nitham Designs website',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      if (data.success === 'true') {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', 'project-type': '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Geometric SVG Component
  const GeometricPattern = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const stats = [
    { icon: Users, number: "20+", label: "Happy Clients" },
    { icon: Building2, number: "50+", label: "Projects Completed" },
    { icon: Award, number: "3+", label: "Years Experience" },
  ];

  return (
    <div className="relative overflow-x-hidden">
      <style>{`

      /* Image protection */
img {
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
}
.img-protected {
  position: relative;
  overflow: hidden;
}
.img-protected::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}


        /* ── Reveal animation ── */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          will-change: transform, opacity;
        }
        @media (min-width: 640px) {
          .reveal { transform: translateY(30px); }
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
          will-change: auto;
        }

        /* ── Service cards ── */
        .service-card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          border-left: 26px solid #06b6d4;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        @media (min-width: 640px) { .service-card { padding: 2rem; } }
        .service-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.14); }

        /* ── Floating orbs — GPU-isolated ── */
        .floating-element {
          will-change: transform;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-20px); }
        }

        /* ── Pattern overlay ── */
        .pattern-overlay {
          background-image:
            linear-gradient(45deg, transparent 35%, rgba(6,182,212,0.05) 35%, rgba(6,182,212,0.05) 65%, transparent 65%),
            linear-gradient(-45deg, transparent 35%, rgba(6,182,212,0.05) 35%, rgba(6,182,212,0.05) 65%, transparent 65%);
          background-size: 80px 80px;
        }

        /* ── Hero gradient ── */
        .hero-gradient {
          background: linear-gradient(135deg, #22d3ee 0%, #a5f3fc 25%, #a5f3fc 50%, #67e8f9 75%, #22d3ee 100%);
        }

        /* ── Contact form inputs — CRITICAL: no backdrop-blur, targeted transitions ── */
        .contact-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          background: #fff;           /* solid — no bg-opacity compositing */
          font-size: 0.875rem;
          color: #111827;
          /* Only animate border-color and box-shadow — NOT all properties */
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }
        @media (min-width: 640px) {
          .contact-input { padding: 1rem 1.5rem; font-size: 1rem; }
        }
        .contact-input:focus {
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px rgba(6,182,212,0.15);
        }

        /* ── Contact icon hover — opacity only (cheapest possible effect) ── */
        .contact-icon-wrap {
          width: 3rem; height: 3rem;
          background: linear-gradient(135deg, #cffafe, #a5f3fc);
          border-radius: 0.75rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: opacity 0.2s ease;   /* opacity is free — no layout/paint */
        }
        .contact-icon-wrap:hover { opacity: 0.8; }

        /* ── Submit button — no scale, color shift only ── */
        .submit-btn {
          width: 100%;
          background: #06b6d4;
          color: #fff;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: background 0.2s ease;   /* color only — no layout reflow */
          box-shadow: 0 4px 14px rgba(6,182,212,0.35);
        }
        @media (min-width: 640px) { .submit-btn { padding: 1.25rem 1.5rem; font-size: 1.125rem; } }
        .submit-btn:hover:not(:disabled) { background: #0891b2; }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}</style>

      {/* ── Image Slider ── */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" onContextMenu={(e) => e.preventDefault()}
  onDragStart={(e) => e.preventDefault()} />
              <div className="absolute bottom-16 sm:bottom-24 left-0 right-0 flex justify-center">
                <div className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(56,189,248,0.4)]">
                  <p className="text-[11px] sm:text-sm md:text-base font-semibold tracking-wide drop-shadow-md">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-4 transition-colors duration-200 shadow-xl group" aria-label="Previous slide">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-cyan-600 transition-colors" />
        </button>
        <button onClick={nextSlide} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-4 transition-colors duration-200 shadow-xl group" aria-label="Next slide">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:text-cyan-600 transition-colors" />
        </button>

        <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${index === currentSlide
                ? "w-6 sm:w-8 h-2 sm:h-3 bg-cyan-500 rounded-full"
                : "w-2 sm:w-3 h-2 sm:h-3 bg-white/60 hover:bg-white/80 rounded-full"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── Hero Section ── */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 hero-gradient pattern-overlay">
        <div className="container mx-auto text-center relative z-10">
          <div className="absolute top-4 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-cyan-200/20 rounded-full floating-element hidden sm:block" />
          <div className="absolute top-24 right-20 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-300/30 rounded-full floating-element hidden sm:block" style={{ animationDelay: '3s' }} />

          <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-white/80 rounded-full mb-8 sm:mb-10 reveal">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mr-2" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Premium Architectural & Interior Design</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-10 sm:mb-12 reveal leading-normal px-4 min-h-[1.2em]">
            Designing Spaces That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 pb-1">Endure</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 reveal font-light px-4 leading-relaxed mt-2">
            Architectural and Interior Design Solutions
          </p>

          <div className="max-w-5xl mx-auto mb-8 sm:mb-12 px-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed reveal">
              At Nitham Designs, we believe that great design is both timeless and functional. Our name, derived from the Tamil word 'நித்தம்' meaning 'eternal' or 'daily', reflects our commitment to creating spaces that serve everyday needs while standing the test of time.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto reveal px-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/80 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 relative">
        <div className="absolute inset-0 pattern-overlay opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-cyan-100 rounded-full mb-4 sm:mb-6 reveal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 mr-2">
                <path d="M12 3l9 18H3L12 3z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-cyan-700">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 reveal px-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { to: "/services/architectural-planning", icon: Building2, title: "Architectural Planning", desc: "Thoughtful layouts that optimize space, light, and functionality for modern living." },
              { to: "/services/elevation-design", icon: HomeIcon, title: "Elevation Designing", desc: "Striking facades that blend contemporary aesthetics with structural integrity." },
              { to: "/services/interior-design", icon: Palette, title: "Interior Designing", desc: "Tailored interiors that reflect your personality, creating spaces you love to be in." },
              { to: "/services/interior-execution", icon: Hammer, title: "Interior Execution", desc: "Meticulous, quality-controlled implementation ensuring fidelity to the design." },
              { to: "/services/renovation", icon: RefreshCw, title: "Renovation", desc: "Transforming existing spaces into renewed, functional, and beautiful experiences." },
              { to: "/services/landscape-design", icon: Trees, title: "Landscape Designing", desc: "Create calming outdoor environments that blend seamlessly with your architecture." },
            ].map(({ to, icon: Icon, title, desc }) => (
              <Link key={to} to={to} className="service-card reveal group">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center transition-opacity duration-200 group-hover:opacity-80">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{desc}</p>
                <div className="flex items-center text-cyan-600 font-semibold text-sm sm:text-base">Learn More</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Trust Us ── */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
          <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-100 rounded-full opacity-50 floating-element" />
          <div className="absolute bottom-40 right-20 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-200 rounded-full opacity-40 floating-element" style={{ animationDelay: '2s' }} />
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
                { title: "Client-Centric Approach", desc: "Your vision is our blueprint. We listen first, then design." },
                { title: "Customized Solutions", desc: "Designs tailored to your lifestyle and preferences." },
                { title: "Modern Aesthetics", desc: "Sleek, minimal designs for contemporary living." },
                { title: "Complete Accountability", desc: "We treat your project with the same care as our own." },
                { title: "Iterative Design Process", desc: "Revisions until you're satisfied with the plan." },
                { title: "Cost-Effective Strategies", desc: "Smart solutions that respect your budget." },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6 reveal group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-white rounded-full mb-4 sm:mb-6 reveal shadow-sm">
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
            {[
              { num: 1, name: "Mr. Vijayakumar", role: "Property Owner | Namakkal | Residential Interior", text: "Nitham Designs recently completed the interior work for our home, and I must say—they did a phenomenal job! They transformed our ideas into a beautiful and functional reality. I truly appreciate the effort they put into every detail of the project." },
              { num: 2, name: "Mr. Balaji", role: "Property Owner | Srivilliputhur | Architectural Planning cum Residential Interior", text: "Nitham designs home elevation designer and architect exceeded my expectations with their professionalism and attention to detail. Their innovative designs greatly enhanced the aesthetic appeal of my residence. I highly recommend their services to anyone seeking quality and excellence." },
              { num: 3, name: "Mr. Santharam", role: "Endosys Technologies | Chennai | Commercial Interior", text: "Great design and sincere follow up with the workers to ensure good quality." },
              { num: 4, name: "Mr. Venkatesh", role: "Property Owner | Mayiladuthurai | Commercial Interior", text: "Much appreciated work, delivered the plan layout and subsequent requirements with detail explanation in short interval. Understand our needs and suggested the optimum way to utilise the maximum space with their explicit ideas. Also, they're expertise in providing end to end solution for construction related queries and support. Committed towards to Customer Satisfaction." },
            ].map(({ num, name, role, text }) => (
              <div key={num} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 reveal border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-md flex-shrink-0">
                    {num}
                  </div>
                  <div className="ml-2">
                    <h4 className="font-bold text-gray-900 text-base">{name}</h4>
                    <p className="text-cyan-600 text-xs font-medium">{role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          CONTACT SECTION — fully optimised
          Changes vs original:
          • Orbs: will-change:transform on all 3, pointer-events:none
          • Header pill: solid bg-white (was backdrop-blur)
          • Form card: solid bg-white (was bg-white/90 backdrop-blur-lg)
          • Inputs: .contact-input class — solid bg, targeted transition
          • Submit: .submit-btn — no scale, color-only transition
          • Info card: solid bg-white (was bg-white/90)
          • Icon hovers: opacity only (not scale)
          • Removed all transition-all from contact area
      ──────────────────────────────────────────────────── */}
      <section id="transform-space" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-cyan-50 relative overflow-hidden">
        {/* Background orbs — GPU-isolated, pointer-events off so they never block clicks */}
        <div className="absolute inset-0 hidden sm:block pointer-events-none" aria-hidden="true">
          <div className="absolute top-40 left-20 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-200 rounded-full opacity-20 floating-element" style={{ willChange: 'transform' }} />
          <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-300 rounded-full opacity-15 floating-element" style={{ animationDelay: '3s', willChange: 'transform' }} />
          <GeometricPattern className="absolute top-20 right-40 w-24 h-24 sm:w-32 sm:h-32 text-cyan-200 opacity-30 floating-element" style={{ willChange: 'transform' }} />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-white rounded-full mb-6 sm:mb-8 reveal shadow-sm">
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

            {/* ── Contact Form ── */}
            <div className="reveal">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  Send us a Message
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center text-sm sm:text-base">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm sm:text-base">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                      <input
                        type="text" id="name" name="name" required
                        value={formData.name} onChange={handleChange}
                        className="contact-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                      <input
                        type="tel" id="phone" name="phone" required
                        value={formData.phone} onChange={handleChange}
                        className="contact-input"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="contact-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="project-type" className="block text-sm font-bold text-gray-900 mb-2">Project Type *</label>
                    <select
                      id="project-type" name="project-type" required
                      value={formData['project-type']} onChange={handleChange}
                      className="contact-input"
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
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Project Details</label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={formData.message} onChange={handleChange}
                      className="contact-input resize-none"
                      placeholder="Tell us about your project, space dimensions, style preferences, budget range, timeline, or any specific requirements..."
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* ── Contact Info ── */}
            <div className="reveal space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  Get in Touch
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  {[
                    {
                      icon: MapPin,
                      title: "Our Location",
                      content: <p className="text-gray-600 text-base sm:text-lg">Chennai, Tamil Nadu</p>
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: (
                        <a href="mailto:enquiry@nithamdesigns.in" className="text-cyan-600 hover:text-cyan-700 text-base sm:text-lg font-medium break-all">
                          enquiry@nithamdesigns.in
                        </a>
                      )
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: (
                        <>
                          <p className="text-gray-600 text-base sm:text-lg font-medium">+91 6379939849</p>
                          <p className="text-gray-600 text-base sm:text-lg font-medium">+91 9381485740</p>
                        </>
                      )
                    },
                    {
                      icon: Instagram,
                      title: "Follow Us",
                      content: (
                        <a href="https://www.instagram.com/nitham_designs?igsh=MXRpNmNuYzJmZGJpcQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 text-base sm:text-lg font-medium">
                          @nithamdesigns
                        </a>
                      )
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: (
                        <>
                          <p className="text-gray-600 text-sm sm:text-base">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                          <p className="text-gray-600 text-sm sm:text-base">Sunday: By Appointment Only</p>
                        </>
                      )
                    },
                  ].map(({ icon: Icon, title, content }) => (
                    <div key={title} className="flex items-start space-x-4 sm:space-x-6">
                      {/* opacity-only hover — no scale, no layout reflow */}
                      <div className="contact-icon-wrap">
                        <Icon className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">{title}</h4>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-cyan-100 p-6 sm:p-6 rounded-2xl sm:rounded-3xl border border-cyan-300">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-600 mr-2 sm:mr-3" />
                  What to Expect
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {["24-hour response", "Free consultation", "Detailed discussion", "Transparent pricing"].map((item) => (
                    <div key={item} className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                      <p className="text-gray-700 font-medium text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scroll to Top ── */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-colors duration-200 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default Home;
