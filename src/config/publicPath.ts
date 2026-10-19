/** Only validated, local public assets/configuration may be resolved below the deployment base. */
export function publicPath(path: string): string {
  if (
    !/^\/(?:assets\/[a-z0-9-]+\.(?:svg|png|webp)|config\/[a-z0-9-]+\.json)$/.test(
      path,
    )
  ) {
    throw new Error("Caminho público local inválido.");
  }
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}
