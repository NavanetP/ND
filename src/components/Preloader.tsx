import { motion } from "framer-motion";
import { Brush, Heart, Home, Palette, Ruler, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const StyledImagePreloader: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [currentDesignElement, setCurrentDesignElement] = useState(0);

  const designElements = [
    { icon: <Home size={20} />, text: "Precision Planning" },
    { icon: <Palette size={20} />, text: "Creative Solutions" },
    { icon: <Ruler size={20} />, text: "Precision Planning" },
    { icon: <Brush size={20} />, text: "Creative Solutions" },
  ];

  useEffect(() => {
    const totalDuration = 5000; // 5 seconds

    const imageTimer = setTimeout(() => {
      setImageLoaded(true);
    }, 300);

    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      // Cycle through design elements
      if (newProgress > 10 && newProgress < 90) {
        const elementIndex = Math.floor((newProgress / 100) * designElements.length);
        setCurrentDesignElement(elementIndex);
      }

      if (newProgress > 30 && !showSubtitle) {
        setShowSubtitle(true);
      }

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => setShowPreloader(false), 800);
      }
    }, 50);

    return () => {
      clearTimeout(imageTimer);
      clearInterval(progressInterval);
    };
  }, [showSubtitle, designElements.length]);

  if (!showPreloader) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Floating elements in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <Sparkles className="text-cyan-300/40" size={24} />
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10 w-full px-4 sm:px-6 max-w-md mx-auto">
        {/* Logo Animation */}



        {/* Company Name + Subtitle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-500 mb-3 sm:mb-4 px-2"
            initial={{ letterSpacing: "0.2em" }}
            animate={{ letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            NITHAM DESIGNS
          </motion.h1>

          {showSubtitle && (
            <motion.p
              className="text-blue-700 font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Architectural and Interior Design Solutions
            </motion.p>
          )}
        </motion.div>

        {/* Design Element Showcase */}
        <motion.div
          className="mb-6 sm:mb-8 flex justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg flex items-center space-x-2 sm:space-x-3 max-w-xs sm:max-w-none">
            <motion.div
              key={currentDesignElement}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="text-cyan-600 flex-shrink-0"
            >
              {designElements[currentDesignElement].icon}
            </motion.div>
            <span className="text-blue-800 font-medium text-xs sm:text-sm md:text-base truncate">
              {designElements[currentDesignElement].text}
            </span>
          </div>
        </motion.div>

        {/* Image Element */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-xs sm:max-w-sm md:w-64 lg:w-80 aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20 mx-auto mb-6 sm:mb-8"
        >
          <motion.img
            className="w-full h-full object-cover"
            src="/logo.png"
            alt="Interior Design"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Floating elements on image */}
          <motion.div
            className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 p-1 sm:p-2 rounded-full shadow-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            <Heart className="text-rose-500 w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" />
          </motion.div>

          <motion.div
            className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-white/90 p-1 sm:p-2 rounded sm:rounded-lg shadow-md text-xs font-medium text-blue-800 text-[10px] sm:text-xs"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, type: "spring" }}
          >
            Design Studio
          </motion.div>
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          className="mt-6 sm:mt-8 text-blue-600/80 text-xs sm:text-sm flex items-center justify-center space-x-1 flex-wrap px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span>Transforming spaces with</span>
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-rose-500 font-semibold"
          >
            passion
          </motion.span>
          <span>and</span>
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="text-cyan-500 font-semibold"
          >
            precision
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StyledImagePreloader;
