import React from "react";
import Hero from "./components/Hero";
import SecPatrocinios from "./components/SecPatrocinios";
import SecCursos from "./components/SecCursos";
import Footer from "./components/Footer";
import SecContacto from "./components/SecContacto";
import SecPreguntas from "./components/SecPreguntas";
import Precios from "./components/precios/Precios";

const App = () => {
  return (
    <>
      {/* Estos componentes son para la pagina principal */}
      {/* <Hero />
      <SecPatrocinios />
      <SecCursos />
      <SecContacto />
      <SecPreguntas />
      <Footer /> */}
      {/* Estste es para la pagina de precios */}
      <Precios />
    </>
  );
};

export default App;
