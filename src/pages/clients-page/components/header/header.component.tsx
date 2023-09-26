import { useDispatch, useSelector } from "react-redux";
import { postClientApi } from "../../../../app/api/clients/clients.api";
import { AddButton } from "../../../../components/add-button/add-button.component";
import { ButtonSize } from "../../../../components/add-button/add-button.types";
import { addClient, setSearchableClients } from "../../clients-page.slice";
import { SearchInput } from "../../../../components/search-input/search-input.component";
import "./header.scss";
import { useCallback, useMemo, useState } from "react";
import { getClients, getClientsCounter } from "../../clients-page.selectors";

export const Header = () => {
  const clients = useSelector(getClients);
  const clientNumber = useSelector(getClientsCounter);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const addClientHandler = useCallback(async () => {
    setIsLoading(true);

    const newClient = await postClientApi(`Client #${clientNumber}`);

    if (!!newClient) {
      dispatch(addClient(newClient));
    }

    setTimeout(() => setIsLoading(false), 100);
  }, [clientNumber]);

  const searchClientHandler = useCallback((value: string) => {
    dispatch(setSearchableClients(value));
  }, []);

  const headerStyles = useMemo(
    () => `header ${clients.length === 0 ? "empty" : ""}`,
    [clients.length]
  );

  return (
    <div className={headerStyles}>
      <AddButton
        name="New Client"
        size={ButtonSize.Large}
        onClick={addClientHandler}
        isLoading={isLoading}
      />
      {clients.length !== 0 && (
        <SearchInput
          placeholder="Client search"
          searchHandler={searchClientHandler}
        />
      )}
    </div>
  );
};
