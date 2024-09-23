import { ClientProvider } from "../contexts";
import { MainLayout } from "@/app/components/layouts/MainLayout";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <div className="dl-p-4">{children}</div>
    </MainLayout>
  );
}
