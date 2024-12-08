"use client";

import { createContext, useState, useEffect } from "react";
import { default as loginApi } from "@/client/api/endpoint/login";
import api from "@/client/api/api";
import router from "next/router";
import axios from "axios";

const TOKEN_KEY = "aneukan_token";

export interface AuthContextType {
  isLoggedIn: boolean;
  token: string | null;
  login: (id: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  redirectWithAuth: (path: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    console.log(storedToken);
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (id: string, password: string) => {
    const token = await loginApi(id, password);
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem(TOKEN_KEY, token ?? "");
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
  };

  const redirectWithAuth = async (path: string) => {
    try {
      await axios.get(path, {
        headers: { Authorization: `Bearer ${token}` },
      });

      router.push(path);
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete config.headers.Authorization;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, login, logout, redirectWithAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
