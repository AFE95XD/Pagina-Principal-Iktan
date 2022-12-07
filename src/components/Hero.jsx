import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      {/* menu */}
      <Popover className="relative bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            {/* logoHeader */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="./src/assets/LOGO IKTAN TRAINING.svg"
                  alt="LogoIktan"
                />
              </a>
            </div>

            {/* buscador */}
            <div className="hidden md:hidden lg:flex">
              {/* w-full sm:max-w-xs */}
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-amber-600 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>

            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            {/* ESTE ES EL NAV NORMAL */}
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pagina1
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pagina2
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pagina3
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900 pr-8"
              >
                Pagina4
              </a>
            </Popover.Group>

            {/* este es el el campo de los botones  */}
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-amber-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-500"
              >
                Iniciar Sesión
              </a>
            </div>
          </div>
        </div>

        {/* Aqui empieza el movil */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="./src/assets/LOGO IKTAN TRAINING.svg"
                      alt="IktanResp"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pagina1
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pagina2
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pagina3
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pagina4
                    </a>
                  </nav>
                </div>
              </div>

              <div className="space-y-6 py-6 px-5">
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-amber-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-500"
                  >
                    Inscribirse
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    ¿Tienes Cuenta?-
                    <a href="#" className="text-amber-400 hover:text-amber-500">
                      Inicia Sesión
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

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
