import { Client } from "../../../pages/clients-page/clients-page.types";

export interface FetchClients {
  clients: Client[];
}

export interface DeleteClient {
  id: string;
}
