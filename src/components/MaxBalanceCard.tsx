import React from 'react';
import { Coins } from 'lucide-react';
import { Transaction } from '../types/transaction';
import { calculateMaxBalance } from '../utils/balance';
import { formatAvax } from '../utils/format';

interface MaxBalanceCardProps {
  transactions: Transaction[];
}

export function MaxBalanceCard({ transactions }: MaxBalanceCardProps) {
  const { maxBalance, timestamp } = calculateMaxBalance(transactions);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Maximum Balance Held</p>
          <p className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">
            {formatAvax(maxBalance)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            on {timestamp.toLocaleDateString()}
          </p>
        </div>
        <div className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-900">
          <Coins className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>
    </div>
  );
}