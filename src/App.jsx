import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Works from "./pages/Works/index";
import Home from "./pages/Home";
import AboutAuthor from "./pages/AboutAuthor";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/aboutauthor" element={<AboutAuthor />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
