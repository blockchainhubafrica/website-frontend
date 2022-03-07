import { createContext, useContext, useState } from "react";

type appContextType = {
  isRegistrationFormActive: boolean;
  setIsRegistrationFormActive: (formState: boolean) => void;
};

const appContextDefaultValues: appContextType = {
  isRegistrationFormActive: false,
  setIsRegistrationFormActive: () => null,
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isRegistrationFormActive, setIsRegistrationFormActive] =
    useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{ isRegistrationFormActive, setIsRegistrationFormActive }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) throw new Error("useApp must be used inside a `AppProvider`");

  return context;
}
