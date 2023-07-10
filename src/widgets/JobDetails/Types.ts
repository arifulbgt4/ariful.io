export interface JobOptions {
  title: string;
  company: string;
  address: string;
  url: string;
  startDate: string;
  endDate: string;
  works: string[];
}

export interface JobDetailsOptions {
  data: JobOptions;
}
