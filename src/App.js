import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Apprenterships from "./pages/apprenterships/Apprenterships";
import Internships from "./pages/internships/Internships";
import Jobs from "./pages/jobs/Jobs";
import Settings from "./pages/settings/Settings";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App bg-[#F1F4F8]">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Dashboard />} />
          <Route path="/apprenterships" element={<Apprenterships />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
