import { createContext, useContext } from "react";

type appContextType = null;

const appContextDefaultValues: appContextType = null;

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) throw new Error("useApp must be used inside a `AppProvider`");

  return context;
}
