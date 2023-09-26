import { ReportT } from "../../../pages/clients-page/clients-page.types";
import { DeleteReport } from "./reports.types";

export const postReportApi = async (reportName: string) => {
  try {
    const response = await fetch("/report", {
      method: "POST",
      body: JSON.stringify({
        reportName,
      }),
    });

    const data: ReportT = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting report:", error);
  }
};

export const deleteReportApi = async (reportId: string) => {
  try {
    const response = await fetch("/report", {
      method: "DELETE",
      body: JSON.stringify({
        reportId,
      }),
    });

    const data: DeleteReport = await response.json();
    return data.id;
  } catch (error) {
    console.error("Error deleting report:", error);
  }
};
