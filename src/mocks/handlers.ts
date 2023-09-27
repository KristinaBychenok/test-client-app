import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";

export const handlers = [
  rest.get("/clients", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),

  rest.post("/client", async (req, res, ctx) => {
    const newClient = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        id: uuidv4(),
        name: newClient.clientName,
        reports: [],
        reportsCounter: 1,
      })
    );
  }),

  rest.delete("/client", async (req, res, ctx) => {
    const deletedClientId = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        id: deletedClientId.clientId,
      })
    );
  }),

  rest.post("/report", async (req, res, ctx) => {
    const newReport = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        id: uuidv4(),
        name: newReport.reportName,
        data: [],
      })
    );
  }),

  rest.delete("/report", async (req, res, ctx) => {
    const deletedReportId = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        id: deletedReportId.reportId,
      })
    );
  }),

  rest.post("/reportData", async (req, res, ctx) => {
    const newReportData = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        id: uuidv4(),
        src: newReportData.reportDataSrc,
        name: newReportData.reportDataName,
      })
    );
  }),

  rest.delete("/reportData", async (req, res, ctx) => {
    const deletedReportDataId = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        id: deletedReportDataId.reportDataId,
      })
    );
  }),
];
