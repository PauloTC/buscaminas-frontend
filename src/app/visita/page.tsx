"use client";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Select from "@/components/Select";
import VisitMap from "@/components/VisitMap";
import { useFormik } from "formik";
import { Client } from "@/app/api";
import DatePicker from "react-datepicker";

import { format, parseISO } from "date-fns";
import TextArea from '@/components/TextArea';

export default function ClientVisitPage() {
  const router = useRouter();
  const clientCtrl = new Client();

  const storedUserId = localStorage.getItem("user.id");

  //Opciones Estáticas
  const PriorityOptions = [
    {
      value: "prioridad_1",
      label: "Prioridad 1",
    },
    {
      value: "prioridad_2",
      label: "Prioridad 2",
    },
    {
      value: "prioridad_3",
      label: "Prioridad 3",
    },
  ];

  const CurrentStatus = [
    {
      value: "Pendiente",
      label: "Pendiente",
    },
    {
      value: "Si se prospectó",
      label: "Si se prospectó",
    },
    {
      value: "No desea prospectarse",
      label: "No desea prospectarse",
    },
  ];

  const BusinessOptions = [
    {
      value: "",
      label: "Seleccione una opción",
    },
    {
      value: "bodega",
      label: "Bodega",
    },
    {
      value: "pollería",
      label: "Pollería",
    },
    {
      value: "cebichería",
      label: "Cebichería",
    },
  ];

  const formik = useFormik({
    initialValues: {
      status: "Pendiente",
      comments: "",
      address: "",
      reference: "",
      business_type: "",
      comercial_name: "",
      client_name: "",
      visited: new Date(),
      cellphone: "",
      user: storedUserId,
    },
    onSubmit: async (values) => {
      try {
        const response = await clientCtrl.createClient(values);

        console.log("🚀 ~ onSubmit: ~ response:", response);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="dl-px-4 dl-py-10">
      <div
        className="dl-flex dl-gap-2 dl-mb-10 dl-font-semibold"
        onClick={() => router.push("/inicio")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.53113 13.141L14.9115 20.3016L15.9147 19.2197C9.67867 13.8295 9.02949 13.1016 7.96719 12.7869V11.2328C9.02949 10.918 9.67867 10.1902 15.9147 4.78033L14.9115 3.69836L6.53113 10.8787V13.141Z"
            fill="#202020"
          />
        </svg>
        <p>Atrás</p>
      </div>

      <h2 className="dl-mb-8 dl-text-neutral-darkest dl-text-2xl dl-font-medium">
        Información de la visita
      </h2>
      <div className="dl-flex dl-flex-col dl-gap-6">
        <div className="dl-w-full dl-flex">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            className="dl-border dl-border-gray-300 dl-outline-none dl-h-12 dl-w-full dl-px-3 dl-rounded-lg"
            placeholderText="Fecha de visita"
            selected={formik.values.visited}
            onChange={(date: Date) => {
              formik.setFieldValue(
                "visited",
                parseISO(format(date, "yyyy-MM-dd"))
              );
            }}
          />
        </div>

        <div className="dl-hidden">
          <Select
            name="priority"
            formik={formik}
            disabled
            options={PriorityOptions}
            label="Prioridad"
          />
          D
        </div>
        <Select
          name="status"
          formik={formik}
          options={CurrentStatus}
          label="Estado actual"
        />
        <TextArea
          name="comments"
          formik={formik}
          label="Comments"
        />
      </div>

      <h2
        className="
          dl-mb-8
          dl-text-neutral-darkest
          dl-text-2xl
          dl-font-medium
          dl-border-t
          dl-pt-10
          dl-mt-10
          dl-border-neutral-dark
        "
      >
        Ubicación del cliente
      </h2>

      <VisitMap />

      <div>
        <div className="dl-flex dl-flex-col dl-gap-6">
          <Input name="address" formik={formik} label="Dirección" />
          {/* <Input label="Distrito" /> */}
          <Input name="reference" formik={formik} label="Referencia" />
        </div>
        <div className="dl-mt-8">
          <p className="dl-font-medium dl-text-neutral-darkest dl-mb-4">
            ¿Actualizar ubicación?
          </p>
          <button
            className="
              dl-bg-warning-medium
              dl-h-12
              dl-max-w-72
              dl-w-full
              dl-border-0
              dl-rounded-3xl
              dl-cursor-pointer
              dl-text-neutral-lightest
              dl-font-semibold
              dl-mx-auto
              dl-flex
              dl-items-center
              dl-justify-center
              dl-gap-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M4.49341 8.89172C4.49341 12.2163 6.71636 15.6196 9.31308 19.436C9.74587 20.0655 10.218 20.695 10.6508 21.2852C11.6344 22.6819 13.5032 22.7212 14.4672 21.3048C15.018 20.4983 15.4311 19.9475 15.7655 19.436C18.3229 15.6196 20.5065 12.2163 20.5065 8.89172C20.5065 3.99336 16.5918 1.23926 12.5 1.23926C8.42783 1.23926 4.49341 3.99336 4.49341 8.89172ZM9.03767 9.14746C9.03767 7.25893 10.6114 5.68516 12.5393 5.68516C14.3885 5.68516 16.0016 7.23926 16.0016 9.14746C16.0016 11.095 14.3885 12.6491 12.5393 12.6491C10.6114 12.6491 9.03767 11.0753 9.03767 9.14746Z"
                fill="#FCFCFC"
              />
            </svg>
            Ubicar
          </button>
        </div>
      </div>

      <h2
        className="
          dl-mb-8
          dl-mt-10
          dl-text-neutral-darkest
          dl-text-2xl
          dl-font-medium
          dl-border-t
          dl-pt-10
          dl-border-neutral-dark
        "
      >
        Detalles del cliente
      </h2>
      <div className="dl-flex dl-flex-col dl-gap-6">
        <Select
          name="business_type"
          options={BusinessOptions}
          formik={formik}
          label="Giro cliente"
        />
        <Input name="comercial_name" formik={formik} label="Nombre comercial" />
        <Input name="client_name" formik={formik} label="Nombre de cliente" />
        <Input name="cellphone" formik={formik} label="Teléfono" />
      </div>

      <div
        className="
          dl-flex
          dl-flex-col
          dl-items-center
          dl-gap-4
          dl-mt-10
          dl-sticky
          dl-bottom-0
          dl-bg-neutral-lightest/50
          dl-py-6
        "
      >
        <button
          type="submit"
          className="
            dl-cursor-pointer
            dl-bg-highlight-medium
            dl-text-neutral-lightest
            dl-font-semibold
            dl-w-full
            dl-max-w-72
            dl-h-12
            dl-rounded-lg
            disabled:dl-bg-neutral-light
            disabled:dl-text-neutral-dark/75
            disabled:dl-cursor-not-allowed
          "
        >
          Guardar visita
        </button>
        <button
          id="button-close"
          className="
            dl-cursor-pointer
            dl-bg-white
            dl-text-neutral-darkest
            dl-font-semibold
            dl-w-full
            dl-max-w-72
            dl-h-12
            dl-rounded-lg
          "
        >
          Cerrar
        </button>
      </div>
    </form>
  );
}
