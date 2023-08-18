import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Employee from "./components/Employee";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="flex w-screen h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </div>
  );
}
