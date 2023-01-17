import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Works from "./pages/Works/index";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
