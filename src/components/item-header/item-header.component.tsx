import { FC, useMemo } from "react";
import { IconArrow20 } from "../svg/arrow-icon.component";
import { IconClose20 } from "../svg/close-icon.component";
import "./item-header.scss";

type ItemHeaderProps = {
  title: string;
  isOpen: boolean;
  onOpenHandler: () => void;
  onDeleteHandler: () => void;
};

export const ItemHeader: FC<ItemHeaderProps> = ({
  title,
  isOpen,
  onOpenHandler,
  onDeleteHandler,
}) => {
  const arrowButtonStyles = useMemo(
    () => `arrowButton ${isOpen ? "open" : ""}`,
    [isOpen]
  );

  return (
    <div className="headerItemInfo">
      <div className={arrowButtonStyles} onClick={onOpenHandler}>
        <IconArrow20 />
      </div>
      <div className="headerItemName">{title}</div>
      <button className="closeButton" onClick={onDeleteHandler}>
        <IconClose20 />
      </button>
    </div>
  );
};
