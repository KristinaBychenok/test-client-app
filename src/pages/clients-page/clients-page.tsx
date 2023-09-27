import { FC, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./clients-page.scss";
import { Header } from "./components/header/header.component";
import { useFetchClientsHook } from "./clients-page.hook";
import { useSelector } from "react-redux";
import {
  getClients,
  getErrorMessage,
  getSearchableClients,
} from "./clients-page.selectors";
import { ClientItem } from "./components/client-item/client-item.component";
import { ErrorPopup } from "../../components/error-popup/error-popup.component";

export const ClientsPage: FC = () => {
  const clients = useSelector(getClients);
  const searchableClients = useSelector(getSearchableClients);
  const errorMessage = useSelector(getErrorMessage);

  const navigate = useNavigate();

  useEffect(() => navigate("/clients"), []);

  const fetchClients = useFetchClientsHook();

  useEffect(() => {
    fetchClients();
  }, []);

  const clientsToView = useMemo(() => {
    if (
      searchableClients.clientsList.length === 0 &&
      !searchableClients.isNoFound
    ) {
      return clients;
    } else {
      return searchableClients.clientsList;
    }
  }, [clients, searchableClients]);

  return (
    <div className="wrapper">
      <div className="pageTitle">Clients</div>
      <Header />
      {searchableClients.isNoFound ? (
        <div className="message">Sorry, clients are not found</div>
      ) : (
        clientsToView.map((client) => {
          return (
            <ClientItem
              key={client.id}
              id={client.id}
              name={client.name}
              reports={client.reports}
            />
          );
        })
      )}
      <div className="errorPopup">
        {errorMessage && <ErrorPopup error={errorMessage} />}
      </div>
    </div>
  );
};
