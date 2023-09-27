import { FC } from "react";
import "./error-popup.scss";

export const ErrorPopup: FC<{ error: string }> = ({ error }) => {
  return <div className="error">{error}</div>;
};
