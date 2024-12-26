import { Transaction } from '../types/transaction';

export function calculateMaxBalance(transactions: Transaction[]): { maxBalance: number; timestamp: Date } {
  let balance = 0;
  let maxBalance = 0;
  let maxBalanceTimestamp = new Date();
  
  // Sort transactions by timestamp ascending
  const sortedTransactions = [...transactions].sort((a, b) => 
    a.timestamp.getTime() - b.timestamp.getTime()
  );

  sortedTransactions.forEach(tx => {
    const value = parseFloat(tx.value) / 1e18; // Convert from Wei to AVAX
    balance += value;
    
    if (balance > maxBalance) {
      maxBalance = balance;
      maxBalanceTimestamp = tx.timestamp;
    }
  });

  return {
    maxBalance,
    timestamp: maxBalanceTimestamp
  };
}