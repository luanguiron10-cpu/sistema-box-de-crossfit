import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter, MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import a from "../../public/config/installation-a.json";
import b from "../../public/config/installation-b.json";
import { App, AppErrorBoundary } from "./App";
function start(path = "/", config: unknown = a) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: true, json: async () => config }),
  );
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}
describe("fundação navegável", () => {
  it("preserva a rota hash ao pular para o conteúdo e navegar", async () => {
    window.history.replaceState(null, "", "/sistema-box-de-crossfit/#/gestor");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, json: async () => a }),
    );
    try {
      render(
        <HashRouter>
          <App />
        </HashRouter>,
      );
      await screen.findByRole("heading", { name: "Um bom dia para evoluir." });
      await userEvent.click(
        screen.getByRole("link", { name: "Pular para o conteúdo" }),
      );
      expect(screen.getByRole("main")).toHaveFocus();
      expect(window.location.hash).toBe("#/gestor");
      await userEvent.click(
        screen.getByRole("link", { name: /Área do aluno/ }),
      );
      await waitFor(() => expect(window.location.hash).toBe("#/aluno"));
    } finally {
      window.history.replaceState(null, "", "/");
    }
  });
  it("identifica a instalação ativa no título sem acoplar a marca ao HTML", async () => {
    const initial = start("/", a);
    await waitFor(() =>
      expect(document.title).toBe("Arena Box · Demonstração"),
    );
    initial.unmount();
    start("/", b);
    await waitFor(() =>
      expect(document.title).toBe("Serra Training · Demonstração"),
    );
  });
  it("oculta lista de alunos embarcada quando módulo desabilitado", async () => {
    start("/professor", { ...a, features: { ...a.features, students: false } });
    await screen.findByRole("heading", { name: "Pessoas antes dos números." });
    expect(
      screen.queryByRole("heading", { name: "Alunos da turma · 07:00" }),
    ).not.toBeInTheDocument();
    expect(
      within(screen.getByRole("navigation")).queryByRole("link", {
        name: "Alunos",
      }),
    ).not.toBeInTheDocument();
  });
  it("apresenta reservas e capacidade consistentes com a agenda", async () => {
    start("/gestor");
    await screen.findByRole("heading", { name: "Um bom dia para evoluir." });
    const metric = screen
      .getByText("Reservas ilustrativas")
      .closest("article")!;
    expect(within(metric).getByText("36")).toBeInTheDocument();
    expect(within(metric).getByText("De 44 vagas demo")).toBeInTheDocument();
  });
  it("associa nome inválido ao campo de nome na prévia", async () => {
    start("/configuracoes");
    const name = await screen.findByLabelText("Nome do box");
    await userEvent.clear(name);
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveAttribute("aria-describedby", "preview-error");
    expect(
      screen.getByLabelText("Cor de destaque (hexadecimal)"),
    ).toHaveAttribute("aria-invalid", "false");
  });
  it("renderiza o início e deixa limites demonstrativos explícitos", async () => {
    start();
    expect(
      await screen.findByRole("heading", {
        name: "Mais conexão. Mais evolução.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Dados sintéticos · sem persistência · sem autenticação",
      ),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Pular para o conteúdo" }),
    ).toHaveAttribute("href", "#main-content");
  });
  it("navega e transfere foco ao título", async () => {
    const user = userEvent.setup();
    start();
    await screen.findByRole("heading", {
      name: "Mais conexão. Mais evolução.",
    });
    await user.click(screen.getByRole("link", { name: "Painel do gestor" }));
    expect(
      await screen.findByRole("heading", { name: "Um bom dia para evoluir." }),
    ).toHaveFocus();
    expect(
      screen.getByRole("link", { name: "Painel do gestor" }),
    ).toHaveAttribute("aria-current", "page");
  });
  it("alterna visão demonstrativa sem autenticação", async () => {
    const user = userEvent.setup();
    start();
    await screen.findByRole("heading", {
      name: "Mais conexão. Mais evolução.",
    });
    await user.selectOptions(
      screen.getByLabelText("Visualização demo"),
      "professor",
    );
    expect(
      await screen.findByRole("heading", {
        name: "Pessoas antes dos números.",
      }),
    ).toBeVisible();
    await user.selectOptions(
      screen.getByLabelText("Visualização demo"),
      "aluno",
    );
    expect(
      await screen.findByRole("heading", {
        name: "Seu ritmo. Suas conquistas.",
      }),
    ).toBeVisible();
  });
  it("apresenta estados vazios sem afirmar resultado salvo", async () => {
    start("/resultados");
    expect(
      await screen.findByRole("heading", {
        name: "Sem resultados nesta demonstração",
      }),
    ).toBeVisible();
  });
  it("respeita configuração B e módulo desabilitado também na rota direta", async () => {
    start("/resultados", b);
    expect(
      await screen.findByRole("heading", { name: "Página não encontrada" }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: /Serra Training/ }),
    ).toBeInTheDocument();
    expect(
      within(screen.getByRole("navigation")).queryByRole("link", {
        name: "Resultados",
      }),
    ).not.toBeInTheDocument();
  });
  it("valida prévia e não persiste alterações ao sair", async () => {
    const user = userEvent.setup();
    start("/configuracoes");
    const name = await screen.findByLabelText("Nome do box");
    await user.clear(name);
    await user.type(name, "Box Temporário");
    await user.clear(screen.getByLabelText("Cor de destaque (hexadecimal)"));
    await user.type(
      screen.getByLabelText("Cor de destaque (hexadecimal)"),
      "#ffffff",
    );
    expect(screen.getByRole("alert")).toHaveTextContent("contraste");
    await user.click(screen.getByRole("link", { name: "Visão inicial" }));
    await user.click(
      screen.getByRole("link", { name: /Configurações do box/ }),
    );
    expect(screen.getByLabelText("Nome do box")).toHaveValue("Arena Box");
  });
  it("menu informa estado, fecha com Escape e devolve foco", async () => {
    const user = userEvent.setup();
    start();
    await screen.findByRole("heading", {
      name: "Mais conexão. Mais evolução.",
    });
    const button = screen.getByRole("button", { name: "Abrir navegação" });
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
  });
  it("foca erro de configuração e permite recuperação", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({}) })
      .mockResolvedValueOnce({ ok: true, json: async () => a });
    vi.stubGlobal("fetch", fetchMock);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(
      await screen.findByRole("heading", { name: "Configuração indisponível" }),
    ).toHaveFocus();
    await userEvent.click(
      screen.getByRole("button", { name: "Tentar novamente" }),
    );
    expect(
      await screen.findByRole("heading", {
        name: "Mais conexão. Mais evolução.",
      }),
    ).toBeVisible();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
  it("captura falhas inesperadas de renderização", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    function Broken(): never {
      throw new Error("sintético");
    }
    render(
      <AppErrorBoundary>
        <Broken />
      </AppErrorBoundary>,
    );
    expect(
      screen.getByRole("heading", {
        name: "Não foi possível exibir esta tela",
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("button", { name: "Recarregar aplicação" }),
    ).toBeEnabled();
  });
  it("não mantém estado de carregamento após falha de rede", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Configuração indisponível" }),
      ).toBeVisible(),
    );
  });
});
