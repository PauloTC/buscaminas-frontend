import { ClientProvider } from "../contexts";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <div>{children}</div>
    </MainLayout>
  );
}
