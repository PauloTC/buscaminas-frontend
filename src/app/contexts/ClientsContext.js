"use client";
import { createContext, useState, useEffect } from "react";
import { Client } from "@/app/api";
const clientCtrl = new Client();

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const getClients = async ({ id }) => {
    try {
      const response = await clientCtrl.getClientsById(id);
      setClients(response.data);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <ClientContext.Provider value={{ clients, getClients }}>
      {children}
    </ClientContext.Provider>
  );
};
