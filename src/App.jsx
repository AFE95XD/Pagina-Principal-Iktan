import React from "react";
import Hero from "./components/Hero";
import SecPatrocinios from "./components/SecPatrocinios";
import SecCursos from "./components/SecCursos";
import Footer from "./components/Footer";
import CardCursos from "./components/CardCursos";

const App = () => {
  return (
    <>
      <Hero />
      <SecPatrocinios />
      <SecCursos />
      <Footer />
    </>
  );
};

export default App;
