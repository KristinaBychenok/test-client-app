import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";
import { ClientsPageState } from "./clients-page.types";

export const getClientsPageSlice = (state: RootState): ClientsPageState =>
  state.clientsPage;

export const getClients = createSelector(
  getClientsPageSlice,
  (clientsState) => clientsState.clients
);