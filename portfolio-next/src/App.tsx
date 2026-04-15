import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Archive from "@/pages/Archive";
import Research from "@/pages/Research";
import News from "@/pages/News";

function GithubPagesRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedRoute = sessionStorage.getItem("gh-route");
    if (!savedRoute) {
      return;
    }

    sessionStorage.removeItem("gh-route");
    const currentRoute = `${location.pathname}${location.search}${location.hash}`;
    if (savedRoute !== currentRoute) {
      navigate(savedRoute, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <GithubPagesRedirect />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news/archive" element={<Archive />} />
            <Route path="/news/tag/:tag" element={<Archive />} />
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
