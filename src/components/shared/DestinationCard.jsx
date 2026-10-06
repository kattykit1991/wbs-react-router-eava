import { Link } from "react-router-dom";

const DestinationCard = ({ title, image, text, slug }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-cyan-900/40 bg-slate-950/60 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-950/30">
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </figure>

      <div className="space-y-3 p-6">
        <Link to={`/destinations/${slug}`} className="inline-block">
          <h2 className="text-xl font-semibold text-slate-50 transition-colors hover:text-cyan-300">
            {title}
          </h2>
        </Link>

        <p className="leading-6 text-slate-300">{text}</p>

        <Link
          to={`/destinations/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          Archiv-Eintrag öffnen <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default DestinationCard;
