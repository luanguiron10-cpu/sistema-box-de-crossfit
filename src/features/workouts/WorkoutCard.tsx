export function WorkoutCard() {
  return (
    <article className="workout-card">
      <div className="workout-top">
        <span className="tag">WOD DEMONSTRATIVO</span>
        <span>17 OUT</span>
      </div>
      <h2>
        Construir. Repetir.
        <br />
        Evoluir.
      </h2>
      <p className="workout-intro">
        Um treino, diferentes caminhos. A prescrição deve respeitar cada aluno.
      </p>
      <div className="workout-block">
        <span className="eyebrow">01 / PREPARAÇÃO</span>
        <p>8 min de mobilidade e aquecimento orientado</p>
      </div>
      <div className="workout-block">
        <span className="eyebrow">02 / CONDICIONAMENTO</span>
        <h3>AMRAP · 12 minutos</h3>
        <ul>
          <li>8 agachamentos livres</li>
          <li>6 flexões adaptadas</li>
          <li>200 m de corrida</li>
        </ul>
      </div>
      <footer>
        Sem coleta de pontuação nesta demonstração. A regra de registro será
        definida com o professor, incluindo trechos parciais. Adaptações não são
        comparadas entre si.
      </footer>
    </article>
  );
}
