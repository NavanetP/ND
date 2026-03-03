import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Home, Building2, RefreshCw, DraftingCompass, Trees,
  ArrowUp, X, ChevronLeft, ChevronRight, ZoomIn,
} from "lucide-react";

// Type declarations for Three.js and custom properties
declare global {
  interface HTMLCanvasElement {
    _threeInit?: boolean;
  }
  interface Window {
    THREE?: any;
  }
}

// ╔══════════════════════════════════════════════════════════════════════╗
//
//  Each PROJECT has its own import block below.
//  Images in one project block NEVER appear in another project.
// ╚══════════════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────────────
//  C1 · Architectural Planning
// ─────────────────────────────────────────────────────────────────────

//  C1 · Project 1 — Lake View Residence  (1 image)
import p1_1_img1 from "../Architectural planning/Maraimalainagar residence/Untitled-1.png";

//  C1 · Project 2 — Urban Apartment Planning  (1 image)
import p1_2_img1 from "../Architectural planning/Mr.Balaji Residence/Balaji residence second floor plan-Model.jpg";


import p1_2_img11 from "../Commercial Interior Design/Endosys/01.png";
import p1 from "../Commercial Interior Design/Endosys/02.png";
import p11 from "../Commercial Interior Design/Endosys/04.png";
import p111 from "../Commercial Interior Design/Endosys/11.png";
import p1111 from "../Commercial Interior Design/Endosys/19.png";



import aa from "../Commercial Interior Design/Multispeciality Clinic/01.jpg";
import p1_211 from "../Commercial Interior Design/Multispeciality Clinic/02.jpg";
import p1_2111 from "../Commercial Interior Design/Multispeciality Clinic/03.jpg";
import p1_21111 from "../Commercial Interior Design/Multispeciality Clinic/09.jpg";
import p1_211111 from "../Commercial Interior Design/Multispeciality Clinic/10.jpg";


import pp1_21 from "../Commercial Interior Design/Sanjana Bridal boutique/01.jpg";
import ppp1_211 from "../Commercial Interior Design/Sanjana Bridal boutique/02.jpg";
import pppp1_2111 from "../Commercial Interior Design/Sanjana Bridal boutique/03.jpg";
import ppppp1_21111 from "../Commercial Interior Design/Sanjana Bridal boutique/04.jpg";
import pppppp1_211111 from "../Commercial Interior Design/Sanjana Bridal boutique/05.jpg";

import b from "../Elevation/Dinesh reisdence/3.jpg";
import bb from "../Elevation/Dinesh reisdence/4.png";

import c from "../Elevation/Mr.Sathish residence/01.jpg";
import cc from "../Elevation/Mr.Sathish residence/02.jpg";

import d from "../Elevation/Mr.Sundarapandiyan residence/01.jpg";

import dd from "../Elevation/Mr.Vijayakumar/01.jpg";
import ddd from "../Elevation/Mr.Vijayakumar/02.jpg";

import r from "../Elevation/Pallikaranai residence/01.jpg";
import rr from "../Elevation/Pallikaranai residence/02.jpg";
import rrr from "../Elevation/Pallikaranai residence/03.jpg";
import rrrr from "../Elevation/Pallikaranai residence/06.jpg";
import rrrrr from "../Elevation/Pallikaranai residence/08.jpg";




import p from "../Renovation/Mr.Jaishankar_Terrace renovation/01.jpg";
import pp from "../Renovation/Mr.Jaishankar_Terrace renovation/05.jpg";
import ppp from "../Renovation/Mr.Jaishankar_Terrace renovation/07.jpg";
import pppp from "../Renovation/Mr.Jaishankar_Terrace renovation/09.jpg";
import ppppp from "../Renovation/Mr.Jaishankar_Terrace renovation/08.jpg";

import o from "../Renovation/Mrs.Sunithi Residence/05.jpg";
import oo from "../Renovation/Mrs.Sunithi Residence/03.jpg";
import ooo from "../Renovation/Mrs.Sunithi Residence/09.jpg";
import oooo from "../Renovation/Mrs.Sunithi Residence/08.jpg";
import ooooo from "../Renovation/Mrs.Sunithi Residence/07.jpg";


