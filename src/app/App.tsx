import { Component, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { loadConfig } from "../config/installation";
import type { InstallationConfig } from "../types/installation";
import { InstallationContext } from "./providers/InstallationProvider";
import { AppRoutes } from "./routes/AppRoutes";
export class AppErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <div className="boot-state">
          <h1>Não foi possível exibir esta tela</h1>
          <p>Ocorreu um erro inesperado. Seus dados não foram alterados.</p>
          <button className="button" onClick={() => window.location.reload()}>
            Recarregar aplicação
          </button>
        </div>
      );
    return this.props.children;
  }
}
export function App() {
  const [config, setConfig] = useState<InstallationConfig | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const errorHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    let active = true;
    loadConfig()
      .then((c) => {
        if (active) setConfig(c);
      })
      .catch(() => {
        if (active) setError(true);
      });
    return () => {
      active = false;
    };
  }, [attempt]);
  useEffect(() => {
    if (error) errorHeading.current?.focus();
  }, [error]);
  if (error)
    return (
      <div className="boot-state">
        <h1 tabIndex={-1} ref={errorHeading}>
          Configuração indisponível
        </h1>
        <p>
          Verifique o arquivo público local da instalação e tente novamente.
          Nenhum serviço externo é necessário.
        </p>
        <button
          className="button"
          onClick={() => {
            setError(false);
            setAttempt((v) => v + 1);
          }}
        >
          Tentar novamente
        </button>
      </div>
    );
  if (!config)
    return (
      <div className="boot-state" role="status">
        Preparando a demonstração…
      </div>
    );
  return (
    <InstallationContext value={config}>
      <AppRoutes />
    </InstallationContext>
  );
}
