import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Clock, Activity } from 'lucide-react';
import { Transaction } from '../types/transaction';
import { formatAvax } from '../utils/format';
import { MaxBalanceCard } from './MaxBalanceCard';

interface TransactionStatsProps {
  transactions: Transaction[];
}

export function TransactionStats({ transactions }: TransactionStatsProps) {
  const stats = transactions.reduce((acc, tx) => {
    const value = parseFloat(tx.value) / 1e18;
    if (value > 0) {
      acc.totalReceived += value;
      acc.receivedCount++;
    } else {
      acc.totalSent += Math.abs(value);
      acc.sentCount++;
    }
    return acc;
  }, {
    totalReceived: 0,
    totalSent: 0,
    receivedCount: 0,
    sentCount: 0
  });

  const statCards = [
    {
      title: 'Total Received',
      value: formatAvax(stats.totalReceived),
      icon: ArrowDownLeft,
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900'
    },
    {
      title: 'Total Sent',
      value: formatAvax(stats.totalSent),
      icon: ArrowUpRight,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900'
    },
    {
      title: 'Transaction Count',
      value: transactions.length.toString(),
      icon: Activity,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900'
    },
    {
      title: 'Latest Activity',
      value: new Date(transactions[0]?.timestamp).toLocaleDateString(),
      icon: Clock,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900'
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <MaxBalanceCard transactions={transactions} />
    </div>
  );
}