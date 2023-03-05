import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Dashboard, Home, Signup } from "./pages";

function App() {
  return (
    <div className="gradient min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
