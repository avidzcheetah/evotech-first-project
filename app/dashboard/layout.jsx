import SidePanel from "./components/side-panel";
import UserNav from "./components/user-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Side Panel */}
      <aside className="w-64 overflow-y-auto border-r bg-white shadow-lg">
        <SidePanel />
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Dashboard Header */}
        <header className="bg-white flex h-16 items-center justify-between gap-4 border-b px-6 shadow-sm">
          <h1 className="text-2xl font-bold text-blue-800">MFlix Dashboard</h1>
          <UserNav />
        </header>

        {/* Dashboard Pages */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
