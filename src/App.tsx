import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Employee from "./components/Employee";
import Login from "./components/Login";
import Manager from "./components/Manager";
import Employeeinformation from "./components/Employeeinformation";
import Activitydetails from "./components/Activitydetails";

export default function App() {
  return (
    <div className="flex w-screen h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/manager/empinfo" element={<Employeeinformation />} />
        <Route path="/manager/empinfo/:id" element={<Activitydetails />} />
      </Routes>
    </div>
  );
}
