import { FC, useMemo } from "react";
import "./add-button.scss";
import { AddButtonProps } from "./add-button.types";

export const AddButton: FC<AddButtonProps> = ({ name, size }) => {
  const onClickHandler = () => {
    console.log("Button!");
  };

  const addButtonStyles = useMemo(() => {
    return `button ${size}`;
  }, []);

  return (
    <button className={addButtonStyles} onClick={onClickHandler}>
      {name}
    </button>
  );
};
