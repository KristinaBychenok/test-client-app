import { FC } from "react";
import "./report-data-item.scss";
import { IconClose20 } from "../../../../components/svg/close-icon.component";

type ReportDataItemProps = {
  src: string;
  name: string;
};

export const ReportDataItem: FC<ReportDataItemProps> = ({ src, name }) => {
  return (
    <div className="reportDataItem">
      <img src={src} alt={name} className="img"></img>
      <div className="closeDataItem">
        <IconClose20 />
      </div>
    </div>
  );
};
