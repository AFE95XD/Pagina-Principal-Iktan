import React from "react";

const HeadPrecios = () => {
  return (
    <>
      {/* Header section */}
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-lg font-semibold text-amber-600">Precios</h1>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Toma el control.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Elige si quieres trabajar con demas personas o solo, con los palanes
            que tenemos para ti.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeadPrecios;
