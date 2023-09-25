import { FC } from "react";
import { ButtonSize } from "../../../../components/add-button/add-button.types";
import { AddButton } from "../../../../components/add-button/add-button.component";
import "./report-data-items-list.scss";
import { ReportData } from "../../clients-page.types";
import { ReportDataItem } from "../report-data-item/report-data-item.component";

type ReportDataItemsListProps = { name: string; data: ReportData[] };

export const ReportDataItemsList: FC<ReportDataItemsListProps> = ({
  data,
  name,
}) => {
  return (
    <div className="reportDataItemsList">
      <div className="reportDataItemsListHeader">
        <div>{`${name} data`}</div>
        <AddButton name="Add data" size={ButtonSize.Small} />
      </div>
      <div className="reportDataItemsListWrapper">
        {data.map((dataItem) => {
          return (
            <ReportDataItem key={dataItem.id} name={name} src={dataItem.src} />
          );
        })}
      </div>
    </div>
  );
};
