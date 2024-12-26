import axios from 'axios';
import { Transaction } from '../types/transaction';

const SNOWTRACE_API = 'https://api.snowtrace.io/api';
const API_KEY = import.meta.env.VITE_SNOWTRACE_API_KEY || '';

export async function getAddressTransactions(address: string): Promise<Transaction[]> {
  try {
    const response = await axios.get(`${SNOWTRACE_API}`, {
      params: {
        module: 'account',
        action: 'txlist',
        address,
        apikey: API_KEY,
        sort: 'desc'
      }
    });
    
    if (response.data.status === '1' && response.data.result) {
      return response.data.result.map((tx: any) => ({
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: tx.value,
        timestamp: new Date(parseInt(tx.timeStamp) * 1000),
        gasUsed: tx.gasUsed,
        isError: tx.isError === '1'
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw new Error('Failed to fetch transactions');
  }
}