import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-3xl border border-red-500/25 bg-slate-950/60 px-6 py-12 text-center shadow-xl">
      <img
        src="/kristalle-transparent-sparkles.gif"
        alt="Drei schwebende Kristalle über rotem Leuchten"
        className="mb-6 h-56 w-auto object-contain"
      />

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
        Archivfehler · 404
      </p>

      <h1 className="mt-2 text-4xl font-bold text-slate-50">
        Eintrag nicht gefunden
      </h1>

      <p className="mt-3 max-w-lg text-lg leading-7 text-slate-300">
        Diese Spur führt ins Leere. Der gesuchte Eintrag existiert nicht in den
        Ewigen Archiven.
      </p>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mt-7 rounded-xl border border-red-500/40 bg-red-400/10 px-6 py-3 font-semibold text-red-100 transition hover:bg-red-400/20"
      >
        ← Zurück
      </button>
    </div>
  );
};

export default NotFound;
