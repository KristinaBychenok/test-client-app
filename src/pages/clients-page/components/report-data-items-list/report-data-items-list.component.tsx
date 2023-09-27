import { FC, useCallback, useMemo, useState } from "react";
import { ButtonSize } from "../../../../components/add-button/add-button.types";
import { AddButton } from "../../../../components/add-button/add-button.component";
import "./report-data-items-list.scss";
import { ReportData } from "../../clients-page.types";
import { ReportDataItem } from "../report-data-item/report-data-item.component";
import { postReportDataApi } from "../../../../app/api/reports-data/reports-data.api";
import { useDispatch } from "react-redux";
import { addReportData, setErrorMessage } from "../../clients-page.slice";
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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const addDataHandler = useCallback(async () => {
    setIsLoading(true);
    const randomImgId = Math.floor(Math.random() * 4);

    const img =
      reportDataItems.find((item) => item.id === randomImgId.toString()) ||
      reportDataItems[0];

    const newReportData = await postReportDataApi(img?.name, img?.src);

    if (newReportData) {
      dispatch(
        addReportData({ clientId, reportId, reportData: newReportData })
      );
    } else {
      dispatch(setErrorMessage("Error posting report data"));

      setTimeout(() => dispatch(setErrorMessage(null)), 2000);
    }

    setTimeout(() => setIsLoading(false), 200);
  }, [clientId, reportId]);

  return (
    <div className="reportDataItemsList">
      <div className="reportDataItemsListHeader">
        <div>{`${name} data`}</div>
        <AddButton
          name="Add data"
          size={ButtonSize.Small}
          onClick={addDataHandler}
          isLoading={isLoading}
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
