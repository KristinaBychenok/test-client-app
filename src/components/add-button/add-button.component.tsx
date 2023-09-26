import { FC, useMemo } from "react";
import "./add-button.scss";
import { AddButtonProps } from "./add-button.types";
import { Spiner } from "../spiner/spiner.component";

export const AddButton: FC<AddButtonProps> = ({
  name,
  size,
  onClick,
  isLoading,
}) => {
  const addButtonStyles = useMemo(() => {
    return `button ${size}`;
  }, []);

  return (
    <div className="addButton">
      <button className={addButtonStyles} onClick={onClick}>
        {name}
      </button>
      {isLoading && <Spiner />}
    </div>
  );
};
