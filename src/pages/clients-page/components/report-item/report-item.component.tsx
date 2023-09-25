import { FC, useState } from "react";
import { ItemHeader } from "../../../../components/item-header/item-header.component";
import { ReportData } from "../../clients-page.types";
import "./report-item.scss";
import { ReportDataItemsList } from "../report-data-items-list/report-data-items-list.component";

type ReportItemProps = {
  name: string;
  data: ReportData[];
};

export const ReportItem: FC<ReportItemProps> = ({ name, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openReportDataHandler = () => {
    setIsOpen(!isOpen);
  };
  const deleteReportHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="reportItem">
      <ItemHeader
        title={name}
        isOpen={isOpen}
        onOpenHandler={openReportDataHandler}
        onDeleteHandler={deleteReportHandler}
      />
      {isOpen && <ReportDataItemsList name={name} data={data} />}
    </div>
  );
};
