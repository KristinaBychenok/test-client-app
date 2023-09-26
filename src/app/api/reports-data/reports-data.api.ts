import { ReportData } from "../../../pages/clients-page/clients-page.types";
import { DeleteReportData } from "./report-data.types";

export const postReportDataApi = async (
  reportDataName: string,
  reportDataSrc: string
) => {
  try {
    const response = await fetch("/reportData", {
      method: "POST",
      body: JSON.stringify({
        reportDataName,
        reportDataSrc,
      }),
    });

    const data: ReportData = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting report data:", error);
  }
};

export const deleteReportDataApi = async (reportDataId: string) => {
  try {
    const response = await fetch("/reportData", {
      method: "DELETE",
      body: JSON.stringify({
        reportDataId,
      }),
    });

    const data: DeleteReportData = await response.json();
    return data.id;
  } catch (error) {
    console.error("Error deleting report data:", error);
  }
};
