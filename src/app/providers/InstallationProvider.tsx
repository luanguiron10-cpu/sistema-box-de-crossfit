import { createContext, useContext } from "react";
import type { InstallationConfig } from "../../types/installation";
export const InstallationContext = createContext<InstallationConfig | null>(
  null,
);
export function useInstallation() {
  const config = useContext(InstallationContext);
  if (!config) throw new Error("Configuração não disponível.");
  return config;
}
