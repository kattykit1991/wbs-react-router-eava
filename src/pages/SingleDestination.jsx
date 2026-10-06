import { useNavigate, useParams } from "react-router-dom";

const SingleDestination = ({ destinations }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-red-500/25 bg-slate-950/60 px-6 py-16 text-center shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
          Archivfehler
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-50">
          Ort nicht gefunden
        </h1>

        <p className="mt-3 text-slate-300">
          Zu diesem Eintrag konnte im Archiv kein Reiseziel gefunden werden.
        </p>

        <button
          type="button"
          onClick={() => navigate("/destinations")}
          className="mt-6 rounded-xl border border-red-500/40 bg-red-400/10 px-5 py-2.5 font-semibold text-red-100 transition hover:bg-red-400/20"
        >
          Zurück zu den Reisezielen
        </button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-900/50 bg-slate-950/60 shadow-xl">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.title}
          className="h-72 w-full object-cover md:h-96"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Archiv-Eintrag
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-50 md:text-5xl">
            {destination.title}
          </h1>
        </div>
      </div>

      <div className="space-y-6 p-6 md:p-8">
        <p className="text-lg leading-8 text-slate-300">
          {destination.description}
        </p>

        <button
          type="button"
          onClick={() => navigate("/destinations")}
          className="rounded-xl border border-cyan-500/40 bg-cyan-400/10 px-5 py-2.5 font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
        >
          ← Alle Reiseziele
        </button>
      </div>
    </article>
  );
};

export default SingleDestination;
