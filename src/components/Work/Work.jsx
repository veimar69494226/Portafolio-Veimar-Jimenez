import React, { useEffect, useState } from "react";
import { projects } from "../../constants";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import figmaLogo from "../../assets/tech_logo/figma.png";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="proyectos"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROYECTOS</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-3xl mx-auto">
          Una selección de proyectos académicos y aplicados que reflejan mi
          experiencia en desarrollo web, backend, frontend, bases de datos,
          análisis de datos y visualización de información.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="border border-blue-400/20 bg-[#0b1220]/90 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.12)] overflow-hidden hover:shadow-[0_0_28px_rgba(59,130,246,0.22)] hover:-translate-y-2 transition-all duration-300"
          >
            <div
              onClick={() => handleOpenModal(project)}
              className="cursor-pointer"
            >
              <div className="p-4">
                <img
                  src={project.image || "/placeholder.png"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl bg-[#111827]"
                />
              </div>

              <div className="px-6 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="mb-2 flex flex-wrap gap-2">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-600/15 text-xs font-medium text-blue-300 rounded-full px-3 py-1 border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 flex items-center gap-3 flex-wrap">
              {project.github && project.github !== "" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#111827] border border-blue-400/20 text-gray-200 hover:text-white hover:bg-blue-900 transition"
                  title="Ver repositorio"
                >
                  <FiGithub size={20} />
                </a>
              )}

              {project.webapp && project.webapp !== "" && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  title="Ver proyecto"
                >
                  <FiExternalLink size={20} />
                </a>
              )}

              {project.figma && project.figma !== "" && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#111827] border border-pink-400/30 hover:bg-pink-700/20 transition"
                  title="Ver diseño en Figma"
                >
                  <img
                    src={figmaLogo}
                    alt="Figma"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              )}

              <button
                onClick={() => handleOpenModal(project)}
                className="ml-auto text-sm font-medium text-blue-300 hover:text-blue-200 transition"
              >
                Ver detalle
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div
            className="fixed inset-0"
            onClick={handleCloseModal}
          ></div>

          <div className="relative z-10 bg-[#0b1220] rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-blue-400/20">
            <div className="sticky top-0 z-20 flex justify-end p-4 bg-[#0b1220]/95 backdrop-blur-md border-b border-blue-400/10">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl font-bold hover:text-blue-400 transition"
                aria-label="Cerrar modal"
              >
                <FiX size={28} />
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-[#0b1220] px-4 pt-4">
                <img
                  src={selectedProject.image || "/placeholder.png"}
                  alt={selectedProject.title}
                  className="w-full max-h-[380px] object-cover rounded-xl shadow-xl bg-[#111827]"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/15 text-xs sm:text-sm font-medium text-blue-300 rounded-full px-3 py-1 border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                  {selectedProject.github && selectedProject.github !== "" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:flex-1 bg-[#111827] hover:bg-blue-900 text-gray-200 px-4 py-3 rounded-xl text-sm sm:text-lg font-semibold text-center transition flex items-center justify-center gap-2"
                    >
                      <FiGithub size={20} />
                      Ver código
                    </a>
                  )}

                  {selectedProject.webapp && selectedProject.webapp !== "" && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl text-sm sm:text-lg font-semibold text-center transition flex items-center justify-center gap-2"
                    >
                      <FiExternalLink size={20} />
                      Ver proyecto
                    </a>
                  )}

                  {selectedProject.figma && selectedProject.figma !== "" && (
                    <a
                      href={selectedProject.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:flex-1 bg-[#111827] hover:bg-pink-700/20 text-white px-4 py-3 rounded-xl text-sm sm:text-lg font-semibold text-center transition flex items-center justify-center gap-2 border border-pink-400/30"
                    >
                      <img
                        src={figmaLogo}
                        alt="Figma"
                        className="w-5 h-5 object-contain"
                      />
                      Ver Figma
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;