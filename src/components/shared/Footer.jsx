import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-cyan-900/40 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="EAvA – Ewige Archive von Aeth’Vharis"
            className="h-12 w-12 object-contain"
          />
          <div>
            <p className="font-semibold tracking-wide text-slate-100">EAvA</p>
            <p className="text-sm text-slate-400">
              Ewige Archive von Aeth’Vharis
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            to="/"
            className="text-slate-400 transition hover:text-cyan-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-slate-400 transition hover:text-cyan-300"
          >
            About
          </Link>

          <Link
            to="/destinations"
            className="text-slate-400 transition hover:text-cyan-300"
          >
            Destinations
          </Link>

          <Link
            to="/contact"
            className="text-slate-400 transition hover:text-cyan-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
