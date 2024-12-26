import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAddressTransactions } from '../services/api';
import { AddressInput } from './AddressInput';
import { TransactionList } from './TransactionList';
import { TransactionStats } from './TransactionStats';
import { ErrorMessage } from './ErrorMessage';
import { LoadingState } from './LoadingState';

export function Dashboard() {
  const [address, setAddress] = useState('');

  const { data: transactions, isLoading, isError, error } = useQuery({
    queryKey: ['transactions', address],
    queryFn: () => getAddressTransactions(address),
    enabled: !!address,
  });

  const handleAddressSubmit = (newAddress: string) => {
    setAddress(newAddress);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AVAX Transaction Explorer</h2>
        <p className="text-gray-600 dark:text-gray-400">Enter any AVAX wallet address to view its transaction history</p>
      </div>

      <AddressInput onSubmit={handleAddressSubmit} isLoading={isLoading} />

      {isLoading && <LoadingState />}
      {isError && <ErrorMessage error={error as Error} />}
      
      {transactions && (
        <>
          <TransactionStats transactions={transactions} />
          <TransactionList transactions={transactions} />
        </>
      )}
    </div>
  );
}