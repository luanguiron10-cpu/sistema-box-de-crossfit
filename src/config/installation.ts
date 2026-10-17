import type { Feature, InstallationConfig } from "../types/installation";

export const featureKeys: Feature[] = [
  "students",
  "classes",
  "workouts",
  "results",
];
const fields = [
  "id",
  "name",
  "tagline",
  "logo",
  "primaryColor",
  "timezone",
  "units",
  "features",
];
export function validateConfig(value: unknown): InstallationConfig {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("Configuração deve ser um objeto.");
  const c = value as Record<string, unknown>;
  if (
    Object.keys(c).some((k) => !fields.includes(k)) ||
    fields.some((k) => !(k in c))
  )
    throw new Error("Campos de configuração inválidos.");
  if (typeof c.id !== "string" || !/^[a-z0-9-]{1,40}$/.test(c.id))
    throw new Error("Identificação inválida.");
  for (const k of ["name", "tagline"])
    if (
      typeof c[k] !== "string" ||
      !(c[k] as string).trim() ||
      (c[k] as string).length > 100
    )
      throw new Error("Nome ou descrição inválidos.");
  if (
    typeof c.logo !== "string" ||
    !/^\/assets\/[a-z0-9-]+\.(svg|png|webp)$/.test(c.logo)
  )
    throw new Error("Logo local inválido.");
  if (
    typeof c.primaryColor !== "string" ||
    !/^#[0-9a-f]{6}$/i.test(c.primaryColor)
  )
    throw new Error("Cor inválida.");
  // White text on this accent must meet WCAG AA contrast, including customized previews.
  const channels = c.primaryColor
    .slice(1)
    .match(/../g)!
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  if (
    1.05 /
      (channels[0] * 0.2126 +
        channels[1] * 0.7152 +
        channels[2] * 0.0722 +
        0.05) <
    4.5
  )
    throw new Error("Escolha uma cor com contraste acessível sobre branco.");
  if (typeof c.timezone !== "string") throw new Error("Fuso inválido.");
  try {
    new Intl.DateTimeFormat("pt-BR", { timeZone: c.timezone }).format();
  } catch {
    throw new Error("Fuso inválido.");
  }
  if (!["kg", "lb"].includes(String(c.units)))
    throw new Error("Unidade inválida.");
  if (
    !c.features ||
    typeof c.features !== "object" ||
    Array.isArray(c.features) ||
    Object.keys(c.features).length !== featureKeys.length ||
    featureKeys.some(
      (k) => typeof (c.features as Record<string, unknown>)[k] !== "boolean",
    )
  )
    throw new Error("Funcionalidades inválidas.");
  return c as unknown as InstallationConfig;
}
export function configPath(
  path = import.meta.env.VITE_INSTALLATION_CONFIG ||
    "/config/installation-a.json",
) {
  if (!/^\/config\/[a-z0-9-]+\.json$/.test(path))
    throw new Error("Use um arquivo JSON local em /config/.");
  return path;
}
export async function loadConfig(): Promise<InstallationConfig> {
  const response = await fetch(configPath(), { cache: "no-store" });
  if (!response.ok)
    throw new Error("Não foi possível carregar a configuração local.");
  return validateConfig(await response.json());
}
