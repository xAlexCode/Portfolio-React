import { useState } from "react";
import hamburgerslight from "../../assets/svg/hamburgerlight.svg"
import closelight from "../../assets/svg/closelight.svg"

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-teal-700/70">
      <div className="mx-auto flex items-center justify-between px-5 py-4">
        <p className="text-xl font-bold text-white">Portfolio</p>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <img src={closelight} alt="Close" className="size-5"/> : <img src={hamburgerslight} alt="Menu" className="size-5" />}
        </button>

        <nav
          className={`absolute left-0 top-full w-full flex-col gap-4 border-b border-white/10 bg-teal-700 px-5 py-4 text-white md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0 md:text-sm
            ${open ? "flex" : "hidden"}`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;