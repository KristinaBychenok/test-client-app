import { FC, useMemo } from "react";
import "./add-button.scss";
import { AddButtonProps } from "./add-button.types";

export const AddButton: FC<AddButtonProps> = ({ name, size, onClick }) => {
  const addButtonStyles = useMemo(() => {
    return `button ${size}`;
  }, []);

  return (
    <button className={addButtonStyles} onClick={onClick}>
      {name}
    </button>
  );
};
