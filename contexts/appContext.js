import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) throw new Error("useApp must be used inside a `AppProvider`");

  return context;
}
