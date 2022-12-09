import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
