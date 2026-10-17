import { PageHeading, Panel, EmptyState } from "../../components/ui/Primitives";
import { PersonalRecords } from "./Results";
export function ResultsPage() {
  return (
    <>
      <PageHeading
        eyebrow="EVOLUÇÃO · DEMONSTRAÇÃO"
        title="Cada conquista tem contexto."
      />
      <Panel title="Marcas ilustrativas · Atleta 01">
        <PersonalRecords />
      </Panel>
      <Panel title="Resultados de WOD">
        <EmptyState title="Sem resultados nesta demonstração">
          Nenhum resultado foi registrado. Futuramente, prescrição, adaptação e
          regra de pontuação serão consideradas antes de qualquer comparação.
        </EmptyState>
      </Panel>
    </>
  );
}
