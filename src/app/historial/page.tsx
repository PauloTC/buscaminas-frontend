"use client";
import { Card } from "./_components/Card";
import { useEffect, useContext, useState } from "react";
import { ClientContext } from "../contexts/ClientsContext";

export default function ClientHistoryPage() {
  const { getClients, clients } = useContext(ClientContext);

  useEffect(() => {
    (async () => {
      try {
        await getClients({ id: 2 });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h3 className="dl-text-2xl dl-mb-8 dl-font-medium">
        Historial de visitas
      </h3>

      <ul className="dl-border dl-border-solid dl-px-8 dl-py-4 dl-divide-y-2 dl-rounded-2xl">
        {clients.map((client: any, index: number) => (
          <Card key={client.id} client={client.attributes} />
        ))}

        {/* <Card status="prospectado" />
        <Card status="pendiente" /> */}
      </ul>
    </div>
  );
}
