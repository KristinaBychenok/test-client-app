import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./clients-page.scss";
import { Header } from "./components/header/header.component";
import { ClientsList } from "./components/clients-list/clients-list.component";
import { clients } from "./clients-page.constants";

export const ClientsPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/clients"), []);

  return (
    <div className="wrapper">
      <div className="pageTitle">Clients</div>
      <Header />
      <ClientsList clients={clients} />
    </div>
  );
};
