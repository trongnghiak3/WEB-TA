import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Container from "../components/Container";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
}
