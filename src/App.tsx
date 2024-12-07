import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Auth from "./layouts/Auth";
import Order from "./layouts/Order";

function App() {
  
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/order/*" element={<Order />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  )
}

export default App
