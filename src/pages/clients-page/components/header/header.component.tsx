import { useDispatch } from "react-redux";
import { postClientApi } from "../../../../app/api/clients/clients.api";
import { AddButton } from "../../../../components/add-button/add-button.component";
import { ButtonSize } from "../../../../components/add-button/add-button.types";
import { addClient } from "../../clients-page.slice";

export const Header = () => {
  const dispatch = useDispatch();

  const addClientHandler = async () => {
    const newClient = await postClientApi("Client #3");

    if (!!newClient) {
      dispatch(addClient(newClient));
    }
  };

  return (
    <div className="header">
      <AddButton
        name="New Client"
        size={ButtonSize.Large}
        onClick={addClientHandler}
      />
    </div>
  );
};
