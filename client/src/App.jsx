import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TrustSection from "./sections/TrustSection";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import TeamPortfolio from "./sections/TeamPortfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Process from "./sections/Process";

function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <About />
      <Services />
      <Portfolio />
      <TeamPortfolio />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[#0B0F19] min-h-screen text-white selection:bg-blue-600/30 selection:text-blue-400 font-sans antialiased">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
