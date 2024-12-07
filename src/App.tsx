import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Auth from "./pages/auth/auth";
import Manager from "./pages/manager/manager";
import Services from "./pages/services/services";
import Dashboard from "./pages/dashboard/Dashboard";


import { Intelligence } from "./pages/dashboard/pages/inteligence/inteligence";
import { Finance } from "./pages/dashboard/pages/finance/finance";
import { Appointments } from "./pages/dashboard/pages/appointment/appointment";
import { Pacients } from "./pages/dashboard/pages/pacients/pacients";
import { Plans } from "./pages/dashboard/pages/plans/plans";
import { Anamnesia } from "./pages/dashboard/pages/anamnesia/anamnesia";
import { Teams } from "./pages/dashboard/pages/teams/teams";
import { Stock } from "./pages/dashboard/pages/stock/stock";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/services" element={<Services />} />
      <Route path="/manager" element={<Manager />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Intelligence />} />
        <Route path="*" element={<Intelligence />} />
        <Route path="intelligence" element={<Intelligence />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="pacients" element={<Pacients />} />
        <Route path="finance" element={<Finance />} />
        <Route path="stock" element={<Stock />} />
        <Route path="anamnesia" element={<Anamnesia />} />
        <Route path="teams" element={<Teams />} />
        <Route path="plans" element={<Plans />} />
      </Route>
    </Routes>
  );
}

export default App;
