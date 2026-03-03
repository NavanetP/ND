import { ArrowUp, Award, CheckCircle, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";
import yyy from "../PHOTO-2026-02-25-17-49-35.jpg";

const About = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Enhanced Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
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

    // Scroll listener for button visibility
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Founder Section */}

     <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">

      {/* LEFT SIDE: TEXT + CARDS */}
      <div className="reveal fade-in-left order-2 lg:order-1 space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black relative">
          Meet Our Founder
          <span className="absolute -bottom-2 left-0 w-16 sm:w-20 h-1 bg-cyan-500 rounded-full"></span>
        </h2>

        <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed">
          Ar. Sujitha Meenakshi, founder of Nitham Designs in Chennai, is an architect who approaches design with intuition, clarity, and purpose. A graduate of Anna University's School of Architecture and Planning (2022), she believes architecture goes beyond buildings — it's about creating meaningful, livable spaces that reflect both beauty and function.
        </p>

        <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed">
          Her work focuses on delivering personalized architectural and interior design solutions that align with your lifestyle, values, and everyday needs. With a strong foundation in sustainable and conscious design, she ensures that each space feels intentional and timeless.
        </p>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
          <div className="bg-cyan-50 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
              Leadership
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Guiding innovative design solutions with expertise and vision.
            </p>
          </div>

          <div className="bg-cyan-50 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
              Excellence
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Committed to delivering exceptional results in every project.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE */}
      <div className="reveal fade-in-right order-1 lg:order-2 mb-8 lg:mb-0">
        <img
  src={yyy}
  alt="Founder"
  className="w-full h-[560px] sm:h-[120px] lg:h-full object-cover rounded-2xl shadow-lg"
/>
      </div>

    </div>
  </div>
