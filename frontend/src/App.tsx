import "./App.css";
import Nav from "./components/Home/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-950 bg-dots-pattern bg-dots-size font-sans">
      <Router>
        <Nav />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/:roomSlug" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
