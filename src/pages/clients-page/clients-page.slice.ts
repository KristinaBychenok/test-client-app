import { createSlice } from "@reduxjs/toolkit";
import { ClientsPageState } from "./clients-page.types";

const clientsPageInitialState: ClientsPageState = {
  clients: [],
};

export const clientsPageSlice = createSlice({
  name: "clientsPageSlice",
  initialState: clientsPageInitialState,
  reducers: {
    // addClient: (state, { payload }: PayloadAction<Client>) => {
    //   state.clients = [...state.clients, payload];
    // },
  },
});
