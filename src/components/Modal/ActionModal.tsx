import React from "react";
// import IconActionModal from "../../IconActionModal";
// import { CrudAction } from "types/actions.enum";
// import Button from "components/Button";
import Image from "next/image";
import Icon from "../shared/Icon";

enum CrudAction {
  CREATE = "create",
  VIEW = "view",
  CANCELEDIT = "cancelEdit",
  VISIT = "visit",
  CANCELCREATE = "cancelCreate",
  CANCELVISIT = "cancelVisit",
}

interface ActionsModalProps {
  title: string;
  isOpen: boolean;
  comercialName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ActionModal: React.FC<ActionsModalProps> = ({
  // action,
  // subtitle,
  isOpen,
  title,
  comercialName,
  onClose,
  onConfirm,
}) => {
  const buttonsMessages: Record<CrudAction, string[]> = {
    [CrudAction.VIEW]: [
      "Quieres ver el registro del cliente:",
      "Si, revisar",
      "No",
    ],
    [CrudAction.VISIT]: [
      "Estas por guardar tu visita con el cliente:",
      "Si, guardar",
      "No guardar",
    ],
    [CrudAction.CANCELEDIT]: [
      "Estás por cerrar sin actualizar los datos de:",
      "Sí, actualizar comercio",
      "No actualizar",
    ],
    [CrudAction.CREATE]: [
      "Estas por agregar este cliente a tu ruta:",
      "Sí, agregar",
      "Seguir editando",
    ],
    [CrudAction.CANCELCREATE]: [
      "Estás por cerrar sin agregar los datos de:",
      "Sí, agregar",
      "No agregar",
    ],
    [CrudAction.CANCELVISIT]: [
      "Estás por cerrar sin guardar la visita de:",
      "Sí, guardar visita",
      "No guardar",
    ],
  };
  // const messageButton = buttonsMessages[action] || "Acción desconocida";

  return (
    <div
      className={`dl-fixed dl-inset-0 dl-flex dl-items-center dl-justify-center dl-bg-black dl-bg-opacity-50 dl-z-50

    ${isOpen ? "dl-visible" : "dl-hidden"}

      `}
    >
      <div className="  dl-bg-white dl-p-6 dl-rounded-lg dl-shadow-lg dl-w-full dl-max-w-xs dl-flex dl-flex-col dl-justify-center dl-items-center">
        <div className="dl-w-full dl-flex dl-flex-row dl-justify-end">
          <Icon onClick={() => onClose()} name="close-regular" />
        </div>

        <div className="dl-flex dl-flex-col dl-items-center">
          <Image
            width={160}
            height={160}
            alt="hi5"
            src="/images/manos_hi5.svg"
            className="dl-mb-7"
          />

          <h2 className="dl-text-center  dl-text-2xl dl-leading-6 dl-text-neutral-darkest dl-mb-4 dl-font-bold ">
            {title}
          </h2>
          <p className="dl-uppercase">
            {comercialName || "Sin nombre comercial"}
          </p>
        </div>
        <div className="dl-w-full dl-flex dl-flex-col dl-justify-center ">
          <button
            onClick={(e) => {
              e.preventDefault();
              onConfirm();
            }}
            className="dl-bg-highlight-medium dl-text-neutral-lightest dl-mt-6 dl-font-semibold dl-h-12 dl-rounded-lg disabled:dl-bg-neutral-light disabled:dl-text-neutral-dark"
          >
            Sí, agregar
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="dl-mt-4
            dl-text-neutral-darkest
              dl-font-semibold
              dl-h-12
              dl-rounded-lg
              disabled:dl-bg-neutral-light
              disabled:dl-text-neutral-dark"
          >
            Seguir editando
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
