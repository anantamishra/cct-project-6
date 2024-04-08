import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
