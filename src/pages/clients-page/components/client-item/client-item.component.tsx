import { FC, useCallback, useMemo, useState } from "react";
import { ReportT } from "../../clients-page.types";
import "./client-item.scss";
import { ItemHeader } from "../../../../components/item-header/item-header.component";
import { ReportItem } from "../report-item/report-item.component";
import { AddButton } from "../../../../components/add-button/add-button.component";
import { ButtonSize } from "../../../../components/add-button/add-button.types";
import { deleteClientApi } from "../../../../app/api/clients/clients.api";
import { useDispatch, useSelector } from "react-redux";
import { addReport, deleteClient } from "../../clients-page.slice";
import { postReportApi } from "../../../../app/api/reports/reports.api";
import { getClients } from "../../clients-page.selectors";

type ClientItemProps = {
  id: string;
  name: string;
  reports: ReportT[];
};

export const ClientItem: FC<ClientItemProps> = ({
  id: clientId,
  name,
  reports,
}) => {
  const clients = useSelector(getClients);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const reportNumber = useMemo(
    () => clients.find((client) => client.id === clientId)?.reportsCounter,
    [clientId, clients]
  );

  const openReportsHandler = () => {
    setIsOpen(!isOpen);
  };
  const deleteClientHandler = useCallback(async () => {
    const deletedClientId = await deleteClientApi(clientId);

    if (!!deletedClientId) {
      dispatch(deleteClient(deletedClientId));
    }
  }, [clientId]);

  const addReportHandler = useCallback(async () => {
    setIsLoading(true);
    const newRwport = await postReportApi(`Report #${reportNumber}`);

    if (!!newRwport) {
      dispatch(addReport({ report: newRwport, clientId }));
    }
    setTimeout(() => setIsLoading(false), 200);
  }, [clientId, reportNumber]);

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
            <AddButton
              name="Add report"
              size={ButtonSize.Medium}
              onClick={addReportHandler}
              isLoading={isLoading}
            />
          </div>
          {reports.map((report) => {
            return (
              <ReportItem
                key={report.id}
                clientId={clientId}
                reportId={report.id}
                name={report.name}
                data={report.data}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
