import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Archive from "@/pages/Archive";
import Research from "@/pages/Research";
import News from "@/pages/News";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news/archive" element={<Archive />} />
            <Route path="/news/tag/:tag" element={<Archive />} />
            <Route path="/news/event/:event" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:desk" element={<News />} />
            <Route path="/news/:desk/:story" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
