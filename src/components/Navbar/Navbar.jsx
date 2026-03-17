import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre-mi");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { route: "/sobre-mi", sectionId: "sobre-mi", label: "Sobre mí" },
    { route: "/habilidades", sectionId: "habilidades", label: "Habilidades" },
    { route: "/experiencia", sectionId: "experiencia", label: "Experiencia" },
    { route: "/proyectos", sectionId: "proyectos", label: "Proyectos" },
    { route: "/educacion", sectionId: "educacion", label: "Educación" },
    { route: "/articulos", sectionId: "articulos", label: "Artículos" },
    { route: "/contacto", sectionId: "contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const currentItem = menuItems.find((item) => item.route === location.pathname);

    if (currentItem) {
      setActiveSection(currentItem.sectionId);

      const section = document.getElementById(currentItem.sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "sobre-mi";

      for (const item of menuItems) {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            currentSection = item.sectionId;
            break;
          }
        }
      }

      setActiveSection((prev) =>
        prev !== currentSection ? currentSection : prev
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (route) => {
    setIsOpen(false);
    navigate(route);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      {/* Glow azul superior */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none">
        <div className="mx-auto h-full max-w-[1200px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)] blur-2xl"></div>
      </div>

      <div className="relative px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[4vw] xl:px-[6vw] 2xl:px-[8vw]">
        <div className="text-white h-[72px] flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleMenuItemClick("/sobre-mi")}
            className="text-base sm:text-lg md:text-xl font-semibold shrink-0 text-left whitespace-nowrap"
          >
            <span className="text-blue-500">&lt;</span>
            <span className="text-white">Veimar</span>
            <span className="text-blue-500">/</span>
            <span className="text-white">Jimenez</span>
            <span className="text-blue-500">&gt;</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center min-w-0">
            <ul className="flex items-center gap-6 xl:gap-8 text-gray-300">
              {menuItems.map((item) => (
                <li key={item.sectionId} className="shrink-0">
                  <button
                    onClick={() => handleMenuItemClick(item.route)}
                    className={`relative whitespace-nowrap pb-1 transition-colors duration-300 hover:text-blue-400 ${
                      activeSection === item.sectionId
                        ? "text-blue-400"
                        : "text-gray-300"
                    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-center after:rounded-full after:bg-blue-400 after:transition-transform after:duration-300 ${
                      activeSection === item.sectionId
                        ? "after:scale-x-100"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile icon */}
          <div className="lg:hidden shrink-0">
            {isOpen ? (
              <FiX
                className="text-3xl text-blue-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-blue-400 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-[4vw] pt-2 pb-4">
          <div className="bg-[#050414]/95 backdrop-blur-lg rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-blue-400/20 overflow-hidden">
            <ul className="flex flex-col items-center py-4 text-gray-300">
              {menuItems.map((item) => (
                <li key={item.sectionId} className="w-full">
                  <button
                    onClick={() => handleMenuItemClick(item.route)}
                    className={`w-full py-3 text-center transition-colors duration-300 hover:text-blue-400 ${
                      activeSection === item.sectionId
                        ? "text-blue-400"
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;