import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  error: Error;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="rounded-lg bg-red-50 p-4">
      <div className="flex items-center space-x-3">
        <AlertCircle className="h-5 w-5 text-red-600" />
        <p className="text-sm text-red-600">
          {error.message || 'Failed to fetch transactions. Please try again.'}
        </p>
      </div>
    </div>
  );
}