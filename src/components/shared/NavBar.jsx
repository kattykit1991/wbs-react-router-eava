import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-cyan-300 ${
      isActive ? "text-cyan-300" : "text-slate-200"
    }`;

  return (
    <header className="border-b border-cyan-900/50 bg-slate-950 shadow-lg">
      <div className="navbar mx-auto max-w-7xl px-4">
        <div className="flex-1">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="EAvA – Ewige Archive von Aeth’Vharis"
              className="h-14 w-14 object-contain"
            />

            <div className="hidden sm:block">
              <p className="text-lg font-semibold tracking-wide text-slate-100">
                EAvA
              </p>
              <p className="text-xs text-slate-400">
                Ewige Archive von Aeth’Vharis
              </p>
            </div>
          </NavLink>
        </div>

        <nav className="flex-none">
          <ul className="menu menu-horizontal gap-1 px-1">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/destinations" className={navLinkClass}>
                Destinations
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
