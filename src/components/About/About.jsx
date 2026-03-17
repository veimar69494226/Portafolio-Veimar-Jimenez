import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/veimar foto 2026.png';

const About = () => {
  return (
    <section
      id="sobre-mi"
      className="pt-[110px] md:pt-[120px] pb-10 px-[7vw] md:px-[7vw] lg:px-[12vw] xl:px-[14vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Side */}
        <div className="w-full md:w-[56%] text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hola, Yo soy
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-[1.05]">
            Veimar Ramiro <br />
            Jimenez Flores
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#2563eb] leading-tight min-h-[48px] md:min-h-[56px]">
            <span className="text-white">Yo soy un </span>
            <ReactTypingEffect
              text={[
                'Desarrollador Full Stack',
                'Especialista en Backend',
                'Desarrollador de APIs REST',
                'Analista de Datos',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#60a5fa]">{cursor}</span>
              )}
            />
          </h3>

          <div className="max-w-[680px] mx-auto md:mx-0 space-y-5">
            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-300 leading-[1.8] text-left md:text-justify">
              Soy desarrollador Full Stack con más de 2 años de experiencia en el
              desarrollo de aplicaciones web utilizando tecnologías como Laravel,
              Node.js, React y bases de datos relacionales como MySQL y PostgreSQL.
              Me especializo en el diseño de sistemas backend escalables, APIs REST
              y soluciones web eficientes orientadas a resolver problemas reales.
            </p>

            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-gray-300 leading-[1.8] text-left md:text-justify">
              He participado en diversos proyectos académicos y reales relacionados
              con sistemas de gestión, plataformas administrativas y aplicaciones
              web, contribuyendo en el desarrollo backend, integración con frontend
              y diseño de bases de datos. Además, cuento con conocimientos en
              análisis de datos y ciencia de datos, lo que me permite complementar
              el desarrollo de software con un enfoque analítico para la toma de
              decisiones.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1kDhK6355dKgNtiQB21dwwhLWDYGj7mFT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-8 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #1d4ed8, #2563eb, #60a5fa)',
              boxShadow:
                '0 0 8px rgba(37,99,235,0.45), 0 0 24px rgba(96,165,250,0.35)',
            }}
          >
            DESCARGAR CV
          </a>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[44%] flex justify-center md:justify-end md:pl-6 lg:pl-10">
          <div className="relative w-56 h-72 sm:w-72 sm:h-[28rem] md:w-[24rem] md:h-[31rem] lg:w-[25rem] lg:h-[32rem]">
            <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-blue-500/30 via-sky-400/10 to-cyan-300/25 blur-2xl scale-105" />

            <Tilt
              className="relative w-full h-full rounded-[2.8rem] overflow-hidden border-[3px] border-blue-500/90 bg-[#050816] shadow-[0_0_20px_rgba(59,130,246,0.45),0_0_50px_rgba(37,99,235,0.25)]"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="absolute inset-[10px] rounded-[2.2rem] border border-blue-300/20 pointer-events-none z-10" />

              <img
                src={profileImage}
                alt="Veimar Jimenez"
                className="w-full h-full object-cover object-[66%_center] drop-shadow-[0_10px_25px_rgba(59,130,246,0.35)]"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;