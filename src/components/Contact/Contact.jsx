import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Faltan variables de entorno de EmailJS", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        form.current.reset();

        toast.success("¡Mensaje enviado correctamente!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      },
      (error) => {
        console.error("Error sending message:", error);

        toast.error("No se pudo enviar el mensaje. Intenta de nuevo.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    );
  };

  return (
    <section
      id="contacto"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACTO</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Estaré encantado de leer tu mensaje, ya sea por oportunidades, proyectos o consultas.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Contáctame <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="title"
            placeholder="Asunto"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;