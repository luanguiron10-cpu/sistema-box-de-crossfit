export const demoDate = "Sábado, 17 de outubro de 2026";
export const classes = [
  {
    time: "07:00",
    name: "CrossFit · Base",
    coach: "Professor demo 01",
    booked: 12,
    capacity: 16,
    duration: "60 min",
  },
  {
    time: "09:00",
    name: "CrossFit · Comunidade",
    coach: "Professor demo 02",
    booked: 16,
    capacity: 16,
    duration: "60 min",
  },
  {
    time: "11:00",
    name: "Técnica de levantamento",
    coach: "Professor demo 01",
    booked: 8,
    capacity: 12,
    duration: "45 min",
  },
];
export const students = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Atleta ${String(i + 1).padStart(2, "0")}`,
  level: i % 2 ? "Prática regular" : "Iniciação",
  visits: [3, 4, 2, 3, 4, 2][i],
}));
