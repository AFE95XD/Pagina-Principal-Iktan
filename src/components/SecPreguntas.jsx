import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    pregunta: "¿Qué es Iktan Training?",
    respuesta:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    pregunta: "¿Cómo puedo adquirir los cursos?",
    respuesta:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    pregunta: "Hice mi compra. ¿Qué pasos siguen?",
    respuesta:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    pregunta: "¿Cómo elimino un curso?",
    respuesta:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    pregunta: "¿Puedo solicitar un rembolso?",
    respuesta:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SecPreguntas() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <p className="pt-8 text-center text-lg leading-6 text-gray-500">
          A continuación se presentan algunas de las preguntas mas frecuentes
          que recibimos en{" "}
          <span className="text-amber-400 font-bold">Iktan Training</span> y su
          contenido.
        </p>
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-300">
          <dl className="mt-6 space-y-6 divide-y divide-gray-300">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.pregunta} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.pregunta}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.respuesta}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
