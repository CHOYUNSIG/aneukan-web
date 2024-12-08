"use client";

import { createContext, useState, useEffect } from "react";
import { default as loginApi } from "@/client/api/endpoint/login";

const TOKEN_KEY = "aneukan_token";

export interface AuthContextType {
  isLoggedIn: boolean;
  token: string | null;
  login: (
    id: string,
    password: string,
    callback?: (token: string) => void
  ) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (
    id: string,
    password: string,
    callback?: (token: string) => void
  ) => {
    const token = await loginApi(id, password);
    if (!token) throw new Error("로그인에 실패했습니다.");
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem(TOKEN_KEY, token);
    await callback?.(token);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
