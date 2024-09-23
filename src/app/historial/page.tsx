"use client";
import { Card } from "./_components/Card";
import { useEffect, useContext, useState } from "react";
import { ClientContext, AuthContext } from "../contexts";

export default function ClientHistoryPage() {
  const { getClients, clients } = useContext(ClientContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const storedUserId = localStorage.getItem("user.id");

      if (storedUserId) {
        const userId = JSON.parse(storedUserId);

        try {
          await getClients({ id: userId });
        } catch (error) {
          console.error(error);
        }
      }
    })();

    console.log("🚀 ~ ClientHistoryPage ~ user:", user);
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
      </ul>
    </div>
  );
}
