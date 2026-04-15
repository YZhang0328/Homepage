import { Route, Routes } from "react-router-dom";

import Archive from "@/pages/Archive";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Research from "@/pages/Research";

export default function AppRoutes() {
  return (
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
  );
}
