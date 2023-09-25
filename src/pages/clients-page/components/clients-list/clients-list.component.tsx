import { FC } from "react";
import { ClientItem } from "../client-item/client-item.component";
import { Client } from "../../clients-page.types";
import "./clients-list.scss";

type ClientsListProps = {
  clients: Client[];
};

export const ClientsList: FC<ClientsListProps> = ({ clients }) => {
  return (
    <div className="clientsList">
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
