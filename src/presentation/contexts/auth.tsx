import { createContext, useContext, useMemo, useState } from "react";

interface IAuthContext {
  token?: string;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<string>();

  const value = useMemo(() => ({ token, setToken }), [token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;
