import { classes } from "../../data/demo";
export function ClassList({ compact = false }: { compact?: boolean }) {
  return (
    <div className="class-list">
      {classes.slice(0, compact ? 2 : 3).map((c) => (
        <article className="class-row" key={c.time}>
          <div className="class-time">
            {c.time}
            <small>{c.duration}</small>
          </div>
          <div className="class-info">
            <h3>{c.name}</h3>
            <p>{c.coach}</p>
            <div
              className="capacity"
              aria-label={`${c.booked} reservas ilustrativas de ${c.capacity} vagas`}
            >
              <span style={{ width: `${(c.booked / c.capacity) * 100}%` }} />
            </div>
          </div>
          <span className={`pill ${c.booked === c.capacity ? "full" : ""}`}>
            {c.booked}/{c.capacity}
            <small>reservas demo</small>
          </span>
        </article>
      ))}
    </div>
  );
}
