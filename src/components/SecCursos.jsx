import Rating from "@mui/material/Rating";
const supportLinks = [
  {
    id: 1,
    titulo:
      "Este es un titulo largo para comprobar la funcionalidad del responsive para los demas cards y para este tambien para ver que tal es el ancho y el largo",
    areaTematica: "#photography",
    ranking: 0.5,
    precio: "$500",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 2,
    titulo: "Boost your conversion rate",
    areaTematica: "#photography",
    ranking: 5.0,
    precio: "$500",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 3,
    titulo: "Boost your conversion rate",
    areaTematica: "#photography",
    ranking: 4.0,
    precio: "$500",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 1,
    titulo:
      "Este es un titulo largo para comprobar la funcionalidad del responsive para los demas cards y para este tambien para ver que tal es el ancho y el largo",
    areaTematica: "#photography",
    ranking: 3.5,
    precio: "$500",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 2,
    titulo: "Boost your conversion rate",
    areaTematica: "#photography",
    ranking: 5.0,
    precio: "$500",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 3,
    titulo: "Boost your conversion rate",
    areaTematica: "#photography",
    ranking: 4.3,
    precio: "$500",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
];
const puntuacion = () => {};

export default function SecCursos() {
  return (
    <div className="bg-gray-100">
      {/* Header la descripcion de las targetas de los cursos*/}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Support
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Targetas de cursos */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8">
          {supportLinks.map((link, index) => (
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              {/* Este div es de la imagen */}
              <div key={link.id} className="flex-shrink-0">
                <svg
                  className="hidden absolute rounded-tr-lg lg:flex w-fit"
                  width="384px"
                  height="192px"
                >
                  <polygon
                    className="bg-gradient-to-br from-transparent to-white"
                    fill="white"
                    strokeWidth="5px"
                    points="0 192, 385 90, 385 192"
                  />
                </svg>
                <img
                  className="h-48 w-full object-cover"
                  src={link.imageUrl}
                  alt=""
                />
              </div>
              {/* este div es del titulo y la descripcion el complemento de la card */}
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                {/* titulo y descripcion de la card */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {link.areaTematica}
                    </span>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {link.titulo}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {link.descripcion}
                    </p>
                  </div>
                </div>
                {/* lo ultimo de la card */}
                <div className="mt-6 flex items-center">
                  <div className="flex-1 pt-4 pb-2.5">
                    {/* Puntuacion del Ranking */}
                    <div className="flex items-center mt-2.5 mb-5 flex-row">
                      <Rating
                        name="read-only"
                        value={link.ranking}
                        precision={0.5}
                        readOnly
                      />
                      <span className="bg-blue-100 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-amber-200 dark:text-amber-800 ml-3">
                        {link.ranking}
                      </span>
                    </div>
                    {/* Precio y Boton */}
                    <div className="flex items-center justify-between p-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {link.precio}
                      </span>
                      <a
                        href="#"
                        className="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-400 dark:hover:bg-amber-500 dark:focus:ring-amber-500"
                      >
                        Comprar Ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
