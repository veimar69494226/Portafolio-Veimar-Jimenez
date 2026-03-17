import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Articles from "./components/Articles/Articles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const PortfolioPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050414]">
      {/* Fondo grid */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Glow azul izquierda */}
      <div className="absolute top-[80px] left-[-120px] w-[420px] h-[420px] bg-blue-500/20 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Glow azul centro-derecha */}
      <div className="absolute top-[320px] right-[-100px] w-[380px] h-[380px] bg-cyan-400/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Glow medio */}
      <div className="absolute top-[900px] left-[20%] w-[320px] h-[320px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Contenido */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sobre-mi" replace />} />
      <Route path="/sobre-mi" element={<PortfolioPage />} />
      <Route path="/habilidades" element={<PortfolioPage />} />
      <Route path="/experiencia" element={<PortfolioPage />} />
      <Route path="/proyectos" element={<PortfolioPage />} />
      <Route path="/educacion" element={<PortfolioPage />} />
      <Route path="/articulos" element={<PortfolioPage />} />
      <Route path="/contacto" element={<PortfolioPage />} />
    </Routes>
  );
};

export default App;