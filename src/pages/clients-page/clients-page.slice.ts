import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Client,
  ClientsPageState,
  ReportData,
  ReportT,
} from "./clients-page.types";

const clientsPageInitialState: ClientsPageState = {
  clients: [],
  searchableClients: {
    clientsList: [],
    isNoFound: false,
  },
  clientCounter: 1,
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
      state.clientCounter += 1;
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
        updatedClient.reportsCounter += 1;
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
    setSearchableClients: (state, { payload }: PayloadAction<string>) => {
      if (payload.length !== 0) {
        const result = state.clients.filter((client) =>
          client.name.includes(payload)
        );

        if (result.length !== 0) {
          state.searchableClients.clientsList = result;
        } else {
          state.searchableClients.clientsList = [];
          state.searchableClients.isNoFound = true;
        }
      } else {
        state.searchableClients.clientsList = [];
        state.searchableClients.isNoFound = false;
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
  setSearchableClients,
} = clientsPageSlice.actions;
