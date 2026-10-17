import { describe, expect, it } from "vitest";
import a from "../../public/config/installation-a.json";
import b from "../../public/config/installation-b.json";
import { configPath, validateConfig } from "./installation";
describe("contrato público por instalação", () => {
  it("permite configurações A/B da mesma aplicação", () => {
    expect(validateConfig(a).name).toBe("Arena Box");
    expect(validateConfig(b).units).toBe("lb");
    expect(validateConfig(b).features.results).toBe(false);
  });
  it("não aceita backend, segredos ou campos desconhecidos", () => {
    expect(() =>
      validateConfig({ ...a, url: "https://example.invalid" }),
    ).toThrow();
  });
  it.each([
    "https://example.invalid/logo.svg",
    "data:image/svg+xml,a",
    "/assets/../logo.svg",
    "/assets/logo.svg?x=1",
  ])("rejeita logo não local seguro %s", (logo) => {
    expect(() => validateConfig({ ...a, logo })).toThrow();
  });
  it("permite novo ativo autorizado sem editar fonte", () => {
    expect(validateConfig({ ...a, logo: "/assets/novo-box.svg" }).logo).toBe(
      "/assets/novo-box.svg",
    );
  });
  it.each([
    { primaryColor: "#ffffff" },
    { primaryColor: "red" },
    { timezone: "Invalid/Zone" },
    { units: "g" },
    { features: { students: true } },
  ])("rejeita configuração inválida %o", (override) =>
    expect(() => validateConfig({ ...a, ...override })).toThrow(),
  );
  it("restringe caminho a configuração local sem parâmetros", () => {
    expect(configPath("/config/installation-b.json")).toBe(
      "/config/installation-b.json",
    );
    expect(() => configPath("https://example.invalid/a.json")).toThrow();
    expect(() => configPath("/config/../a.json")).toThrow();
  });
});