import z from "../Residential Interior Design/Harmony homes_Navarang/05.png";
import x from "../Residential Interior Design/Harmony homes_Navarang/07.png";
import y from "../Residential Interior Design/Harmony homes_Navarang/04.png";
import v from "../Residential Interior Design/Harmony homes_Navarang/11.png";
import m from "../Residential Interior Design/Harmony homes_Navarang/12.png";

import zz from "../Residential Interior Design/Harmony homes_Sumitra/1.png";
import xx from "../Residential Interior Design/Harmony homes_Sumitra/2.png";
import yy from "../Residential Interior Design/Harmony homes_Sumitra/3.png";
import vv from "../Residential Interior Design/Harmony homes_Sumitra/5.png";
import mm from "../Residential Interior Design/Harmony homes_Sumitra/6.png";

import zzz from "../Residential Interior Design/Mr.Aravindhan Residence/01.jpg";
import xxx from "../Residential Interior Design/Mr.Aravindhan Residence/02.jpg";
import yyy from "../Residential Interior Design/Mr.Aravindhan Residence/04.jpg";
import vvv from "../Residential Interior Design/Mr.Aravindhan Residence/05.jpg";
import mmmm from "../Residential Interior Design/Mr.Aravindhan Residence/08.jpg";

import zzzz from "../Residential Interior Design/Mr.Shankar narayanan residence/01.png";
import xxxx from "../Residential Interior Design/Mr.Shankar narayanan residence/006.png";
import yyyy from "../Residential Interior Design/Mr.Shankar narayanan residence/10.png";
import vvvv from "../Residential Interior Design/Mr.Shankar narayanan residence/12.png";
import mmmmn from "../Residential Interior Design/Mr.Shankar narayanan residence/22.png";

import l from "../Residential Interior Design/Mr.Vijaykumar residence/03.jpg";
import k from "../Residential Interior Design/Mr.Vijaykumar residence/04.jpg";
import j from "../Residential Interior Design/Mr.Vijaykumar residence/05.jpg";
import g from "../Residential Interior Design/Mr.Vijaykumar residence/06.jpg";

// ╔══════════════════════════════════════════════════════════════════════╗
//  DATA
// ╚══════════════════════════════════════════════════════════════════════╝

