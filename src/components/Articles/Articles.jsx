import React from "react";
import { articles } from "../../constants";
import { FiExternalLink, FiFileText } from "react-icons/fi";

const Articles = () => {
  return (
    <section
      id="articulos"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ARTÍCULOS</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-3xl mx-auto">
          Publicaciones y trabajos académicos que reflejan mi interés en el
          análisis de datos, desarrollo de software y aplicación de tecnologías
          para resolver problemas reales.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {articles?.map((article) => (
          <div
            key={article.id}
            className="border border-blue-400/20 bg-[#0b1220]/90 backdrop-blur-md rounded-3xl shadow-[0_0_20px_rgba(37,99,235,0.12)] overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.22)] transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-8 items-start">
              {/* Portada tipo libro/revista */}
              {article.image && (
                <div className="w-full lg:w-[280px] xl:w-[320px] flex justify-center lg:justify-start shrink-0">
                  <div className="relative">
                    {/* sombra detrás */}
                    <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.5rem] bg-blue-900/20 blur-md"></div>

                    {/* portada */}
                    <div className="relative w-[220px] sm:w-[250px] lg:w-[260px] xl:w-[290px] aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-blue-400/20 shadow-[0_18px_40px_rgba(0,0,0,0.45)] bg-[#111827]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Contenido */}
              <div className="flex-1 w-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-400/20 flex items-center justify-center text-blue-300 shrink-0 mt-1">
                    <FiFileText size={22} />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-300 mt-2">
                      {article.source}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6 text-left">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/15 text-xs sm:text-sm font-medium text-blue-300 rounded-full px-3 py-1 border border-blue-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {article.link && article.link !== "" && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition"
                    >
                      <FiExternalLink size={18} />
                      Ver artículo
                    </a>
                  )}

                  {article.pdf && article.pdf !== "" && (
                    <a
                      href={article.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#111827] hover:bg-blue-900 text-gray-200 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition border border-blue-400/20"
                    >
                      <FiFileText size={18} />
                      Ver PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;