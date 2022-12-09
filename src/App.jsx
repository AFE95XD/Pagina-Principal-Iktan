import React from "react";
import Hero from "./components/Hero";
import SecPatrocinios from "./components/SecPatrocinios";
import SecCursos from "./components/SecCursos";
import Footer from "./components/Footer";
import SecContacto from "./components/SecContacto";
import SecPreguntas from "./components/SecPreguntas";

const App = () => {
  return (
    <>
      {/* Este es un comentario */}
      <Hero />
      <SecPatrocinios />
      <SecCursos />
      <SecContacto />
      <SecPreguntas />
      <Footer />
    </>
  );
};

export default App;
