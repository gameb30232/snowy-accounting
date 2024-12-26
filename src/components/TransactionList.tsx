import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Transaction } from '../types/transaction';
import { formatAvax, formatAddress } from '../utils/format';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {transactions.map((tx) => (
          <div key={tx.hash} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${tx.isError ? 'bg-red-50 dark:bg-red-900' : 'bg-gray-50 dark:bg-gray-700'}`}>
                  {tx.value.startsWith('-') ? (
                    <ArrowUpRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                  ) : (
                    <ArrowDownLeft className="h-5 w-5 text-green-600 dark:text-green-400" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {tx.value.startsWith('-') ? 'Sent to' : 'Received from'}
                  </p>
                  <a
                    href={`https://snowtrace.io/tx/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    {formatAddress(tx.value.startsWith('-') ? tx.to : tx.from)}
                  </a>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${
                  tx.value.startsWith('-') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                }`}>
                  {formatAvax(parseFloat(tx.value) / 1e18)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(tx.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}