import { FC, useCallback, useState } from "react";
import { ItemHeader } from "../../../../components/item-header/item-header.component";
import { ReportData } from "../../clients-page.types";
import "./report-item.scss";
import { ReportDataItemsList } from "../report-data-items-list/report-data-items-list.component";
import { deleteReportApi } from "../../../../app/api/reports/reports.api";
import { useDispatch } from "react-redux";
import { deleteReport } from "../../clients-page.slice";

type ReportItemProps = {
  clientId: string;
  reportId: string;
  name: string;
  data: ReportData[];
};

export const ReportItem: FC<ReportItemProps> = ({
  clientId,
  reportId,
  name,
  data,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const openReportDataHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const deleteReportHandler = useCallback(async () => {
    const deletedReportId = deleteReportApi(reportId);

    if (!!deletedReportId) dispatch(deleteReport({ clientId, reportId }));
  }, [clientId, reportId]);

  return (
    <div className="reportItem">
      <ItemHeader
        title={name}
        isOpen={isOpen}
        onOpenHandler={openReportDataHandler}
        onDeleteHandler={deleteReportHandler}
      />
      {isOpen && (
        <ReportDataItemsList
          name={name}
          data={data}
          clientId={clientId}
          reportId={reportId}
        />
      )}
    </div>
  );
};
