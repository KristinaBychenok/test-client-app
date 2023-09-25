import { FC, useMemo, useState } from "react";
import { ReportT } from "../../clients-page.types";
import "./client-item.scss";
import { ItemHeader } from "../../../../components/item-header/item-header.component";
import { ReportItem } from "../report-item/report-item.component";
import { AddButton } from "../../../../components/add-button/add-button.component";
import { ButtonSize } from "../../../../components/add-button/add-button.types";

type ClientItemProps = {
  id: string;
  name: string;
  reports: ReportT[];
};

export const ClientItem: FC<ClientItemProps> = ({ name, reports }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openReportsHandler = () => {
    setIsOpen(!isOpen);
  };
  const deleteClientHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="clientItem">
      <ItemHeader
        title={name}
        isOpen={isOpen}
        onOpenHandler={openReportsHandler}
        onDeleteHandler={deleteClientHandler}
      />
      {isOpen && (
        <div className="clientItemReports">
          <div className="clientItemReportsHeader">
            <div>{`${name} reports`}</div>
            <AddButton name="Add report" size={ButtonSize.Medium} />
          </div>
          {reports.map((report) => {
            return <ReportItem name={report.name} data={report.data} />;
          })}
        </div>
      )}
    </div>
  );
};
