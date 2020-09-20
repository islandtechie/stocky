import { createContext, useContext } from 'react';

export const StockContext = createContext();

export function useStock() {
    return useContext(StockContext);
}