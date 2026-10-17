import { PageHeading, Panel, EmptyState } from "../../components/ui/Primitives";
import { WorkoutCard } from "./WorkoutCard";
export function WorkoutsPage() {
  return (
    <>
      <PageHeading
        eyebrow="PROGRAMAÇÃO · DEMONSTRAÇÃO"
        title="O treino de hoje"
      />
      <div className="two-columns workout-columns">
        <WorkoutCard />
        <Panel title="Benchmarks">
          <EmptyState title="O próximo marco está por vir">
            Nenhum benchmark nesta demonstração. Um benchmark é um treino
            padronizado e reutilizável para acompanhar evolução comparável.
          </EmptyState>
        </Panel>
      </div>
    </>
  );
}
