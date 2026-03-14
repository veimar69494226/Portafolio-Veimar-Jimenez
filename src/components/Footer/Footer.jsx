import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Sobre mí", id: "sobre mi" },
    { name: "Habilidades", id: "habilidades" },
    { name: "Experiencia", id: "experiencia" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Educación", id: "educacion" },
    { name: "Artículos", id: "articulos" },
    { name: "Contacto", id: "contacto" },
  ];

  const socialLinks = [
    /*{
      icon: <FaFacebook />,
      link: "",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      link: "",
      label: "Instagram",
    },*/
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/veimar69494226",
      label: "GitHub",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@VEIMARRAMIROJIMENEZFLORES",
      label: "YouTube",
    },
  ];

  return (
    <footer className="text-white py-10 px-[12vw] md:px-[7vw] lg:px-[16vw] border-t border-blue-400/10">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-2xl font-semibold text-blue-400">
          Veimar Ramiro Jimenez Flores
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Desarrollador Full Stack orientado a backend, análisis de datos y
          desarrollo de soluciones tecnológicas aplicadas a problemas reales.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-blue-400 text-sm sm:text-base text-gray-300 transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              className="w-11 h-11 rounded-xl border border-blue-400/20 bg-[#0b1220] flex items-center justify-center text-xl text-gray-300 hover:text-white hover:bg-blue-900 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8">
          © 2026 Veimar Ramiro Jimenez Flores. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;