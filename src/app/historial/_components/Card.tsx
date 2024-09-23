import Icon from "@/app/components/shared/Icon";
import { useEffect } from "react";
import { format, parseISO } from "date-fns";

interface CardProps {
  status: "prospectado" | "pendiente";
}

export const Card = ({ client }: any) => {
  const { status, comercial_name, visited } = client;

  useEffect(() => {
    console.log("🚀 ~ Card ~ card:", client);
  }, [client]);

  return (
    <li className="dl-flex dl-flex-col dl-pt-4">
      <div className="dl-flex">
        <div
          className={`${
            status === "Si se prospectó"
              ? "dl-bg-support-positive-lightest"
              : "dl-bg-support-warning-lightest"
          } dl-rounded-lg dl-py-2 dl-px-3`}
        >
          {status === "Si se prospectó" ? (
            <Icon color="#006E4A" name="check-regular" />
          ) : (
            <Icon color="#9f5200" name="renew-regular" />
          )}
        </div>
        <div className="dl-flex dl-flex-col dl-pl-2">
          <p className="dl-text-sm dl-uppercase">{comercial_name}</p>
          <span className="dl-text-xs dl-text-neutral-dark">
            {format(parseISO(visited), "dd/MM/yyyy")}
          </span>
        </div>
      </div>
      <div className="dl-flex dl-justify-between dl-mt-3.5 dl-mb-5 dl-items-center">
        <span
          className={`dl-text-xs dl-py-1 dl-px-2 dl-rounded-lg dl-capitalize
          ${
            status === "Si se prospectó"
              ? "dl-text-support-positive-dark dl-bg-support-bg-status-success/30"
              : "dl-text-support-warning-dark dl-bg-support-bg-status-warning/30"
          }
        
        `}
        >
          {status === "Si se prospectó" ? "prospectado" : "pendiente"}
        </span>
        <button
          className="dl-font-semibold dl-text-sm dl-flex dl-gap-2 dl-items-center"
          style={{ color: "#0064D1" }}
        >
          Editar
          <Icon name="pencil-fill" color="#0064D1" />
        </button>
      </div>
    </li>
  );
};
