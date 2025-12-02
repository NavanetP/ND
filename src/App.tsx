import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import ScrollToAnchor from "./components/ScrollToAnchor";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import ArchitecturalPlanning from "./pages/services/ArchitecturalPlanning";
import CommercialInterior from "./pages/services/CommercialInterior";
import ElevationDesign from "./pages/services/ElevationDesign";
import InteriorDesign from "./pages/services/InteriorDesign";
import InteriorExecution from "./pages/services/InteriorExecution";
import LandscapeDesign from "./pages/services/LandscapeDesign";
import Renovation from "./pages/services/Renovation";
import ResidentialInterior from "./pages/services/ResidentialInterior";
import WhyChooseUs from "./pages/WhyChooseUs";

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname,location.hash]); // scroll to top on every route change

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <ScrollRestoration />
      <ScrollToAnchor />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/architectural-planning"
              element={<ArchitecturalPlanning />}
            />
            <Route
              path="/services/elevation-design"
              element={<ElevationDesign />}
            />
            <Route
              path="/services/interior-design"
              element={<InteriorDesign />}
            />
            <Route
              path="/services/residential-interior"
              element={<ResidentialInterior />}
            />
            <Route
              path="/services/commercial-interior"
              element={<CommercialInterior />}
            />
            <Route
              path="/services/interior-execution"
              element={<InteriorExecution />}
            />
            <Route path="/services/renovation" element={<Renovation />} />
            <Route
              path="/services/landscape-design"
              element={<LandscapeDesign />}
            />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
