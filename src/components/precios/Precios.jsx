import HeadPrecios from "./HeadPrecios";
import { CheckIcon } from "@heroicons/react/24/outline";
import Header from "../Header";
import SecPreguntas from "../SecPreguntas";
import Footer from "../Footer";

const pricing = {
  tiers: [
    {
      title: "Personal",
      price: 32,
      frequency: "/ Persona",
      description: "Plan especializado para que aprendas a tu ritmo.",
      features: [
        "1 Persona",
        "Acceso ilimitado con tu cuenta",
        "Certificado digital del curso",
        "Actualizaciones periodicas",
        "Soporte",
      ],
      cta: "Comprar ahora",
      mostPopular: true,
    },
    {
      title: "Empresarial",
      price: 48,
      frequency: "/ Equipo",
      description: "Dedicado para ayudar a tu equipo de forma efectiva.",
      features: [
        "Equipo mas de 15 personas",
        "Acceso ilimitado con tu cuenta",
        "Certificado digital del curso",
        "Actualizaciones periodicas",
        "Soporte",
        "Incorporacion de mas estudiantes",
      ],
      cta: "Comprar ahora",
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Precios = () => {
  return (
    <>
      <Header />
      <HeadPrecios />
      {/* Pricing Section */}
      <section className="relative pb-16" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="sr-only">
          Pricing
        </h2>

        {/* Tiers */}
        <div className="mx-auto max-w-2xl space-y-12 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 lg:px-8">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-amber-500 py-1.5 px-4 text-sm font-semibold text-white">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-bold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="h-6 w-6 flex-shrink-0 text-amber-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={classNames(
                  tier.mostPopular
                    ? "bg-amber-400 text-white hover:bg-amber-500"
                    : "bg-amber-50 text-amber-700 hover:bg-amber-100",
                  "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
      <SecPreguntas />
      <Footer />
    </>
  );
};

export default Precios;
