export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: Date;
  gasUsed: string;
  isError: boolean;
}