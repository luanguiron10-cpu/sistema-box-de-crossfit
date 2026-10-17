import { ClassesPage } from "../../features/classes/ClassesPage";
import { WorkoutsPage } from "../../features/workouts/WorkoutsPage";
import { ResultsPage } from "../../features/results/ResultsPage";
import { Route, Routes } from "react-router-dom";
import { useInstallation } from "../providers/InstallationProvider";
import { AppLayout } from "../layouts/AppLayout";
import {
  HomePage,
  ManagerPage,
  TeacherPage,
} from "../../features/dashboard/DashboardPages";
import {
  StudentPage,
  StudentsPage,
  NotFoundPage,
} from "../../features/students/StudentPages";
import { SettingsPage } from "../../features/settings/SettingsPage";
export function AppRoutes() {
  const c = useInstallation();
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="gestor" element={<ManagerPage />} />
        <Route path="professor" element={<TeacherPage />} />
        <Route path="aluno" element={<StudentPage />} />
        <Route path="configuracoes" element={<SettingsPage />} />
        {c.features.students && (
          <Route path="alunos" element={<StudentsPage />} />
        )}{" "}
        {c.features.classes && (
          <Route path="turmas" element={<ClassesPage />} />
        )}{" "}
        {c.features.workouts && (
          <Route path="wods" element={<WorkoutsPage />} />
        )}{" "}
        {c.features.results && (
          <Route path="resultados" element={<ResultsPage />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
