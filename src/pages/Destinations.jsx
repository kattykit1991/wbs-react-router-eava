import { DestinationCard } from "../components";

const Destinations = ({ destinations }) => {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4">
      <section className="text-center space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Reiseziele
        </p>

        <h1 className="text-4xl font-bold text-slate-50">
          Orte aus dem Archiv
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-7 text-slate-300">
          Entdecke Metropolen, Häfen, Dörfer und Ruinen aus den Ewigen Archiven
          von Aeth’Vharis.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map(({ title, image, description, slug }) => (
          <DestinationCard
            key={slug}
            title={title}
            image={image}
            text={description}
            slug={slug}
          />
        ))}
      </section>
    </div>
  );
};

export default Destinations;
