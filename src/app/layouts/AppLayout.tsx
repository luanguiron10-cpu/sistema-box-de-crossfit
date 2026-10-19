import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useInstallation } from "../providers/InstallationProvider";
import { version } from "../../../package.json";
import { publicPath } from "../../config/publicPath";
export function AppLayout() {
  const c = useInstallation();
  useEffect(() => {
    document.title = `${c.name} · Demonstração`;
  }, [c.name]);
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (open)
      document.querySelector<HTMLElement>("#main-navigation a")?.focus();
  }, [open]);
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("page-title")?.focus();
  }, [location.pathname]);
  const links = [
    ["/", "Visão inicial", "01"],
    ["/gestor", "Painel do gestor", "02"],
    ["/professor", "Área do professor", "03"],
    ["/aluno", "Área do aluno", "04"],
  ];
  const modules = [
    ["students", "/alunos", "Alunos"],
    ["classes", "/turmas", "Turmas"],
    ["workouts", "/wods", "WODs"],
    ["results", "/resultados", "Resultados"],
  ].filter(([f]) => c.features[f as keyof typeof c.features]);
  const profile =
    location.pathname === "/professor"
      ? "professor"
      : location.pathname === "/aluno"
        ? "aluno"
        : "gestor";
  return (
    <div
      className="app-shell"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          menu.current?.focus();
        }
      }}
      style={{ "--accent": c.primaryColor } as React.CSSProperties}
    >
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Pular para o conteúdo
      </a>
      <aside
        className={`sidebar ${open ? "is-open" : ""}`}
        id="main-navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            menu.current?.focus();
          }
        }}
      >
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={publicPath(c.logo)} width="44" height="44" alt="" />
          <div>
            <strong>{c.name}</strong>
            <span>GESTÃO EM MOVIMENTO</span>
          </div>
        </Link>
        <div className="sidebar-label">ESPAÇO DE DEMONSTRAÇÃO</div>
        <nav aria-label="Navegação principal" onClick={() => setOpen(false)}>
          {links.map(([path, label, num]) => (
            <NavLink to={path} end key={path}>
              <span className="nav-number" aria-hidden="true">
                {num}
              </span>
              {label}
            </NavLink>
          ))}
          <div className="sidebar-label modules-label">EXPLORE OS MÓDULOS</div>
          {modules.map(([, path, label]) => (
            <NavLink to={path} key={path}>
              <span className="nav-dot" aria-hidden="true" />
              {label}
            </NavLink>
          ))}
          <NavLink to="/configuracoes">
            <span aria-hidden="true">⚙</span>Configurações do box
          </NavLink>
        </nav>
        <div className="sidebar-bottom">
          <span className="live-dot" />
          INSTALAÇÃO DEMONSTRATIVA<p>Uma base. A identidade do seu box.</p>
          <small>v{version} · Fundação frontend</small>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <button
            className="mobile-toggle"
            type="button"
            ref={menu}
            aria-label={open ? "Fechar navegação" : "Abrir navegação"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <span className="topbar-caption">
            BEM-VINDO AO SEU PRÓXIMO CAPÍTULO
          </span>
          <div className="profile-control">
            <label htmlFor="demo-profile">Visualização demo</label>
            <select
              id="demo-profile"
              value={profile}
              onChange={(e) => {
                setOpen(false);
                navigate(`/${e.target.value}`);
              }}
            >
              <option value="gestor">Gestor</option>
              <option value="professor">Professor</option>
              <option value="aluno">Aluno</option>
            </select>
            <span className="profile-avatar" aria-hidden="true">
              {profile[0].toUpperCase()}
            </span>
          </div>
        </header>
        <div className="demo-banner">
          <span className="live-dot" />
          <strong>Demonstração</strong>
          <span>Dados sintéticos · sem persistência · sem autenticação</span>
          <span className="demo-date">Data de referência: 17/10/2026</span>
        </div>
        <main id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
        <footer className="page-footer">
          <span>
            {c.name} · {c.tagline}
          </span>
          <span>Produto em desenvolvimento · v{version}</span>
        </footer>
      </div>
    </div>
  );
}
