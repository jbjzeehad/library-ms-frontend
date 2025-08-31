import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Toast from "./components/ui/Toast";
import { useToast } from "./hooks/useToast";

function App() {
  const { toast, hideToast } = useToast();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 ">
        <Outlet />
      </main>
      <Footer />
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
}

export default App;
