import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="habilidades"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          HABILIDADES
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-3xl mx-auto">
          Tecnologías, herramientas y conocimientos que he desarrollado a través
          de proyectos académicos, experiencias reales y formación complementaria.
        </p>
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
            className="w-full"
          >
            <div
              className="h-full bg-[#0b1220]/90 backdrop-blur-md px-6 sm:px-8 py-8 rounded-3xl border border-blue-500/20
              shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.22)] transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 sm:gap-3 bg-[#111827] border border-blue-400/10 rounded-2xl py-3 px-3
                    hover:border-blue-400/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-200 leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;