const portfolioData = [

  // ══════════════════════════════════════════
  //  C1 · Architectural Planning
  // ══════════════════════════════════════════
  {
    icon: Home,
    title: "Architectural Planning",
    desc: "Comprehensive architectural planning for modern homes, apartments, and villas.",
  colorA: "#22d3ee", colorB: "#22d3ee",
    projects: [

      // ── C1 · Project 1 — Lake View Residence (1 image) ──────────────
      {
        name: "Maraimalainagar residence",
        cover: p1_1_img1,
        images: [
          p1_1_img1,
        ],
      },

      // ── C1 · Project 2 — Urban Apartment Planning (1 image) ─────────
      {
        name: "Mr.Balaji Residence",
        cover: p1_2_img1,
        images: [
          p1_2_img1,
        ],
      },

    ],
  },

  // ══════════════════════════════════════════
  //  C2 · Commercial Interior Design
  // ══════════════════════════════════════════
  {
    icon: Building2,
    title: "Commercial Interior Design",
    desc: "Purpose-driven commercial interiors designed to reflect brand identity.",
  colorA: "#22d3ee", colorB: "#22d3ee",
    projects: [

      // ── C2 · Project 1 — Tech HQ Campus (5 images) ──────────────────
      {
        name: "Endosys",
        cover: "https://placehold.co/600x400/7a8fa6/fff?text=Tech+HQ+1",
        images: [
          p1_2_img11,
          p1,
          p11,
          p111,
          p1111,
          // p2_1_img1, p2_1_img2, p2_1_img3, p2_1_img4, p2_1_img5,
        ],
      },

      // ── C2 · Project 2 — Flagship Retail Store (5 images) ───────────
      {
        name: "Multispeciality Clinic",
        cover: "https://placehold.co/600x400/8fa6bc/fff?text=Retail+1",
        images: [
          aa,
          p1_211,
          p1_2111,
          p1_21111,
          p1_211111,
          // p2_2_img1, p2_2_img2, p2_2_img3, p2_2_img4, p2_2_img5,
        ],
      },

      // ── C2 · Project 3 — Co-working Hub (5 images) ──────────────────
      {
        name: "Sanjana Bridal boutique",
        cover: "https://placehold.co/600x400/6b8099/fff?text=Cowork+1",
        images: [
          pp1_21,
          ppp1_211,
          pppp1_2111,
          ppppp1_21111,
          pppppp1_211111,
          // p2_3_img1, p2_3_img2, p2_3_img3, p2_3_img4, p2_3_img5,
        ],
      },

    ],
  },

  // ══════════════════════════════════════════
  //  C3 · Renovation & Elevation
  // ══════════════════════════════════════════
  {
    icon: RefreshCw,
    title: "Elevation",
    desc: "Transformative renovation and elevation projects that modernize spaces.",
    colorA: "#22d3ee", colorB: "#22d3ee",
    projects: [

      // ── C3 · Project 1 — Heritage Home Renovation (2 images) ────────
      {
        name: "Dinesh reisdence",
        cover: "https://placehold.co/600x400/a6917a/fff?text=Heritage+1",
        images: [
          b,
          bb,
          // p3_1_img1, p3_1_img2,
        ],
      },

      // ── C3 · Project 2 — Victorian Terrace Upgrade (2 images) ───────
      {
        name: "Mr.Sathish residence",
        cover: "https://placehold.co/600x400/b8a090/fff?text=Victorian+1",
        images: [
          c,
          cc,
          // p3_2_img1, p3_2_img2,
        ],
      },

      // ── C3 · Project 3 — Open-Plan Transformation (1 image) ─────────
      {
        name: "Mr.Sundarapandiyan residence",
        cover: "https://placehold.co/600x400/c0a888/fff?text=OpenPlan+1",
        images: [
          d,
          // p3_3_img1,
        ],
      },

      // ── C3 · Project 4 — Basement Extension (2 images) ──────────────
      {
        name: "Mr.Vijayakumar",
        cover: "https://placehold.co/600x400/9a8070/fff?text=Basement+1",
        images: [
          dd,
          ddd,
          // p3_4_img1, p3_4_img2,
        ],
      },

      // ── C3 · Project 5 — NEW PROJECT (5 images) ─────────────────────
      // ⚠️ Replace "New Project Name" with the actual project name
      {
        name: "Pallikaranai residence",
        cover: "https://placehold.co/600x400/c8a870/fff?text=NewProject+1",
        images: [
         r,
          rr,
          rrr,
          rrrr,
          rrrrr,
          // p3_5_img1, p3_5_img2, p3_5_img3, p3_5_img4, p3_5_img5,
        ],
      },

    ],
  },

  // ══════════════════════════════════════════
  //  C4 · Renovation
  // ══════════════════════════════════════════
  {
    icon: DraftingCompass,
    title: "Renovation",
    desc: "Detailed architectural drawings and 3D visualizations of our designs.",
    colorA: "#22d3ee", colorB: "#22d3ee",
    projects: [

      // ── C4 · Project 1 — Modern Villa Concept (5 images) ────────────
      {
        name: "Mr.Jaishankar_Terrace renovation",
        cover: "https://placehold.co/600x400/4a5568/fff?text=Villa+1",
        images: [
 p,
          pp,
        ppp,
          pppp,
          ppppp,
          // p4_1_img1, p4_1_img2, p4_1_img3, p4_1_img4, p4_1_img5,
        ],
      },

      // ── C4 · Project 2 — Floor Plan Set (5 images) ──────────────────
      {
        name: "Mrs.Sunithi Residence",
        cover: "https://placehold.co/600x400/5a6880/fff?text=FloorPlan+1",
        images: [
           o,
          oo,
          ooo,
          oooo,
          ooooo,
          // p4_2_img1, p4_2_img2, p4_2_img3, p4_2_img4, p4_2_img5,
        ],
      },

    ],
  },

  // ══════════════════════════════════════════
  //  C5 · Residential Interior Design
  // ══════════════════════════════════════════
  {
    icon: Trees,
    title: "Residential Interior Design",
    desc: "Beautiful tailored interiors that bring warmth and character to every space.",
    colorA: "#22d3ee", colorB: "#22d3ee",
    projects: [

      // ── C5 · Project 1 — Contemporary Living Room (5 images) ────────
      {
        name: "Harmony homes_Navarang",
        cover: "https://placehold.co/600x400/6b8c6b/fff?text=LivingRoom+1",
        images: [
          x,
          y,
          z,
          v,
          m,
          // p5_1_img1, p5_1_img2, p5_1_img3, p5_1_img4, p5_1_img5,
        ],
      },

      // ── C5 · Project 2 — Serene Master Bedroom (5 images) ───────────
      {
        name: "Harmony homes_Sumitra",
        cover: "https://placehold.co/600x400/7a9e7a/fff?text=Bedroom+1",
        images: [
          xx,
          yy,
          zz,
          vv,
          mm,
          // p5_2_img1, p5_2_img2, p5_2_img3, p5_2_img4, p5_2_img5,
        ],
      },

      // ── C5 · Project 3 — Gourmet Kitchen (5 images) ─────────────────
      {
        name: "Mr.Aravindhan Residence",
        cover: "https://placehold.co/600x400/5c7a5c/fff?text=Kitchen+1",
        images: [
          xxx,
          yyy,
          zzz,
          vvv,
          mmmm,
          // p5_3_img1, p5_3_img2, p5_3_img3, p5_3_img4, p5_3_img5,
        ],
      },

      // ── C5 · Project 4 — Home Office Suite (5 images) ───────────────
      {
        name: "Mr.Shankar narayanan residence",
        cover: "https://placehold.co/600x400/8aaa8a/fff?text=HomeOffice+1",
        images: [
          xxxx,
          yyyy,
          zzzz,
          vvvv,
          mmmmn,
          // p5_4_img1, p5_4_img2, p5_4_img3, p5_4_img4, p5_4_img5,
        ],
      },

      // ── C5 · Project 5 — Luxury Bathroom (5 images) ─────────────────
      {
        name: "Mr.Vijaykumar residence",
        cover: "https://placehold.co/600x400/4e6e4e/fff?text=Bathroom+1",
        images: [
          l,
          k,
          j,
          g,
          // p5_5_img1, p5_5_img2, p5_5_img3, p5_5_img4, p5_5_img5,
        ],
      },

    ],
  },

];


