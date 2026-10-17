import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App, AppErrorBoundary } from "./app/App";
import "./styles/global.css";
createRoot(document.getElementById("root")!).render(
  <AppErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppErrorBoundary>,
);
