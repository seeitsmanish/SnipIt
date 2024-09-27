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
import cn from "./lib/cn";
import { useRoom } from "./context/RoomContext";

function App() {
  const { isRoom } = useRoom();
  return (
    <div
      className={cn(
        `relative flex min-h-screen w-[100dvw] flex-col overflow-hidden bg-gray-950 font-sans md:h-[100dvh] md:overflow-visible`,
        isRoom && "py-0 md:py-5",
      )}
    >
      <div
        className={cn(
          `central-wrapper relative mx-5 flex max-w-[1440px] flex-1 flex-col lg:mx-auto lg:w-[70vw]`,
          isRoom && "mx-0 md:w-full lg:w-[90%]",
        )}
      >
        <div className="absolute bottom-3 right-3 -z-0 size-[300px] rounded-full bg-orange-300 bg-opacity-10 blur-3xl lg:size-[500px]"></div>
        <div className="absolute left-5 top-6 -z-0 size-[300px] rounded-full bg-fuchsia-700 bg-opacity-25 blur-3xl lg:size-[500px]"></div>
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
      </div>
    </div>
  );
}

export default App;
