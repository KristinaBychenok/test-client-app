import { configureStore } from "@reduxjs/toolkit";
import { clientsPageSlice } from "../../pages/clients-page/clients-page.slice";

export const store = configureStore({
  reducer: {
    clientsPage: clientsPageSlice.reducer,
  },
});
