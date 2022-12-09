import Header from "../Header";
import HeadPrecios from "./HeadPrecios";
import { CheckIcon } from "@heroicons/react/24/outline";

const pricing = {
  tiers: [
    {
      title: "Freelancer",
      price: 24,
      frequency: "/month",
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
    {
      title: "Startup",
      price: 32,
      frequency: "/month",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Enterprise",
      price: 48,
      frequency: "/month",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom integrations",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};

const Precios = () => {
  return (
    <>
      <Header />
      <HeadPrecios />
      {/* Pricing Section */}
      <section className="relative" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="sr-only">
          Pricing
        </h2>

        {/* Tiers */}
        <div className="mx-auto max-w-2xl space-y-12 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8">
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
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-rose-500 py-1.5 px-4 text-sm font-semibold text-white">
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
                        className="h-6 w-6 flex-shrink-0 text-rose-500"
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
                    ? "bg-rose-500 text-white hover:bg-rose-600"
                    : "bg-rose-50 text-rose-700 hover:bg-rose-100",
                  "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Precios;
