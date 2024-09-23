import { ClientProvider } from "../contexts";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <div>{children}</div>
    </ClientProvider>
  );
}