</section>

      {/* Process Section */}
    {/* Process Section */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12 sm:mb-16 reveal fade-in-down relative">
      Our Process
    </h2>

    <div className="relative">
      {/* Main connecting line (desktop) */}
      <div className="hidden lg:block absolute top-12 left-16 right-16 h-1 bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-100 -z-10"></div>

      {/* Tablet connecting lines */}
      <div className="hidden sm:block lg:hidden">
        <div className="absolute top-12 left-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-100 to-cyan-200 -z-10"></div>
        <div className="absolute top-12 left-3/4 w-1/2 h-1 bg-gradient-to-r from-cyan-200 to-cyan-100 -z-10"></div>
        <div className="absolute top-12 left-1/2 h-full w-1 bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-100 -z-10 transform -translate-x-1/2"></div>
      </div>

      {/* Mobile vertical line */}
      <div className="sm:hidden absolute top-12 left-1/2 h-full w-1 bg-gradient-to-b from-cyan-100 via-cyan-200 to-cyan-100 -z-10 transform -translate-x-1/2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {[
          { number: 1, title: "Consultation", desc: "Understanding your needs and aspirations." },
          { number: 2, title: "Design Development", desc: "Crafting concepts that align with your vision." },
          { number: 3, title: "Execution", desc: "Bringing designs to life with precision and care." },
          { number: 4, title: "Handover", desc: "Delivering spaces that exceed expectations." }
        ].map((step, index) => (
          <div
            key={index}
            className="relative group"
            data-step={index + 1}
          >
            {/* Step connector lines */}
            <div className="absolute top-6 -left-8 sm:-left-6 lg:-left-6 w-8 sm:w-6 lg:w-6 h-1 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div>

            {/* Forward connection line (desktop) */}
            {index < 3 && (
              <div className="hidden lg:block absolute top-6 -right-6 w-6 h-1 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 -z-10">
                <div className="w-full h-full bg-gradient-to-l from-cyan-400 to-transparent"></div>
              </div>
            )}

            {/* Forward connection line (tablet - horizontal) */}
            {index < 2 && index % 2 === 0 && (
              <div className="hidden sm:block lg:hidden absolute top-6 -right-6 w-6 h-1 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 -z-10">
                <div className="w-full h-full bg-gradient-to-l from-cyan-400 to-transparent"></div>
              </div>
            )}

            {/* Forward connection line (tablet - vertical) */}
            {index >= 2 && (
              <div className="hidden sm:block lg:hidden absolute -top-8 left-1/2 w-1 h-8 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 -z-10 transform -translate-x-1/2">
                <div className="w-full h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
              </div>
            )}

            {/* Mobile connection lines */}
            {index < 3 && (
              <div className="sm:hidden absolute -bottom-8 left-1/2 w-1 h-8 bg-cyan-100 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 -z-10 transform -translate-x-1/2">
                <div className="w-full h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
              </div>
            )}

            {/* Step content */}
            <div className="text-center reveal fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden border-4 border-cyan-100 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-xl group-hover:shadow-cyan-100/50">
                  <span className="text-xl sm:text-2xl font-bold text-cyan-600 transition-all duration-500 group-hover:text-cyan-700 group-hover:scale-110">
                    {step.number}
                  </span>

                  {/* Animated ring on hover */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent opacity-0 group-hover:opacity-100 group-hover:border-cyan-300/30 transition-all duration-500 group-hover:animate-ping"></div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Active connection indicator */}
                <div className="absolute top-1/2 left-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-sm"></div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 transition-all duration-300 group-hover:text-cyan-700">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Commitment Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 reveal pop-in relative overflow-hidden shadow-lg">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-cyan"></div>
            </div>
            <div className="absolute -right-6 -top-6 sm:-right-10 sm:-top-10 w-24 h-24 sm:w-40 sm:h-40 bg-cyan-100 rounded-full opacity-20"></div>
            <div className="absolute -left-6 -bottom-6 sm:-left-10 sm:-bottom-10 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-200 rounded-full opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-6 sm:mb-8">
                Our Commitment
              </h2>
              <p className="text-base sm:text-lg text-gray-700 text-justify max-w-3xl mx-auto leading-relaxed">
                We are dedicated to delivering designs that are not only
                aesthetically pleasing but also enhance the daily lives of those who
                inhabit them. Our team stays abreast of the latest trends and
                technologies to provide innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}



      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
  {/* Architectural blueprint background */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: `
      linear-gradient(#0891b2 1px, transparent 1px),
      linear-gradient(90deg, #0891b2 1px, transparent 1px)
    `,
    backgroundSize: '30px 30px'
  }}></div>

  {/* Floating cyan architectural elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-20 -right-20 w-64 h-64 border-8 border-cyan-200/20 rounded-full"></div>
    <div className="absolute -bottom-20 -left-20 w-80 h-80 border-8 border-cyan-200/20 rounded-full"></div>

    {/* Vertical lines */}
    <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent"></div>
    <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent"></div>
  </div>

  <div className="container mx-auto max-w-6xl relative z-10">
    {/* Section header with architectural line */}
    <div className="text-center mb-12 relative">
      <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium tracking-wider mb-4">
        OUR IMPACT
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Numbers That Speak
      </h2>
      <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {[
        { icon: Users, value: "20+", label: "Happy Clients", desc: "Across multiple industries" },
        { icon: Award, value: "50+", label: "Projects Completed", desc: "Delivered with excellence" },
        { icon: Clock, value: "3+", label: "Years Experience", desc: "Of design innovation" }
      ].map((stat, index) => (
        <div
          key={index}
          className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 reveal fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-8 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-4 h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30 rounded-br-2xl"></div>

          {/* Icon with architectural frame */}
          <div className="relative mb-6 inline-block">
            <div className="w-15 h-20 bg-gradient-to-br from-cyan-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto transform rotate-45 group-hover:rotate-0 transition-all duration-500">
              <div className="transform -rotate-45 group-hover:rotate-0 transition-all duration-500">
                <stat.icon className="w-10 h-8 text-white" />
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl animate-ping-slow opacity-0 group-hover:opacity-100"></div>
          </div>

          {/* Content */}
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 font-mono">{stat.value}</h3>
          <p className="text-lg font-semibold text-cyan-600 mb-2">{stat.label}</p>
          <p className="text-gray-500 text-sm">{stat.desc}</p>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-cyan-500 transition-all duration-300"></div>
        </div>
      ))}
    </div>

    {/* Background architectural accent */}

  </div>

  {/* Add animation styles */}
  <style jsx>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pingSlow {
      75%, 100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }

    .reveal {
      opacity: 0;
    }

    .fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }

    .animate-ping-slow {
      animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1);
    }
  `}</style>
</section>



      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
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

        .fade-in.animate-in {
          animation-name: fadeIn;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
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

        .bg-grid-cyan {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%2306b6d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
