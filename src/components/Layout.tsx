import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function Layout() {
  return (
    <main className="flex">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
