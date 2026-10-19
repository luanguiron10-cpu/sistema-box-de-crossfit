import { afterEach, describe, expect, it, vi } from "vitest";
import { publicPath } from "./publicPath";
import { loadConfig } from "./installation";
import a from "../../public/config/installation-a.json";

afterEach(() => vi.unstubAllEnvs());
describe("caminhos públicos em implantação sob subdiretório", () => {
  it("resolve logos e configurações na base Vite", async () => {
    vi.stubEnv("BASE_URL", "/sistema-box-de-crossfit/");
    expect(publicPath("/assets/arena.svg")).toBe(
      "/sistema-box-de-crossfit/assets/arena.svg",
    );
    const request = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => a });
    vi.stubGlobal("fetch", request);
    await loadConfig();
    expect(request).toHaveBeenCalledWith(
      "/sistema-box-de-crossfit/config/installation-a.json",
      { cache: "no-store" },
    );
  });
  it("continua suportando base raiz", () => {
    vi.stubEnv("BASE_URL", "/");
    expect(publicPath("/assets/serra.svg")).toBe("/assets/serra.svg");
  });
  it.each([
    "https://example.invalid/logo.svg",
    "//example.invalid/a.svg",
    "/assets/../logo.svg",
    "/assets/logo.svg?x=1",
    "/config/a.json#x",
    "/other/a.json",
  ])("rejeita caminho não permitido %s", (path) => {
    expect(() => publicPath(path)).toThrow("Caminho público local inválido.");
  });
});
