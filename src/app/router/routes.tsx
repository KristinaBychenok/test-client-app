import { Route, Routes } from "react-router-dom";
import { ClientsPage } from "../../pages/clients-page/clients-page";
import { FC } from "react";

export const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<ClientsPage />}></Route>
    <Route path="/clients" element={<ClientsPage />}></Route>
  </Routes>
);
