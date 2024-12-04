import { createContext, useState } from "react";
import { login as loginApi, register as registerApi } from "@/client/api/api";

export interface AuthContextType {
  isLoggedIn: boolean;
  token: string | null;
  login: (id: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (
    serialNumber: string,
    id: string,
    password: string
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = async (id: string, password: string) => {
    const token = await loginApi(id, password);
    setIsLoggedIn(true);
    setToken(token);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  const register = async (
    serialNumber: string,
    id: string,
    password: string
  ) => {
    await registerApi(id, password, serialNumber);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
