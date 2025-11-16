import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login/Page";
import { Dashboard } from "@/Pages/Dashboard/Page";
import { Team } from "@/Pages/Team/Page";
import { Settings } from "@/Pages/Settings/Page";
import { Sales } from "@/Pages/Sales/Page";
import { Reports } from "@/Pages/Reports/Page";
import { Expenses } from "@/Pages/Expenses/Page";
import { CodiStore } from "@/Pages/CodiStore/Page";

import { Courses } from "@/Pages/Courses/Page";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendas" element={<Sales />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/users" element={<Team />} />
        <Route path="/gastos" element={<Expenses />} />
        <Route path="/configs" element={<Settings />} />
        <Route path="/codistore" element={<CodiStore />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}
