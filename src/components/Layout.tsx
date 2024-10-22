import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Settings from "./Settings";

export default function Layout() {
  const [page, setPage] = useState("");

  return (
    <main className="flex">
      <Sidebar setPage={setPage} />
      {page === "dashboard" && <Dashboard />}
      {page === "projects" && <Projects />}
      {page === "settings" && <Settings />}
    </main>
  );
}
