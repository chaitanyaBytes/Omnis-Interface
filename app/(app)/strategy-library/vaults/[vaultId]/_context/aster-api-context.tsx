// context/AsterAPIContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface AsterAPIContextType {
    asterAPIkey: string;
    setAsterAPIkey: React.Dispatch<React.SetStateAction<string>>;
    asterSecretAPIkey: string;
    setAsterSecretAPIkey: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const AsterAPIContext = createContext<AsterAPIContextType | undefined>(undefined);

// Create the provider component
export const AsterAPIProvider = ({ children }: { children: ReactNode }) => {
    const [asterAPIkey, setAsterAPIkey] = useState('');
    const [asterSecretAPIkey, setAsterSecretAPIkey] = useState('');

    return (
        <AsterAPIContext.Provider value={{ asterAPIkey, setAsterAPIkey, asterSecretAPIkey, setAsterSecretAPIkey }}>
            {children}
        </AsterAPIContext.Provider>
    );
};

// Custom hook to use the context
export const useAsterAPI = (): AsterAPIContextType => {
    const context = useContext(AsterAPIContext);
    if (!context) {
        throw new Error('useAsterAPI must be used within an AsterAPIProvider');
    }
    return context;
};
