import Icon from "@/app/components/shared/Icon";

interface CardProps {
  status: "prospectado" | "pendiente";
}

export const Card: React.FC<CardProps> = ({ status }) => {
  return (
    <li className="dl-flex dl-flex-col dl-pt-4">
      <div className="dl-flex">
        <div
          className={`${
            status === "prospectado"
              ? "dl-bg-support-positive-lightest"
              : "dl-bg-support-warning-lightest"
          } dl-rounded-lg dl-py-2 dl-px-3`}
        >
          {status === "prospectado" ? (
            <Icon color="#006E4A" name="check-regular" />
          ) : (
            <Icon color="#9f5200" name="renew-regular" />
          )}
        </div>
        <div className="dl-flex dl-flex-col dl-pl-2">
          <p className="dl-text-sm">ATIPANA DEX S.A.C</p>
          <span className="dl-text-xs dl-text-neutral-dark">25/06/24</span>
        </div>
      </div>
      <div className="dl-flex dl-justify-between dl-mt-3.5 dl-mb-5 dl-items-center">
        <span
          className={`dl-text-xs dl-py-1 dl-px-2 dl-rounded-lg dl-capitalize
          ${
            status === "prospectado"
              ? "dl-text-support-positive-dark dl-bg-support-bg-status-success/30"
              : "dl-text-support-warning-dark dl-bg-support-bg-status-warning/30"
          }
        
        `}
        >
          {status}
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
