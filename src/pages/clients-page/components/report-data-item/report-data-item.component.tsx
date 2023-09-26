import { FC } from "react";
import "./report-data-item.scss";
import { IconClose20 } from "../../../../components/svg/close-icon.component";
import { deleteReportDataApi } from "../../../../app/api/reports-data/reports-data.api";
import { useDispatch } from "react-redux";
import { deleteReportData } from "../../clients-page.slice";

type ReportDataItemProps = {
  clientId: string;
  reportId: string;
  reportDataId: string;
  src: string;
  name: string;
};

export const ReportDataItem: FC<ReportDataItemProps> = ({
  clientId,
  reportId,
  reportDataId,
  src,
  name,
}) => {
  const dispatch = useDispatch();

  const deleteReportDataHandler = async () => {
    const deletedReportDataItemId = await deleteReportDataApi(reportDataId);

    if (!!deletedReportDataItemId) {
      dispatch(
        deleteReportData({
          clientId,
          reportId,
          reportDataId: deletedReportDataItemId,
        })
      );
    }
  };

  return (
    <div className="reportDataItem">
      <img src={src} alt={name} className="img"></img>
      <div className="closeDataItem" onClick={deleteReportDataHandler}>
        <IconClose20 />
      </div>
    </div>
  );
};
