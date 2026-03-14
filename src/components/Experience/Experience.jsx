import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experiencia"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCIA</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-3xl mx-auto">
          Experiencia académica y profesional en el desarrollo de sistemas web,
          backend, frontend, bases de datos y documentación de software.
        </p>
      </div>

      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute sm:left-1/2 left-4 sm:-translate-x-1/2 w-[3px] bg-blue-500/30 h-full rounded-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex justify-start sm:justify-${index % 2 === 0 ? "start" : "end"} mb-14`}
          >
            {/* Círculo de la línea de tiempo */}
            <div className="absolute sm:left-1/2 left-4 top-8 sm:-translate-x-1/2 z-20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0f172a] border-4 border-blue-500 flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.35)] overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Card */}
            <div
              className={`
                w-full sm:w-[44%] ml-12 sm:ml-0
                ${index % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"}
              `}
            >
              <div className="bg-[#0b1220]/90 backdrop-blur-md border border-blue-400/20 rounded-2xl p-5 sm:p-7 shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 hover:scale-[1.02]">
                {/* Encabezado */}
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white leading-tight">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-blue-300 mt-2 leading-relaxed">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>

                {/* Descripción */}
                <p className="mt-5 text-gray-300 leading-relaxed text-sm sm:text-base text-left">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-5">
                  <h5 className="font-medium text-white">Tecnologías y funciones:</h5>
                  <ul className="flex flex-wrap mt-3">
                    {experience.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="bg-blue-600/20 text-blue-100 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-blue-400/30"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;