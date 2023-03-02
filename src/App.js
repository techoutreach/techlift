import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard, Home, Signup } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/signup' element={<Signup />}  />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
