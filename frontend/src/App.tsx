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
import { LanguageProvider } from "./context/LanguageContext";
import { useRoom } from "./context/RoomContext";

function App() {

  const { isRoom } = useRoom();
  return (
    <div className={`flex h-[100dvh] w-[100dvw] flex-col justify-between bg-transparent bg-dots-size font-sans relative ${isRoom && "bg-slate-950"}`}>
      <LanguageProvider>
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
            <Route path="*" element={
              <Navigate to="/not-found" />
            } />
          </Routes>
        </Router>
      </LanguageProvider>
      {
        !isRoom && (
          <div className="absolute inset-0 z-[-1] bg-slate-950">
            <ShootingStars maxDelay={5000} />
            <StarsBackground starDensity={0.0005} />
          </div>
        )
      }
    </div>
  );
}

export default App;
