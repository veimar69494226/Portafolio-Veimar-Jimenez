import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="educacion"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCACIÓN</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-3xl mx-auto">
          Mi formación académica ha fortalecido mis conocimientos en desarrollo
          de software, análisis de datos y tecnologías aplicadas a la resolución
          de problemas reales.
        </p>
      </div>

      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute sm:left-1/2 left-4 sm:-translate-x-1/2 w-[3px] bg-blue-500/30 h-full rounded-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex justify-start mb-14 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Punto de la línea de tiempo */}
            <div className="absolute sm:left-1/2 left-4 top-8 sm:-translate-x-1/2 z-20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0f172a] border-4 border-blue-500 flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.35)] overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[44%] ml-12 sm:ml-0 ${
                index % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"
              }`}
            >
              <div className="bg-[#0b1220]/90 backdrop-blur-md border border-blue-400/20 rounded-2xl p-5 sm:p-7 shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 hover:scale-[1.02]">
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base text-blue-300 mt-2 leading-relaxed">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>

                <p className="mt-5 text-gray-300 leading-relaxed text-sm sm:text-base text-left">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;