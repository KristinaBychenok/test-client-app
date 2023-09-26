export interface ClientsPageState {
  clients: Client[];
  searchableClients: {
    clientsList: Client[];
    isNoFound: boolean;
  };
  clientCounter: number;
}

export interface Client {
  id: string;
  name: string;
  reports: ReportT[];
  reportsCounter: number;
}

export type ReportT = {
  id: string;
  name: string;
  data: ReportData[];
};

export type ReportData = {
  id: string;
  src: string;
  name: string;
};