// ─── Types ───────────────────────────────────────────────────────────────────
type LB = { catIdx: number; projIdx: number; imgIdx: number } | null;

// Define type for particle mesh with userData


// ─── Component ───────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [lb, setLb] = useState<LB>(null);

  // Add ref for canvas container to safely access parent element
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const lbCat  = lb !== null ? portfolioData[lb.catIdx]       : null;
  const lbProj = lbCat       ? lbCat.projects[lb!.projIdx]    : null;
  const lbImg  = lbProj      ? lbProj.images[lb!.imgIdx]      : null;

  useEffect(() => {
    const h = () => setShowScrollBtn(window.scrollY > 300);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("animate-in"); obs.unobserve(e.target); }
      }),
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const openLb  = (catIdx: number, projIdx: number, imgIdx: number) => {
    setLb({ catIdx, projIdx, imgIdx });
    document.body.style.overflow = "hidden";
  };
  const closeLb = () => { setLb(null); document.body.style.overflow = ""; };

  const prevImg = () => {
    if (!lb || !lbProj) return;
    setLb({ ...lb, imgIdx: (lb.imgIdx - 1 + lbProj.images.length) % lbProj.images.length });
  };
  const nextImg = () => {
    if (!lb || !lbProj) return;
    setLb({ ...lb, imgIdx: (lb.imgIdx + 1) % lbProj.images.length });
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (!lb) return;
      if (e.key === "ArrowLeft")  prevImg();
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "Escape")     closeLb();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lb]);

  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
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

  {/* Three.js Canvas Background - Add container div with ref */}
  <div ref={canvasContainerRef} className="absolute inset-0" style={{ zIndex: 0 }}>
    <canvas
      ref={(canvas) => {
        if (!canvas || canvas._threeInit) return;
        canvas._threeInit = true;

        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.onload = () => {
          const THREE = (window as any).THREE;
          if (!THREE || !canvasContainerRef.current) return;

          const container = canvasContainerRef.current;

          const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
          renderer.setSize(container.offsetWidth, container.offsetHeight);
          renderer.setPixelRatio(window.devicePixelRatio);

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
          camera.position.z = 5;

          // Create flashing geometric meshes
          const geometries = [
            new THREE.OctahedronGeometry(0.15),
            new THREE.TetrahedronGeometry(0.15),
            new THREE.IcosahedronGeometry(0.12),
          ];

          const particles: any[] = [];
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
            particles.forEach((m: any) => {
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
            if (!container) return;
            const w = container.offsetWidth;
            const h = container.offsetHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
          });
          ro.observe(container);
        };
        document.head.appendChild(script);
      }}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  </div>

  {/* Content */}
  <div className="container mx-auto text-center relative z-20">
    {/* Architectural Badge */}
    <div className="mb-6 reveal fade-in-down">
      <span className="inline-block px-4 py-2 bg-cyan-200/50 backdrop-blur-sm rounded-full text-cyan-700 text-sm font-medium tracking-wide">
        ARCHITECTURAL EXCELLENCE
      </span>
    </div>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 reveal fade-in-down tracking-tight">
      Our{" "}
      <span className="relative inline-block text-cyan-500">
        Portfolio
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500 rounded-full" />
      </span>
    </h1>

    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto reveal fade-in-up font-light mb-8"
      style={{ animationDelay: "0.2s" }}>
      Showcasing our finest architectural and interior design projects
    </p>

  </div>

  {/* Bottom Accent Line */}
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
       style={{ zIndex: 15 }} />

  {/* Add animation styles */}
  <style>{`
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

      {/* ── All Categories ── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-7xl space-y-24">

          {portfolioData.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <div key={catIdx} className="reveal fade-in-up" style={{ animationDelay: `${catIdx * 0.04}s` }}>

                {/* Category header */}
                <div className="flex items-center gap-4 mb-10 pb-5 border-b-2 border-gray-100">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${cat.colorA}, ${cat.colorB})` }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{cat.title}</h2>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                        style={{ background: `linear-gradient(135deg, ${cat.colorA}, ${cat.colorB})` }}>
                        {cat.projects.length} projects
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{cat.desc}</p>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-14">
                  {cat.projects.map((proj, projIdx) => (
                    <div key={projIdx} className="reveal fade-in-up" style={{ animationDelay: `${projIdx * 0.04}s` }}>

                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-2 h-8 rounded-full flex-shrink-0"
                          style={{ background: `linear-gradient(to bottom, ${cat.colorA}, ${cat.colorB})` }} />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{proj.name}</h3>
                        <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2.5 py-1 rounded-full">
                          {proj.images.length} {proj.images.length === 1 ? "image" : "images"}
                        </span>
                      </div>

                      <div className="proj-img-grid">
                        {proj.images.map((imgSrc, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="proj-img-card"
                            onClick={() => openLb(catIdx, projIdx, imgIdx)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && openLb(catIdx, projIdx, imgIdx)}
                            aria-label={`${proj.name} image ${imgIdx + 1}`}
                          >
                            <div className="proj-img-wrap">
                              <img
                                src={typeof imgSrc === "string" ? imgSrc : imgSrc}
                                alt={`${proj.name} ${imgIdx + 1}`}
                                className="proj-img"
                                loading="lazy"
                              />
                              <span className="proj-img-num">{imgIdx + 1}</span>
                              <div className="proj-img-hover">
                                <span className="proj-img-btn">
                                  <ZoomIn className="w-4 h-4 mr-1 inline" />
                                  View
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 reveal fade-in-down">
            Interested in Our Work?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
            Let's discuss how we can bring your vision to life with our design expertise.
          </p>
          <Link to="/#transform-space" className="reveal pop-in" style={{ animationDelay: "0.3s" }}>
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* ── Scroll to top ── */}
      {showScrollBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg z-50 transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* ── Lightbox ── */}
      {lb && lbCat && lbProj && lbImg && (
        <div
          className="lb-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}
          role="dialog" aria-modal="true"
        >
          <div className="lb-box">

            <div className="lb-header">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${lbCat.colorA}, ${lbCat.colorB})` }}>
                  <lbCat.icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 truncate">{lbCat.title}</p>
                  <p className="text-sm font-bold text-gray-900 truncate">{lbProj.name}</p>
                </div>
              </div>
              <div className="flex items-baseline gap-1 flex-shrink-0">
                <span className="text-lg font-black text-cyan-500">{lb.imgIdx + 1}</span>
                <span className="text-xs text-gray-300">/</span>
                <span className="text-xs text-gray-400">{lbProj.images.length}</span>
              </div>
              <button onClick={closeLb} className="lb-close-btn" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="lb-img-area">
              <img
                key={`${lb.catIdx}-${lb.projIdx}-${lb.imgIdx}`}
                src={typeof lbImg === "string" ? lbImg : lbImg as string}
                alt={`${lbProj.name} ${lb.imgIdx + 1}`}
                className="lb-img"
              />
              {lbProj.images.length > 1 && (
                <>
                  <button onClick={prevImg} className="lb-nav lb-prev" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={nextImg} className="lb-nav lb-next" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
                </>
              )}
            </div>

            <div className="lb-thumbs">
              {lbProj.images.map((imgSrc, i) => (
                <button
                  key={i}
                  onClick={() => setLb({ ...lb, imgIdx: i })}
                  className={`lb-thumb ${i === lb.imgIdx ? "lb-thumb-on" : ""}`}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={typeof imgSrc === "string" ? imgSrc : imgSrc as string} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ── Styles ── */}
      <style>{`
        @keyframes fadeInUp   { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popIn      { from{opacity:0;transform:scale(0.93)} to{opacity:1;transform:scale(1)} }
        @keyframes lbIn       { from{opacity:0} to{opacity:1} }
        @keyframes lbUp       { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes imgFade    { from{opacity:0.15;transform:scale(1.02)} to{opacity:1;transform:scale(1)} }

        .reveal{opacity:0}
        .animate-in{animation-fill-mode:both;animation-duration:0.5s;animation-timing-function:ease-out}
        .fade-in-up.animate-in   {animation-name:fadeInUp}
        .fade-in-down.animate-in {animation-name:fadeInDown}
        .pop-in.animate-in       {animation-name:popIn}

        .proj-img-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));
          gap:16px;
        }
        .proj-img-card {
          border-radius:14px;overflow:hidden;cursor:pointer;
          border:2px solid #f0f0f0;
          box-shadow:0 2px 10px rgba(0,0,0,0.06);
          transition:all 0.22s ease;
        }
        .proj-img-card:hover {
          border-color:#06b6d4;transform:translateY(-4px);
          box-shadow:0 14px 36px rgba(6,182,212,0.15);
        }
        .proj-img-wrap { position:relative;overflow:hidden; }
        .proj-img {
          width:100%;height:190px;object-fit:cover;display:block;
          transition:transform 0.45s ease;
        }
        .proj-img-card:hover .proj-img { transform:scale(1.06); }
        .proj-img-num {
          position:absolute;top:8px;left:8px;
          background:rgba(0,0,0,0.55);color:#fff;
          font-size:10px;font-weight:700;
          width:22px;height:22px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
        }
        .proj-img-hover {
          position:absolute;inset:0;
          background:linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 55%);
          display:flex;align-items:flex-end;justify-content:center;
          padding-bottom:12px;opacity:0;
          transition:opacity 0.28s ease;
        }
        .proj-img-card:hover .proj-img-hover { opacity:1; }
        .proj-img-btn {
          display:flex;align-items:center;
          color:#fff;font-size:12px;font-weight:600;
          background:rgba(6,182,212,0.88);
          padding:5px 14px;border-radius:20px;
        }

        .lb-overlay {
          position:fixed;inset:0;z-index:1000;
          background:rgba(0,0,0,0.93);
          display:flex;align-items:center;justify-content:center;
          padding:16px;
          animation:lbIn 0.2s ease;
        }
.lb-box {
  background:#fff;
  border-radius:26px;
  width:98%;
  max-width:1550px;   /* increased again */
  max-height:100vh;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-shadow:0 70px 180px rgba(0,0,0,0.75);
  animation:lbUp 0.28s cubic-bezier(0.16,1,0.3,1);
}
        .lb-header {
          display:flex;align-items:center;justify-content:space-between;
          gap:12px;padding:14px 20px;
          border-bottom:1px solid #f0f0f0;flex-shrink:0;
        }
        .lb-close-btn {
          background:none;border:none;cursor:pointer;
          padding:7px;border-radius:50%;color:#9ca3af;
          display:flex;align-items:center;justify-content:center;
          transition:background 0.2s,color 0.2s;flex-shrink:0;
        }
        .lb-close-btn:hover{background:#f3f4f6;color:#111}
        .lb-img-area { position:relative;background:#111;flex-shrink:0;display:flex;align-items:center;justify-content:center; }
.lb-img {
  width:100%;
  height:85vh;   /* much larger & responsive */
  object-fit:contain;
  display:block;
  animation:imgFade 0.22s ease;
}
        .lb-nav {
          position:absolute;top:50%;transform:translateY(-50%);
          background:rgba(255,255,255,0.92);border:none;cursor:pointer;
          width:42px;height:42px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          color:#111;box-shadow:0 4px 16px rgba(0,0,0,0.25);
          transition:all 0.2s;
        }
        .lb-nav:hover{background:#fff;transform:translateY(-50%) scale(1.1)}
        .lb-prev{left:14px}
        .lb-next{right:14px}
        .lb-thumbs {
          display:flex;gap:8px;padding:12px 20px 16px;
          overflow-x:auto;background:#fafafa;
          border-top:1px solid #f0f0f0;flex-shrink:0;
          scrollbar-width:thin;scrollbar-color:#06b6d4 #f0f0f0;
        }
        .lb-thumbs::-webkit-scrollbar{height:4px}
        .lb-thumbs::-webkit-scrollbar-track{background:#f0f0f0;border-radius:4px}
        .lb-thumbs::-webkit-scrollbar-thumb{background:#06b6d4;border-radius:4px}
        .lb-thumb {
          flex-shrink:0;width:56px;height:42px;
          border-radius:8px;overflow:hidden;
          border:2.5px solid transparent;
          cursor:pointer;padding:0;background:none;
          opacity:0.5;transition:all 0.2s;
        }
        .lb-thumb:hover{opacity:0.85;border-color:#06b6d4}
        .lb-thumb-on{
          border-color:#06b6d4!important;opacity:1!important;
          transform:scale(1.08);
          box-shadow:0 0 0 2px rgba(6,182,212,0.3);
        }

        @media(max-width:640px){
  /* Grid cards */
  .proj-img-grid{grid-template-columns:repeat(2,1fr);gap:10px}
  .proj-img{height:140px}

  /* Lightbox — full screen on mobile */
  .lb-overlay{
    padding:0;
    align-items:stretch;
    justify-content:stretch;
  }
  .lb-box{
    width:100%;
    max-width:100%;
    height:100%;
    max-height:100%;
    border-radius:0;
    display:flex;
    flex-direction:column;
  }
  .lb-header{
    padding:10px 14px;
    flex-shrink:0;
  }
  .lb-img-area{
    flex:1;
    min-height:0;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#111;
  }
  .lb-img{
    width:100%;
    height:100%;
    max-height:100%;
    object-fit:contain;
  }
  .lb-thumbs{
    padding:10px 14px 12px;
    flex-shrink:0;
  }
  .lb-thumb{width:44px;height:34px}

  /* Bigger nav arrows on mobile */
  .lb-nav{width:36px;height:36px}
  .lb-prev{left:8px}
  .lb-next{right:8px}
}

        @media(max-width:380px){
          .proj-img-grid{grid-template-columns:1fr}
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
