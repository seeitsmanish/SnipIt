import "./App.css";
import Nav from "./components/Home/Nav";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";
import ShootingStars from "./aceternity/components/ui/shooting-stars";
import { StarsBackground } from "./aceternity/components/ui/stars-background";
function App() {
  const isHome = window.location.pathname === "/";
  const notFound = window.location.pathname === "/not-found";
  return (
    <div className="flex h-screen w-screen flex-col justify-between bg-transparent bg-dots-size font-sans relative">
      <Nav />
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Room */}
          <Route path="/:roomSlug" element={<Room />} />
          {/* Not-Found */}
          <Route path="/not-found" element={<NotFound />} />
          {/* Redirect unmatched routes to not-found */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
      {
        (isHome || notFound) && (
          <div className="absolute w-screen h-screen z-[-1] bg-gray-950">
            <ShootingStars maxDelay={5000} />
            <StarsBackground starDensity={0.0005} />
          </div>
        )
      }
    </div>
  );
}

export default App;
