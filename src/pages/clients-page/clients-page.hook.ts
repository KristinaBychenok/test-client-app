import { useDispatch } from "react-redux";
import { fetchClientsApi } from "../../app/api/clients/clients.api";
import { Client } from "./clients-page.types";
import { setClients } from "./clients-page.slice";

export const useFetchClientsHook = () => {
  const dispatch = useDispatch();

  return async () => {
    const clients: Client[] | undefined = await fetchClientsApi();

    if (!!clients) {
      dispatch(setClients(clients));
    }
  };
};
