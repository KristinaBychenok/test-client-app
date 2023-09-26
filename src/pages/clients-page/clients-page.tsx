import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./clients-page.scss";
import { Header } from "./components/header/header.component";
import { useFetchClientsHook } from "./clients-page.hook";
import { useSelector } from "react-redux";
import { getClients } from "./clients-page.selectors";
import { ClientItem } from "./components/client-item/client-item.component";

export const ClientsPage: FC = () => {
  const clients = useSelector(getClients);
  const navigate = useNavigate();

  useEffect(() => navigate("/clients"), []);

  const fetchClients = useFetchClientsHook();

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="wrapper">
      <div className="pageTitle">Clients</div>
      <Header />
      {clients.map((client) => {
        return (
          <ClientItem
            key={client.id}
            id={client.id}
            name={client.name}
            reports={client.reports}
          />
        );
      })}
    </div>
  );
};
