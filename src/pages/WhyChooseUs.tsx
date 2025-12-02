import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Users,
  Palette,
  Shield,
  RefreshCw,
  DollarSign,
  Star,
  ArrowRight,
  Target,
  Clock,
  Heart,
  Zap,
  ArrowUp,
} from "lucide-react";

const WhyChooseUs = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Your vision is our blueprint. We listen first, then design.",
      details:
        "We believe every project starts with understanding you. Our design process begins with deep conversations about your lifestyle, preferences, and dreams for your space.",
    },
    {
      icon: Palette,
      title: "Customized Solutions",
      description: "Designs tailored to your lifestyle and preferences.",
      details:
        "No two clients are the same, and neither are our designs. We create bespoke solutions that reflect your unique personality and functional needs.",
    },
    {
      icon: Star,
      title: "Modern Aesthetics",
      description: "Sleek, minimal designs for contemporary living.",
      details:
        "Our design philosophy embraces clean lines, functional beauty, and timeless appeal that will look fresh for years to come.",
    },
    {
      icon: Shield,
      title: "Complete Accountability",
      description: "We treat your project with the same care as our own.",
      details:
        "From initial concept to final handover, we take full responsibility for quality, timelines, and budget adherence.",
    },
    {
      icon: RefreshCw,
      title: "Iterative Design Process",
      description: "Revisions until you're satisfied with the plan.",
      details:
        "We refine and perfect designs through collaborative feedback, ensuring the final result exceeds your expectations.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Strategies",
      description: "Smart solutions that respect your budget.",
      details:
        "We maximize value through intelligent material selection, efficient space planning, and strategic design decisions.",
    },
  ];

  const additionalBenefits = [
    {
      icon: Target,
      title: "Transparent Communication",
      description: "You're kept in the loop at every stage, from concept to handover."
    },
    {
      icon: Heart,
      title: "Quality Materials",
      description: "We source premium materials that offer durability and aesthetic appeal."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our designers and craftsmen bring years of expertise to every project."
    },
    {
      icon: Shield,
      title: "Post-Completion Support",
      description: "We provide guidance and support even after project completion."
    },
    {
      icon: Zap,
      title: "Sustainable Practices",
      description: "We incorporate eco-friendly materials and energy-efficient solutions."
    },
    {
      icon: Clock,
      title: "Technology Integration",
      description: "We use latest design software and VR for better visualization."
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "We start with understanding your vision, requirements, and budget.",
    },
    {
      step: "2",
      title: "Concept Development",
      description:
        "Our team creates initial design concepts based on your brief.",
    },
    {
      step: "3",
      title: "Design Refinement",
      description:
        "We work together to refine the design until it's perfect.",
    },
    {
      step: "4",
      title: "Project Execution",
      description:
        "Our skilled team brings the design to life with precision.",
    },
    {
      step: "5",
      title: "Quality Assurance",
      description:
        "We ensure every detail meets our high standards before handover.",
    },
    {
      step: "6",
      title: "Final Handover",
      description:
        "We deliver your completed space, ready for you to enjoy.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-100 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down relative px-4">
            Our <span className="text-cyan-500">Edge</span>
            <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-cyan-500 rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto reveal fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
            What sets Nitham Designs apart in the world of architecture and interior design
          </p>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div
                    key={index}
                    className="service-detail-card reveal fade-in-left group p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-100 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                          {advantage.title}
                        </h3>
                        <p className="text-base sm:text-lg text-cyan-600 font-semibold mb-3 sm:mb-4">
                          {advantage.description}
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {advantage.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal fade-in-down px-4">
            Additional Benefits
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {additionalBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-cyan-500" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-black">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal fade-in-down px-4">
            Our Proven Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {processSteps.map((process, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 reveal fade-in-left bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 reveal fade-in-down px-4">
            Experience the Nitham Designs Difference
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 mb-6 sm:mb-8 reveal fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
            Ready to work with a team that puts your vision first?
          </p>
          <Link to="/#transform-space" className="reveal pop-in inline-block" style={{ animationDelay: "0.4s" }}>
            <button className="bg-white text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Project Today
            </button>
          </Link>
        </div>
      </section>

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
        
        @media (min-width: 640px) {
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
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
        
        @media (min-width: 640px) {
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
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
        
        @media (min-width: 640px) {
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
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
        
        @media (min-width: 640px) {
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .reveal {
          opacity: 0;
        }
        
        .animate-in {
          animation-fill-mode: both;
          animation-duration: 0.8s;
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
        
        .fade-in.animate-in {
          animation-name: fadeIn;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Ensure smooth scrolling on mobile */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent horizontal scrolling */
        body {
          overflow-x: hidden;
        }
      `}</style>

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

export default WhyChooseUs;