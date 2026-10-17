import { useInstallation } from "../../app/providers/InstallationProvider";
export function PersonalRecords() {
  const c = useInstallation();
  return (
    <div className="records">
      <article>
        <span className="record-mark" aria-hidden="true">
          ↗
        </span>
        <div>
          <h3>Agachamento frontal</h3>
          <p>1 repetição · barra livre · marca demonstrativa</p>
        </div>
        <strong>
          {c.units === "kg" ? "70" : "154,3"}
          <small>{c.units}</small>
        </strong>
      </article>
      <article>
        <span className="record-mark" aria-hidden="true">
          ↗
        </span>
        <div>
          <h3>Levantamento terra</h3>
          <p>3 repetições · barra livre · marca demonstrativa</p>
        </div>
        <strong>
          {c.units === "kg" ? "90" : "198,4"}
          <small>{c.units}</small>
        </strong>
      </article>
      <p className="note">
        PR = recorde pessoal em um contexto comparável. Valores sintéticos
        equivalentes aproximados em kg/lb; não calculados a partir de registros
        reais.
      </p>
    </div>
  );
}
