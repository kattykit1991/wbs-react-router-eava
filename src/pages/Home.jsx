import { useNavigate } from "react-router-dom";
import { DestinationCard } from "../components";

const Home = ({ destinations }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/destinations");
  };

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-900/50 bg-slate-950/60 px-6 py-14 text-center shadow-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Ewige Archive von Aeth’Vharis
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Entdecke die Orte von Aeth’Vharis
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Von den leuchtenden Türmen Aeternus’ bis zu den Häfen, Wäldern und
            Ruinen der Welt – öffne das Archiv und entdecke ihre Orte.
          </p>

          <button
            type="button"
            onClick={() => navigate("/destinations")}
            className="rounded-xl border border-cyan-500/40 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
          >
            Reiseziele entdecken
          </button>
        </div>
      </section>

      <section className="space-y-6 px-4 text-center">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Das Archiv
          </p>

          <h2 className="text-3xl font-bold text-slate-50">
            Drei Wege durch Aeth’Vharis
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-500/25 bg-slate-900/60 p-6 shadow-lg">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-sky-400" />
            <h3 className="text-lg font-semibold text-sky-200">
              Orte entdecken
            </h3>
            <p className="mt-2 leading-6 text-slate-300">
              Reise durch Metropolen, Häfen, Dörfer und Ruinen aus den Archiven
              von Aeth’Vharis.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-6 shadow-lg">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-emerald-400" />
            <h3 className="text-lg font-semibold text-emerald-200">
              Geschichten finden
            </h3>
            <p className="mt-2 leading-6 text-slate-300">
              Jeder Ort trägt Spuren seiner Geschichte, seiner Bewohner und der
              Kräfte, die die Welt formen.
            </p>
          </div>

          <div className="rounded-2xl border border-red-500/25 bg-slate-900/60 p-6 shadow-lg sm:col-span-2 md:col-span-1">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-red-400" />
            <h3 className="text-lg font-semibold text-red-200">
              Archive öffnen
            </h3>
            <p className="mt-2 leading-6 text-slate-300">
              Folge den Einträgen tiefer in eine Welt, deren Wissen Stück für
              Stück sichtbar wird.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Ausgewählte Einträge
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-50">
            Orte aus dem Archiv
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {destinations?.slice(0, 3).map((destination) => (
            <DestinationCard
              key={destination.slug}
              title={destination.title}
              image={destination.image}
              text={destination.description}
              slug={destination.slug}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={handleSearch}
            className="rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200"
          >
            Alle Reiseziele ansehen
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
