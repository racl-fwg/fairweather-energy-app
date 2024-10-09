// app/context/QuoteContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface QuoteContextType {
  isQuoteOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
}

// Create Context
const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

// Create a custom hook to use the QuoteContext
export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

// Provider Component
export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  return (
    <QuoteContext.Provider value={{ isQuoteOpen, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
