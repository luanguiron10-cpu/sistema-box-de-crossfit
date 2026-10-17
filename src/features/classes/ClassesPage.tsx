import { PageHeading, Panel } from "../../components/ui/Primitives";
import { ClassList } from "./ClassList";
export function ClassesPage() {
  return (
    <>
      <PageHeading
        eyebrow="AGENDA · DEMONSTRAÇÃO"
        title="Turmas que conectam"
      />
      <p className="page-description">
        Sábado, 17 de outubro de 2026 · capacidade e reservas ilustrativas, sem
        registro de presença.
      </p>
      <Panel title="Turmas do dia" detail="3 HORÁRIOS">
        <ClassList />
      </Panel>
      <p className="note">
        Reserva, presença e resultado são conceitos distintos. Agendamentos e
        chamada ainda não estão disponíveis.
      </p>
    </>
  );
}
