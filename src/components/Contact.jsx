import React from "react";

const Contact = () => {
  return (
    <div className="w-screen 2xl:mt-20 h-screen flex items-center flex-col">
      <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl mb-8">Contactame</h2>
      <form
        action="https://getform.io/f/anleejla"
        method="POST"
        className="flex flex-col items-center justify-center pt-4 md:pt-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="border-2 border-gray-300 rounded-lg py-2 px-4 mb-4 w-80 md:w-96 lg:w-100"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="border-2 border-gray-300 rounded-lg py-2 px-4 mb-4 w-80 md:w-96 lg:w-100"
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          className="border-2 border-gray-300 rounded-lg py-2 px-4 mb-4 w-80 md:w-96 lg:w-100 h-40 resize-none"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-80 md:w-96 lg:w-100"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
