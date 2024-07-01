import "./App.css";
import Nav from "./components/Home/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="flex h-screen w-screen flex-col bg-gray-950 bg-dots-pattern bg-dots-size font-sans">
      <Nav />
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Room */}
          <Route path="/:roomSlug" element={<Room />} />
          {/* Not-Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
