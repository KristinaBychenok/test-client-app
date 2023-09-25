export interface ClientsPageState {
  clients: Client[];
}

export interface Client {
  id: string;
  name: string;
  reports: ReportT[];
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
