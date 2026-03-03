import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Palette,
  Home as HomeIcon,
  Hammer,
  RefreshCw,
  Trees,
  ArrowRight,
  ArrowUp,
   Sofa,          // Residential Interior
  Briefcase
} from "lucide-react";

const Services = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // ✅ Scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Animations observer
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Architectural Planning",
      description:
        "Spaces built to endure, flow, and inspire with thoughtful layouts that optimize space and functionality.",
      link: "/services/architectural-planning",
      features: [
        "Site analysis",
        "Floor plans",
        "3D visualization",
        "Municipal support",
      ],
    },
    {
      icon: HomeIcon,
      title: "Elevation Design",
      description:
        "First impressions that stand the test of time with striking facades that blend aesthetics with structural integrity.",
      link: "/services/elevation-design",
      features: [
        "3D renderings",
        "Material selection",
        "Facade lighting",
        "Weather-conscious design",
      ],
    },
    {
      icon: Palette,
      title: "Interior Design",
      description:
        "Where function meets aesthetic in every detail, creating tailored interiors that reflect your personality.",
      link: "/services/interior-design",
      features: [
        "Space planning",
        "Custom furniture",
        "Material curation",
        "Lighting design",
      ],
    },

    {
      icon: Sofa,
      title: "Residential Interior",
      description:
        "Comfort crafted with character, creating warm and functional homes tailored to your lifestyle and everyday living.",
      link: "/services/residential-interior",
      features: [
        "Ambience design",
        "Custom wardrobes",
        "Material curation",
        "Furniture & decor styling",
      ],
    },


    {
      icon: Briefcase,
      title: "Commercial Interior",
      description:
        "Purpose-driven environments designed to enhance productivity, brand identity, and user experience across every workspace.",
      link: "/services/commercial-interior",
      features: [
        "Workspace planning",
        "Ergonomic layouts",
        "Acoustics planning",
        "Brand-integrated design",
      ],
    },


    {
      icon: Hammer,
      title: "Interior Execution",
      description:
        "Designs brought to life with precision through meticulous implementation ensuring design fidelity.",
      link: "/services/interior-execution",
      features: [
        "Quality control",
        "Vendor coordination",
        "Site supervision",
        "Timely delivery",
      ],
    },
    {
      icon: RefreshCw,
      title: "Renovation",
      description:
        "Transform the old into timeless new, breathing fresh life into existing spaces with modern upgrades.",
      link: "/services/renovation",
      features: [
        "Structural assessment",
        "Modern upgrades",
        "Value enhancement",
        "Minimal disruption",
      ],
    },
    {
      icon: Trees,
      title: "Landscape Design",
      description:
        "Designing outdoor spaces that breathe with you, creating calming environments that blend with architecture.",
      link: "/services/landscape-design",
      features: [
        "Climate-smart plants",
        "Water features",
        "Hardscape design",
        "Maintenance planning",
      ],
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
    <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="120" y="120" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="160" cy="40" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
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
        WHAT WE OFFER
      </span>
    </div>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down relative">
      Our{" "}
      <span className="relative inline-block text-cyan-500">
        Services
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-cyan-500 rounded-full"></span>
      </span>
    </h1>

    <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4 reveal fade-in-up font-light" style={{ animationDelay: "0.2s" }}>
      Comprehensive architectural and interior design solutions tailored
      to your needs
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

    .reveal {
      opacity: 0;
    }

    .fade-in-down {
      animation: fadeInDown 0.8s ease-out forwards;
    }

    .fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
  `}</style>
</section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-detail-card reveal fade-in-left group p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cyan-100 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 group-hover:scale-105">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 bg-cyan-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={service.link}
                        className="inline-flex items-center space-x-2 text-cyan-500 font-semibold hover:text-cyan-600 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform text-sm sm:text-base justify-center sm:justify-start"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 reveal fade-in-down">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
            Let's discuss your vision and create something extraordinary
            together
          </p>
          <Link to="/#transform-space" className="reveal pop-in" style={{ animationDelay: "0.4s" }}>
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Get Started Today
            </button>
          </Link>
        </div>
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

        /* Custom breakpoint for very small screens */
        @media (min-width: 475px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
