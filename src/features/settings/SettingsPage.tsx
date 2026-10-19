import { useState } from "react";
import { useInstallation } from "../../app/providers/InstallationProvider";
import { PageHeading, Panel } from "../../components/ui/Primitives";
import { validateConfig } from "../../config/installation";
import { version } from "../../../package.json";
import { publicPath } from "../../config/publicPath";
export function SettingsPage() {
  const config = useInstallation();
  const [name, setName] = useState(config.name);
  const [color, setColor] = useState(config.primaryColor);
  const [logo, setLogo] = useState(config.logo);
  let error = "";
  try {
    validateConfig({ ...config, name, primaryColor: color, logo });
  } catch (e) {
    error = (e as Error).message;
  }
  return (
    <>
      <PageHeading
        eyebrow="IDENTIDADE · CONFIGURAÇÃO PÚBLICA"
        title="Um box com a sua identidade."
      />
      <p className="page-description">
        Prévia temporária, apenas nesta página. Nenhuma alteração é salva ou
        aplicada à instalação.
      </p>
      <div className="two-columns">
        <Panel title="Explore a personalização">
          <div className="form-fields">
            <label htmlFor="box-name">Nome do box</label>
            <input
              id="box-name"
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!name.trim()}
              aria-describedby={!name.trim() ? "preview-error" : "preview-help"}
            />
            <label htmlFor="box-color">Cor de destaque (hexadecimal)</label>
            <input
              id="box-color"
              value={color}
              maxLength={7}
              onChange={(e) => setColor(e.target.value)}
              aria-invalid={!!error && !!name.trim()}
              aria-describedby={error ? "preview-error" : "preview-help"}
            />
            <label htmlFor="box-logo">Símbolo demonstrativo</label>
            <select
              id="box-logo"
              value={logo}
              onChange={(e) => setLogo(e.target.value as typeof logo)}
            >
              <option value="/assets/arena.svg">Arena</option>
              <option value="/assets/serra.svg">Serra</option>
            </select>
            <p id="preview-help" className="note">
              Ativos locais originais. Recarregar ou sair da página descarta a
              prévia. Para configuração de instalação, consulte o manual local.
            </p>
            {error && (
              <p id="preview-error" role="alert" className="error-message">
                {error}
              </p>
            )}
            <button
              className="button secondary"
              type="button"
              onClick={() => {
                setName(config.name);
                setColor(config.primaryColor);
                setLogo(config.logo);
              }}
            >
              Restaurar prévia
            </button>
          </div>
        </Panel>
        <div>
          <Panel title="Prévia de identidade" detail="SEM PERSISTÊNCIA">
            <div
              className="brand-preview"
              style={{ borderColor: error ? config.primaryColor : color }}
            >
              <img src={publicPath(logo)} alt="" width="64" height="64" />
              <h2>{name.trim() || "Nome do box"}</h2>
              <p>{config.tagline}</p>
              <span
                className="preview-label"
                style={{ backgroundColor: error ? config.primaryColor : color }}
              >
                Sua próxima conquista começa aqui
              </span>
            </div>
          </Panel>
          <Panel title="Esta instalação">
            <dl className="config-details">
              <div>
                <dt>Identificador público</dt>
                <dd>{config.id}</dd>
              </div>
              <div>
                <dt>Fuso horário</dt>
                <dd>{config.timezone}</dd>
              </div>
              <div>
                <dt>Unidade de carga</dt>
                <dd>{config.units}</dd>
              </div>
              <div>
                <dt>Versão da aplicação</dt>
                <dd>{version}</dd>
              </div>
              <div>
                <dt>Dados e operação</dt>
                <dd>Demonstração local · sem backend</dd>
              </div>
            </dl>
          </Panel>
        </div>
      </div>
    </>
  );
}
