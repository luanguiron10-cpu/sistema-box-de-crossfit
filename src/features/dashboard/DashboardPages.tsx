import { Link } from "react-router-dom";
import { useInstallation } from "../../app/providers/InstallationProvider";
import { PageHeading, Panel } from "../../components/ui/Primitives";
import { ClassList } from "../classes/ClassList";
import { WorkoutCard } from "../workouts/WorkoutCard";
import { students, classes } from "../../data/demo";
export function HomePage() {
  const config = useInstallation();
  return (
    <>
      <PageHeading
        eyebrow="SEU BOX, EM MOVIMENTO"
        title="Mais conexão. Mais evolução."
      />
      <section className="hero">
        <div>
          <span className="tag">FUNDAÇÃO DO PRODUTO · VERSÃO DEMO</span>
          <h2>
            O próximo passo
            <br />
            começa aqui.
          </h2>
          <p>
            Uma visão clara da rotina do {config.name}. Pessoas, treinos e
            evolução no mesmo lugar.
          </p>
          <Link className="button" to="/gestor">
            Explorar painel <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="art-top">
            CONSISTÊNCIA
            <br />
            CRIA EVOLUÇÃO
          </span>
          <strong>
            01<span>/ UM DIA DE CADA VEZ</span>
          </strong>
          <span className="art-bottom">FORÇA + COMUNIDADE</span>
        </div>
      </section>
      <div className="section-title">
        <h2>Seu ponto de partida</h2>
        <span>Três perspectivas. Uma comunidade.</span>
      </div>
      <div className="role-cards">
        {[
          [
            "01",
            "Gestão com clareza",
            "Acompanhe a rotina do box, turmas e indicadores ilustrativos.",
            "/gestor",
            "Visão do gestor",
          ],
          [
            "02",
            "Ensinar e acompanhar",
            "Consulte turmas do dia e uma programação demonstrativa.",
            "/professor",
            "Visão do professor",
          ],
          [
            "03",
            "Cada conquista conta",
            "Explore seus próximos treinos e marcas ilustrativas.",
            "/aluno",
            "Visão do aluno",
          ],
        ].map(([n, t, d, path, label]) => (
          <Link className="role-card" key={path} to={path}>
            <span className="card-number">
              {n}
              <span aria-hidden="true">↗</span>
            </span>
            <h3>{t}</h3>
            <p>{d}</p>
            <span className="text-link">{label}</span>
          </Link>
        ))}
      </div>
      <p className="note">
        Esta é uma prévia navegável. Não há autenticação, reservas, registros
        esportivos ou dados persistidos.
      </p>
    </>
  );
}
function ActivityChart() {
  return (
    <div className="activity-chart">
      <div className="chart-summary">
        <strong>
          80<span>%</span>
        </strong>
        <div>
          <span className="positive">72 presenças ilustrativas</span>
          <p>de 90 reservas na semana demo · 12–17 out</p>
        </div>
      </div>
      <div
        className="bars"
        role="img"
        aria-label="Presenças ilustrativas: segunda 10, terça 14, quarta 12, quinta 16, sexta 12, sábado 8. Total 72."
      >
        {[10, 14, 12, 16, 12, 8].map((v, i) => (
          <div key={i}>
            <span
              className={i === 3 ? "highlight" : ""}
              style={{ height: `${v * 6}px` }}
            />
            <small>{["SEG", "TER", "QUA", "QUI", "SEX", "SÁB"][i]}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
export function ManagerPage() {
  const c = useInstallation();
  return (
    <>
      <PageHeading
        eyebrow="VISÃO DO GESTOR · DEMONSTRAÇÃO"
        title="Um bom dia para evoluir."
      >
        <span className="date-chip">17 OUT 2026</span>
      </PageHeading>
      <p className="page-description">
        A rotina do box em perspectiva. Todos os indicadores abaixo são
        sintéticos.
      </p>
      <div className="stats-grid">
        {[
          ["Alunos ilustrativos", "48", "Comunidade demo"],
          ["Turmas de hoje", "3", "Sábado · 17 de outubro"],
          [
            "Reservas ilustrativas",
            String(classes.reduce((total, item) => total + item.booked, 0)),
            `De ${classes.reduce((total, item) => total + item.capacity, 0)} vagas demo`,
          ],
          ["Frequência ilustrativa", "80%", "72 presenças / 90 reservas"],
        ].map(([label, value, detail]) => (
          <article className="stat-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{detail}</small>
          </article>
        ))}
      </div>
      <div className="two-columns">
        <Panel title="Ritmo da semana" detail="12–17 OUT · DEMO">
          <ActivityChart />
        </Panel>
        <Panel title="Agenda de hoje" detail="DADOS SINTÉTICOS">
          {c.features.classes ? (
            <ClassList compact />
          ) : (
            <p className="note">
              Módulo de turmas desabilitado nesta instalação.
            </p>
          )}
        </Panel>
      </div>
      <div className="section-title">
        <h2>Acesse os módulos</h2>
        <span>Explore as visões demonstrativas</span>
      </div>
      <div className="module-links">
        {[
          ["students", "/alunos", "Alunos", "Perfis sintéticos"],
          ["classes", "/turmas", "Turmas", "Horários e capacidade"],
          ["workouts", "/wods", "WODs", "Programação do dia"],
          ["results", "/resultados", "Resultados", "Marcas contextualizadas"],
        ]
          .filter(([feature]) => c.features[feature as keyof typeof c.features])
          .map(([, path, label, desc]) => (
            <Link to={path} key={path}>
              <strong>
                {label}
                <span aria-hidden="true">↗</span>
              </strong>
              <span>{desc}</span>
            </Link>
          ))}
      </div>
    </>
  );
}
export function TeacherPage() {
  const c = useInstallation();
  return (
    <>
      <PageHeading
        eyebrow="VISÃO DO PROFESSOR · DEMONSTRAÇÃO"
        title="Pessoas antes dos números."
      />
      <p className="page-description">
        Organize o dia, acompanhe a turma e inspire o próximo movimento.
      </p>
      <div className="two-columns workout-columns">
        <div>
          <Panel title="Turmas de hoje" detail="17 OUT · DEMO">
            {c.features.classes ? (
              <ClassList />
            ) : (
              <p className="note">Turmas desabilitadas nesta instalação.</p>
            )}
          </Panel>
          {c.features.students && (
            <Panel title="Alunos da turma · 07:00" detail="LISTA ILUSTRATIVA">
              <ul className="athlete-list">
                {students.slice(0, 4).map((s) => (
                  <li key={s.id}>
                    <span className="avatar">
                      {String(s.id).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{s.name}</strong>
                      <small>{s.level}</small>
                    </div>
                    <span className="muted">Reserva demo</span>
                  </li>
                ))}
              </ul>
              <p className="note">
                Reserva não confirma presença. Chamada e registros serão
                implementados em etapa futura.
              </p>
            </Panel>
          )}
        </div>
        {c.features.workouts ? (
          <WorkoutCard />
        ) : (
          <Panel title="Programação desabilitada">
            <p>O módulo de WOD não está habilitado nesta instalação.</p>
          </Panel>
        )}
      </div>
    </>
  );
}
