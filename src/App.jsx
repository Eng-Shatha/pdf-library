import { useState } from "react";
import DashBordLayouts from "./components/layouts/DashbordLayouts";
import { BrowserRouter, Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Books from "./components/Books";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<DashBordLayouts isLoggedIn={isLoggedIn} />} />
         <Route path="/Books" element={<Books />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      
      </Routes>
    </BrowserRouter>
    



  )
}
export default App;