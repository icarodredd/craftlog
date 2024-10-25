import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function Layout() {
  return (
    <main className="sm:flex">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
