import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 h-screen">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
