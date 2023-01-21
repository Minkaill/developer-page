import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Works from "./pages/Works/index";
import Home from "./pages/Home";
import AboutAuthor from "./pages/AboutAuthor";
import NotFound from "./components/NotFound/index";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/developer-page" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/aboutauthor" element={<AboutAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
