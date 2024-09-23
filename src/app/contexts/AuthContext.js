"use client";
import { createContext, useState, useEffect } from "react";
import { User } from "@/app/api";
const userCtrl = new User();

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(null);

  const login = async (token) => {
    try {
      const response = await userCtrl.getMe();
      console.log("🚀 ~ login ~ response:", response);
      setUser(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
