import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from './components/Dashboard';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { WalletIcon } from 'lucide-react';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-b from-bolt-gray-50 to-white dark:from-bolt-dark dark:to-bolt-gray-800 transition-colors duration-300">
          <nav className="bg-white/80 dark:bg-bolt-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <WalletIcon className="h-6 w-6 text-bolt-purple dark:text-purple-400" />
                <h1 className="text-xl font-semibold bg-gradient-to-r from-bolt-purple to-bolt-blue bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
                  AVAX Analytics
                </h1>
              </div>
              <ThemeToggle />
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 py-8">
            <Dashboard />
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}