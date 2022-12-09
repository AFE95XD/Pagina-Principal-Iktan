import Header from "./Header";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <Header />
      {/* empieza la seccion */}
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Aprende de los mejores en</span>{" "}
              <span className="block text-amber-400 xl:inline">
                Iktan Cursos
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>

            {/* ESTA PARTE ES DEL INPUT DE EMAIL */}
            <div className="mt-10 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p className="text-base font-medium text-gray-900">
                Regístrese para recibir una notificaciónes.
              </p>
              <form action="#" method="POST" className="mt-8 sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-3.5 text-base placeholder-gray-500 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:flex-1"
                  placeholder="Ingrese su correo electrónico"
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-md border border-transparent bg-amber-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                >
                  Notificarme
                </button>
              </form>
              <p className="mt-8 text-sm text-gray-500">
                Nos preocupamos por la protección de sus datos. Lea nuestra{" "}
                <a href="#" className="font-medium text-gray-900 underline">
                  Politica de Privacidad.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
