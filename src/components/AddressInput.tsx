import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface AddressInputProps {
  onSubmit: (address: string) => void;
  isLoading: boolean;
}

export function AddressInput({ onSubmit, isLoading }: AddressInputProps) {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSubmit(address.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter AVAX wallet address"
          className="w-full px-4 py-3 pl-5 pr-12 text-sm border rounded-lg 
            bg-white dark:bg-gray-800 
            border-gray-200 dark:border-gray-700
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 
            focus:border-purple-500 dark:focus:border-purple-400"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
            text-gray-500 dark:text-gray-400 
            hover:text-purple-600 dark:hover:text-purple-400 
            disabled:opacity-50"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}