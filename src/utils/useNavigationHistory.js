// hooks/useNavigationHistory.js
import { createContext, useRef, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

const HistoryContext = createContext({});
export const HistoryProvider = ({ children }) => {
  const { asPath } = useRouter();
  const historyRef = useRef([]);

  useEffect(() => {
    console.log('23456543gfd',historyRef.current[historyRef.current.length - 1])
    if (asPath && asPath !== historyRef.current[historyRef.current.length - 1]) {
      // Log the previous route
      if (historyRef.current.length > 0) {
        console.log(`Previous route: ${historyRef.current[historyRef.current.length - 1]}`);
      }
      
      // Update history with the new route
      historyRef.current.push(asPath);
      
      // Log historyRef.current to verify updates
      console.log('Updated historyRef.current:', historyRef.current);
    }
  }, [asPath]);

  return (
    <HistoryContext.Provider
      value={{
        history: historyRef.current,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const context = useContext(HistoryContext);
  return context;
};
