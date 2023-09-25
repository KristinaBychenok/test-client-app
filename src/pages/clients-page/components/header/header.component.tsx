import { AddButton } from "../../../../components/add-button/add-button.component";
import { ButtonSize } from "../../../../components/add-button/add-button.types";

export const Header = () => {
  return (
    <div className="header">
      <AddButton name="New Client" size={ButtonSize.Large}/>
    </div>
  );
};
