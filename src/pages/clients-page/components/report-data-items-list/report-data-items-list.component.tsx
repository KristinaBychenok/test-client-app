import { FC, useCallback, useMemo } from "react";
import { ButtonSize } from "../../../../components/add-button/add-button.types";
import { AddButton } from "../../../../components/add-button/add-button.component";
import "./report-data-items-list.scss";
import { ReportData } from "../../clients-page.types";
import { ReportDataItem } from "../report-data-item/report-data-item.component";
import { postReportDataApi } from "../../../../app/api/reports-data/reports-data.api";
import { useDispatch } from "react-redux";
import { addReportData } from "../../clients-page.slice";
import { reportDataItems } from "./report-data-items-list.constants";

type ReportDataItemsListProps = {
  clientId: string;
  reportId: string;
  name: string;
  data: ReportData[];
};

export const ReportDataItemsList: FC<ReportDataItemsListProps> = ({
  clientId,
  reportId,
  data,
  name,
}) => {
  const dispatch = useDispatch();

  const addDataHandler = useCallback(async () => {
    const randomImgId = Math.floor(Math.random() * 4);

    const img =
      reportDataItems.find((item) => item.id === randomImgId.toString()) ||
      reportDataItems[0];

    const newReportData = await postReportDataApi(img?.name, img?.src);

    if (newReportData) {
      dispatch(
        addReportData({ clientId, reportId, reportData: newReportData })
      );
    }
  }, [clientId, reportId]);

  return (
    <div className="reportDataItemsList">
      <div className="reportDataItemsListHeader">
        <div>{`${name} data`}</div>
        <AddButton
          name="Add data"
          size={ButtonSize.Small}
          onClick={addDataHandler}
        />
      </div>
      <div className="reportDataItemsListWrapper">
        {data.map((dataItem) => {
          return (
            <ReportDataItem
              key={dataItem.id}
              name={name}
              src={dataItem.src}
              reportDataId={dataItem.id}
              clientId={clientId}
              reportId={reportId}
            />
          );
        })}
      </div>
    </div>
  );
};
