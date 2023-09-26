import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Client,
  ClientsPageState,
  ReportData,
  ReportT,
} from "./clients-page.types";

const clientsPageInitialState: ClientsPageState = {
  clients: [],
};

export const clientsPageSlice = createSlice({
  name: "clientsPageSlice",
  initialState: clientsPageInitialState,
  reducers: {
    setClients: (state, { payload }: PayloadAction<Client[]>) => {
      state.clients = payload;
    },
    addClient: (state, { payload }: PayloadAction<Client>) => {
      state.clients = [...state.clients, payload];
    },
    deleteClient: (state, { payload }: PayloadAction<string>) => {
      state.clients = state.clients.filter((client) => client.id !== payload);
    },
    addReport: (
      state,
      { payload }: PayloadAction<{ report: ReportT; clientId: string }>
    ) => {
      const updatedClient = state.clients.find(
        (client) => client.id === payload.clientId
      );

      if (!!updatedClient) {
        updatedClient.reports = [...updatedClient?.reports, payload.report];
      }
    },
    deleteReport: (
      state,
      { payload }: PayloadAction<{ clientId: string; reportId: string }>
    ) => {
      const updatedClient = state.clients.find(
        (client) => client.id === payload.clientId
      );

      if (!!updatedClient) {
        updatedClient.reports = updatedClient.reports.filter(
          (report) => report.id !== payload.reportId
        );
      }
    },
    addReportData: (
      state,
      {
        payload,
      }: PayloadAction<{
        reportId: string;
        clientId: string;
        reportData: ReportData;
      }>
    ) => {
      const updatedClient = state.clients.find(
        (client) => client.id === payload.clientId
      );
      const updatedReport = updatedClient?.reports.find(
        (report) => report.id === payload.reportId
      );

      if (!!updatedReport) {
        updatedReport.data = [...updatedReport.data, payload.reportData];
      }
    },
    deleteReportData: (
      state,
      {
        payload,
      }: PayloadAction<{
        reportId: string;
        clientId: string;
        reportDataId: string;
      }>
    ) => {
      const updatedClient = state.clients.find(
        (client) => client.id === payload.clientId
      );
      const updatedReport = updatedClient?.reports.find(
        (report) => report.id === payload.reportId
      );

      if (!!updatedReport) {
        updatedReport.data = updatedReport.data.filter(
          (data) => data.id !== payload.reportDataId
        );
      }
    },
  },
});

export const {
  setClients,
  addClient,
  deleteClient,
  addReport,
  deleteReport,
  addReportData,
  deleteReportData,
} = clientsPageSlice.actions;
