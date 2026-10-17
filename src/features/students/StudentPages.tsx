import { Link } from "react-router-dom";
import { useInstallation } from "../../app/providers/InstallationProvider";
import { EmptyState, PageHeading, Panel } from "../../components/ui/Primitives";
import { ClassList } from "../classes/ClassList";
import { WorkoutCard } from "../workouts/WorkoutCard";
import { PersonalRecords } from "../results/Results";
import { students } from "../../data/demo";
export function StudentPage() {
  const c = useInstallation();
  return (
    <>
      <PageHeading
        eyebrow="VISÃO DO ALUNO · DEMONSTRAÇÃO"
        title="Seu ritmo. Suas conquistas."
      />
      <p className="page-description">
        Atleta 01 · cada treino faz parte de uma jornada. Este histórico é
        ilustrativo.
      </p>
      <div className="two-columns workout-columns">
        <div>
          {c.features.classes && (
            <Panel title="Próximos treinos" detail="AGENDA ILUSTRATIVA">
              <ClassList compact />
              <p className="note">
                Horários de referência da demonstração. Nenhuma reserva foi
                realizada.
              </p>
            </Panel>
          )}
          {c.features.results && (
            <Panel title="Marcas pessoais" detail="PRS DEMO">
              <PersonalRecords />
            </Panel>
          )}
          <Panel title="Histórico ilustrativo">
            <div className="history-row">
              <span>16 OUT</span>
              <div>
                <strong>Treino de condicionamento</strong>
                <p>
                  Presença ilustrativa · 12 minutos · sem resultado registrado
                </p>
              </div>
            </div>
          </Panel>
        </div>
        {c.features.workouts ? (
          <WorkoutCard />
        ) : (
          <EmptyState title="Programação indisponível">
            WODs não estão habilitados nesta instalação.
          </EmptyState>
        )}
      </div>
    </>
  );
}
export function StudentsPage() {
  return (
    <>
      <PageHeading
        eyebrow="COMUNIDADE · DADOS SINTÉTICOS"
        title="Alunos do box"
      />
      <p className="page-description">
        Pessoas fictícias para explorar a estrutura da aplicação. Nenhum dado
        pessoal real.
      </p>
      <Panel title="Comunidade demonstrativa" detail="6 PERFIS ILUSTRATIVOS">
        <div className="table-scroll">
          <table>
            <caption className="sr-only">
              Alunos sintéticos e frequência semanal ilustrativa
            </caption>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Experiência ilustrativa</th>
                <th>Presenças demo · semana 12–17 out</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>
                    <span className="avatar">
                      {String(s.id).padStart(2, "0")}
                    </span>
                    <strong>{s.name}</strong>
                  </td>
                  <td>{s.level}</td>
                  <td>{s.visits} presenças ilustrativas</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}
export function NotFoundPage() {
  return (
    <>
      <PageHeading eyebrow="NAVEGAÇÃO" title="Página não encontrada" />
      <EmptyState title="Vamos voltar ao início?">
        O endereço não existe ou o módulo está desabilitado nesta instalação.
      </EmptyState>
      <Link className="button" to="/">
        Voltar ao início
      </Link>
    </>
  );
}
