import { MainLayout } from "../components/layouts/MainLayout";
import { Card } from "./_components/Card";

export default function ClientHistoryPage() {
  return (
    <>
      <MainLayout>
        <h3 className="dl-text-2xl dl-mb-8 dl-font-medium">
          Historial de visitas
        </h3>
        <ul className="dl-border dl-border-solid dl-px-8 dl-py-4 dl-divide-y-2 dl-rounded-2xl">
          <Card status="prospectado" />
          <Card status="pendiente" />
        </ul>
      </MainLayout>
    </>
  );
}
