import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navLinks, site, whatsappHref } from "../data/site";

export default function Layout() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <NavLink
            to="/"
            className="logo"
            aria-label="PurpleRain Events & Hire"
            onClick={() => setOpen(false)}
          >
            <span className="logo-crop">
              <img src="/logo.png" alt="PurpleRain Events & Hire" />
            </span>
          </NavLink>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-cta">
            <a className="btn btn-gold header-whatsapp" href={whatsappHref()}>
              <span className="cta-full">Enquire on WhatsApp</span>
              <span className="cta-short">WhatsApp</span>
            </a>
            <button
              className="menu-btn"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <nav className={`wrap mobile-nav ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <NavLink to="/" className="logo" aria-label="PurpleRain Events & Hire" style={{ marginBottom: "0.9rem" }}>
              <span className="logo-crop">
                <img src="/logo.png" alt="PurpleRain Events & Hire" />
              </span>
            </NavLink>
            <p>
              Exclusive events, furniture rentals and décor for weddings,
              celebrations and private functions across {site.city}.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <nav>
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            <h3>Enquire</h3>
            <p>
              {site.address}
              <br />
              {site.suburb}, {site.city}
            </p>
            <p>{site.region}</p>
            <p>{site.phoneDisplay} · {site.phoneAlt}</p>
            <p>{site.hours}</p>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="wrap copyright">
          © {new Date().getFullYear()} PurpleRain Events & Hire. Pretoria.
        </div>
      </footer>
    </>
  );
}
