import { Client } from "../../../pages/clients-page/clients-page.types";
import { DeleteClient } from "./clients.types";

export const fetchClientsApi = async () => {
  try {
    const response = await fetch("/clients");
    const data: Client[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching clients:", error);
  }
};

export const postClientApi = async (clientName: string) => {
  try {
    const response = await fetch("/client", {
      method: "POST",
      body: JSON.stringify({
        clientName,
      }),
    });

    const data: Client = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting client:", error);
  }
};

export const deleteClientApi = async (clientId: string) => {
  try {
    const response = await fetch("/client", {
      method: "DELETE",
      body: JSON.stringify({
        clientId,
      }),
    });

    const data: DeleteClient = await response.json();
    return data.id;
  } catch (error) {
    console.error("Error deleting client:", error);
  }
};
