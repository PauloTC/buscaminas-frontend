"use client";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { useEffect, useContext } from "react";
import { ClientContext } from "../contexts";

export default function ClientMapPage() {
  const { getClients, clients } = useContext(ClientContext);

  const getPromises = () => {
    const promises = clients.map((client: any) => client.attributes);
    const promisesFiltered = promises.filter((client: any) => ['Pendiente', 'Si se prospectó'].includes(client.status))
    return promisesFiltered;
  }

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
  }, []);

  return (
    <div className="dl-rounded-lg dl-overflow-hidden dl-mb-8">
      <APIProvider apiKey="AIzaSyAKZO7_5SojvI4AJby2A1xsDrunnBnPfA4">
        <Map
          mapId="bf51a910020fa25a"
          style={{ width: "100%", height: "100vh" }}
          defaultCenter={{ lat: -12.130596, lng: -77.020595 }}
          defaultZoom={16}
          disableDefaultUI={true}
        >
          {getPromises().map((client: any, index: number) => {
            const color = client.status === 'Pendiente' ? '#6C6C6C' : '#E16C00';
            const priority = client.priority && client.priority.split('_') || ['', ''];
            console.log('prioridad', priority)
            return (
              <AdvancedMarker
                position={{ lat: Number(client.lat), lng: Number(client.long) }}
                key={index}
              >
                <Pin
                  background={color}
                  borderColor={color}
                  glyphColor={"#FFF"}
                  scale={1.2}
                >
                  <div
                    className="
                    dl-flex
                    dl-items-center
                    dl-justify-center
                    dl-font-bold
                    dl-rounded-full
                    dl-bg-white
                    dl-text-black
                    dl-w-4
                    dl-h-4
                  "
                  >
                    {[priority[1]]}
                  </div>
                </Pin>
              </AdvancedMarker>
            )
          })}
        </Map>
      </APIProvider>
    </div>
  );
}
