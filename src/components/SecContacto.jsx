/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function SecContacto() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Póngase en contacto con nosotros
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              officiis totam tempore consequuntur fugiat asperiores adipisci
              maxime eos aliquam, nisi, recusandae dolor nam sapiente saepe
              nostrum eligendi sit fuga corrupti?
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              ¿Buscas un curso?{" "}
              <a href="#" className="font-medium text-gray-700 underline">
                Ver todos los cursos
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="Nombre completo" className="sr-only">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre-completo"
                  id="nombre-completo"
                  autoComplete="nombre"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="Teléfono" className="sr-only">
                  Teléfono
                </label>
                <input
                  type="text"
                  name="Teléfono"
                  id="Teléfono"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Teléfono"
                />
              </div>
              <div>
                <label htmlFor="Mensaje" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="Mensaje"
                  name="Mensaje"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  placeholder="Mensaje"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-amber-400 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
