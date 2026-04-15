import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppRoutes from "@/AppRoutes";

export default function AppFrame() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
