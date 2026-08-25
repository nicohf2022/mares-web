import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/maresIcon.webp";

const navItems = [
  { label: "Inicio", to: "/", index: "01" },
  { label: "Nosotros", to: "/nosotros", index: "02" },
  { label: "Servicios", to: "/ofrecemos", index: "03" },
  { label: "Trabajos", to: "/#trabajos", index: "04" },
];

export default function Header() {
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWorkSectionActive, setIsWorkSectionActive] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsWorkSectionActive(false);
      return undefined;
    }

    const updateActiveSection = () => {
      const workSection = document.getElementById("trabajos");
      if (!workSection) {
        setIsWorkSectionActive(false);
        return;
      }

      const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
      const bounds = workSection.getBoundingClientRect();
      const scrollMargin = Number.parseFloat(
        window.getComputedStyle(workSection).scrollMarginTop,
      ) || 0;
      const activationLine = Math.max(
        headerOffset,
        scrollMargin,
        window.innerHeight * 0.4,
      );
      setIsWorkSectionActive(
        bounds.top <= activationLine && bounds.bottom > activationLine,
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", isOpen);
    const backgroundElements = [
      document.querySelector("main"),
      document.querySelector("footer"),
      document.querySelector(".whatsapp-link"),
      document.querySelector(".skip-link"),
    ].filter(Boolean);

    backgroundElements.forEach((element) => {
      element.toggleAttribute("inert", isOpen);
    });

    if (isOpen) firstMenuLinkRef.current?.focus();

    const closeOnEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-is-open");
      backgroundElements.forEach((element) => element.removeAttribute("inert"));
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const isActive = (to) => {
    const [pathname, hash] = to.split("#");
    if (hash) {
      return location.pathname === pathname && isWorkSectionActive;
    }
    if (to === "/ofrecemos" && location.pathname.startsWith("/servicio/")) {
      return true;
    }
    if (to === "/") {
      return location.pathname === to && !isWorkSectionActive;
    }
    return location.pathname === to;
  };

  const handleNavClick = (event, to) => {
    const [pathname, hash] = to.split("#");
    const isCurrentHash =
      hash && location.pathname === pathname && location.hash === `#${hash}`;

    if (hash === "trabajos") setIsWorkSectionActive(true);
    if (!isCurrentHash) return;

    event.preventDefault();
    setIsOpen(false);
    document.getElementById(hash)?.scrollIntoView({ block: "start" });
    window.dispatchEvent(new Event("scroll"));
  };

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`}
    >
      <div className="site-header__inner shell">
        <Link className="site-brand" to="/" aria-label="Mares, ir al inicio">
          <img
            src={logo}
            alt="Logo Mares"
            width="651"
            height="651"
            fetchPriority="high"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={(event) => handleNavClick(event, item.to)}
              className={isActive(item.to) ? "is-active" : undefined}
              aria-current={
                isActive(item.to)
                  ? item.to.includes("#")
                    ? "location"
                    : "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" to="/contacto">
          Solicitar presupuesto <span aria-hidden="true">↗</span>
        </Link>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className="mobile-menu" aria-hidden={!isOpen}>
        <nav className="mobile-menu__nav shell" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <Link
              key={item.to}
              ref={item.index === "01" ? firstMenuLinkRef : undefined}
              to={item.to}
              onClick={(event) => handleNavClick(event, item.to)}
              tabIndex={isOpen ? 0 : -1}
              aria-current={
                isActive(item.to)
                  ? item.to.includes("#")
                    ? "location"
                    : "page"
                  : undefined
              }
            >
              <span>{item.index}</span>
              {item.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link
            className="mobile-menu__cta"
            to="/contacto"
            tabIndex={isOpen ? 0 : -1}
          >
            Hablemos <span aria-hidden="true">→</span>
          </Link>
        </nav>
        <div className="mobile-menu__meta shell">
          <span>Maldonado · Uruguay</span>
          <span>Obras civiles · Infraestructura</span>
        </div>
      </div>
    </header>
  );
}
