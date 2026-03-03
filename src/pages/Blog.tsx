import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PenTool,
  TrendingUp,
  Expand,
  Leaf,
  Palette,
  DollarSign,
  Lightbulb,
  Instagram,
  Mail,
  BookOpen,
  ArrowUp,
} from "lucide-react";

const Blog = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // ✅ Show button on scroll
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

  // ✅ Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Lower threshold for mobile
      rootMargin: "0px 0px -30px 0px", // Adjusted for mobile
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

  const upcomingTopics = [
    {
      icon: TrendingUp,
      title: "Modern Home Design Trends 2026",
      description: "Explore the latest trends in contemporary home design and how to incorporate them into your space.",
    },
    {
      icon: Expand,
      title: "Maximizing Small Spaces",
      description: "Smart design solutions for making the most of compact homes and apartments.",
    },
    {
      icon: Leaf,
      title: "Sustainable Design Practices",
      description: "How to create beautiful spaces while being environmentally conscious.",
    },
    {
      icon: Palette,
      title: "Color Psychology in Interior Design",
      description: "Understanding how colors affect mood and choosing the right palette for your home.",
    },
    {
      icon: DollarSign,
      title: "Budget-Friendly Design Tips",
      description: "Achieving stunning results without breaking the bank.",
    },
    {
      icon: Lightbulb,
      title: "The Importance of Lighting Design",
      description: "How proper lighting can transform any space and create the perfect ambiance.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
   <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-cyan-50 to-cyan-100">
  {/* Architectural Grid Background Overlay */}
  <div className="absolute inset-0 opacity-10" style={{ zIndex: 1 }}>
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(to right, #0891b2 1px, transparent 1px),
        linear-gradient(to bottom, #0891b2 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px'
    }} />
  </div>

  {/* Abstract Architectural Lines - Cyan Theme */}
  <svg className="absolute top-0 right-0 w-96 h-96 text-cyan-200/30" style={{ zIndex: 1 }} viewBox="0 0 200 200" fill="none">
    <path d="M0 100 L200 100 M100 0 L100 200 M50 0 L50 200 M150 0 L150 200 M0 50 L200 50 M0 150 L200 150"
      stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"/>


  </svg>

  {/* Three.js Canvas Background - Your existing code */}
  <canvas
    ref={(canvas) => {
      if (!canvas || canvas._threeInit) return;
      canvas._threeInit = true;

      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = () => {
        const THREE = window.THREE;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.parentElement.offsetWidth / canvas.parentElement.offsetHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create flashing geometric meshes
        const geometries = [
          new THREE.OctahedronGeometry(0.15),
          new THREE.TetrahedronGeometry(0.15),
          new THREE.IcosahedronGeometry(0.12),
        ];

        const particles = [];
        for (let i = 0; i < 10; i++) {
          const geo = geometries[Math.floor(Math.random() * geometries.length)];
          const mat = new THREE.MeshBasicMaterial({
            color: [0x06b6d4, 0x0891b2, 0x22d3ee, 0xa5f3fc][Math.floor(Math.random() * 4)],
            wireframe: Math.random() > 0.5,
            transparent: true,
            opacity: Math.random() * 0.6 + 0.1,
          });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(
            (Math.random() - 0.5) * 16,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6
          );
          mesh.userData = {
            rotSpeed: { x: (Math.random() - 0.5) * 0.03, y: (Math.random() - 0.5) * 0.03 },
            flashSpeed: Math.random() * 0.05 + 0.01,
            flashOffset: Math.random() * Math.PI * 2,
            driftX: (Math.random() - 0.5) * 0.005,
            driftY: (Math.random() - 0.5) * 0.003,
          };
          scene.add(mesh);
          particles.push(mesh);
        }

        let t = 0;
        const animate = () => {
          requestAnimationFrame(animate);
          t += 1;
          particles.forEach((m) => {
            m.rotation.x += m.userData.rotSpeed.x;
            m.rotation.y += m.userData.rotSpeed.y;
            m.position.x += m.userData.driftX;
            m.position.y += m.userData.driftY;
            // Wrap around edges
            if (Math.abs(m.position.x) > 9) m.userData.driftX *= -1;
            if (Math.abs(m.position.y) > 5) m.userData.driftY *= -1;
            // Flash opacity
            m.material.opacity = 0.1 + 0.55 * Math.abs(Math.sin(t * m.userData.flashSpeed + m.userData.flashOffset));
          });
          renderer.render(scene, camera);
        };
        animate();

        const ro = new ResizeObserver(() => {
          const w = canvas.parentElement.offsetWidth;
          const h = canvas.parentElement.offsetHeight;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        });
        ro.observe(canvas.parentElement);
      };
      document.head.appendChild(script);
    }}
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
  />

  {/* Content */}
  <div className="container mx-auto text-center relative z-20">
    {/* Architectural Badge */}
    <div className="mb-6 reveal fade-in-down">
      <span className="inline-block px-4 py-2 bg-cyan-200/50 backdrop-blur-sm rounded-full text-cyan-700 text-sm font-medium tracking-wide">
        DESIGN INSIGHTS
      </span>
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down relative tracking-tight px-4">
      Design{" "}
      <span className="relative inline-block text-cyan-500">
        Insights
        {/* Enhanced underline with subtle animation */}
        <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-cyan-500 rounded-full shadow-sm shadow-cyan-500/30"></span>
        <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-cyan-500 rounded-full opacity-50 animate-pulse-slow"></span>
      </span>
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4 reveal fade-in-up leading-relaxed font-light" style={{ animationDelay: "0.2s" }}>
      Expert tips, trends, and inspiration for your next design project
    </p>
  </div>

  {/* Bottom Accent Line */}
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
       style={{ zIndex: 15 }} />

  {/* Add animation styles */}
  <style jsx>{`
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

    @keyframes pulseSlow {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.8;
      }
    }

    .reveal {
      opacity: 0;
    }

    .fade-in-down {
      animation: fadeInDown 0.8s ease-out forwards;
    }

    .fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    .animate-pulse-slow {
      animation: pulseSlow 3s ease-in-out infinite;
    }
  `}</style>
</section>

      {/* Coming Soon Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl reveal pop-in">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group hover:bg-cyan-500 transition-all duration-300">
                <PenTool className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down">
                Blog Coming Soon
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
                We're preparing valuable content about architecture, interior
                design, and home improvement. Our blog will feature expert
                insights, design trends, project case studies, and practical
                tips for creating beautiful spaces.
              </p>
              <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 reveal fade-in-up" style={{ animationDelay: "0.3s" }}>
                Stay tuned for articles that will help you make informed
                decisions about your design projects.
              </p>
              <Link to="/#transform-space" className="reveal pop-in" style={{ animationDelay: "0.4s" }}>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  Get Design Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Topics */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-8 sm:mb-12 reveal fade-in-down">
            Upcoming Blog Topics
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {upcomingTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 reveal fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-cyan-100 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-cyan-500 transition-colors duration-300 mx-auto">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 text-center">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base text-center">
                      {topic.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
              Be the first to know when we publish new design insights and tips.
            </p>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 reveal pop-in">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-500" />
              </div>
              <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
                Newsletter signup coming soon. In the meantime, follow us on
                social media for design inspiration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 sm:mt-8">
                <a
                  href="https://instagram.com/nithamdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-cyan-500 hover:text-cyan-600 transition-colors duration-300 font-semibold text-sm sm:text-base"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Instagram</span>
                </a>
                <Link
                  to="/#transform-space"
                  className="flex items-center space-x-2 text-cyan-500 hover:text-cyan-600 transition-colors duration-300 font-semibold text-sm sm:text-base"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-100 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down">
            Need Design Advice Now?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
            Schedule a consultation with our experts for personalized design guidance
          </p>
          <Link to="/#transform-space" className="reveal pop-in" style={{ animationDelay: "0.4s" }}>
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ Scroll to Top Button - Mobile Responsive */}
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
            transform: translate(-10px, 15px) scale(0.9);
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
      `}</style>
    </div>
  );
};

export default Blog;
