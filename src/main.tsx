import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App, AppErrorBoundary } from "./app/App";
import "./styles/global.css";
createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <HashRouter>
      <App />
    </HashRouter>
  </AppErrorBoundary>,
);
