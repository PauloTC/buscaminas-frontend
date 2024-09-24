"use client";
import Image from "next/image";
import Input from "../shared/InputField";
import { useFormik } from "formik";
import { validationSchema } from "./loginform.form";
import { useRouter } from "next/navigation";
import { Auth } from "@/app/api";
import { useAuth } from "@/hooks/useAuth";
import InputField from "@components/shared/InputField";

const authCtrl = new Auth();

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await authCtrl.login(values);
        login(response.jwt);
        localStorage.setItem("user.id", JSON.stringify(response.user.id));

        console.log("🚀 ~ onSubmit: ~ response:", response);

        if (response) {
          router.push("/inicio");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="dl-container dl-min-h-screen dl-flex dl-flex-col dl-justify-center">
      <Image
        className="dl-mx-auto dl-mb-14"
        alt="map"
        src="/images/map.svg"
        width={195}
        height={124}
      />

      <h3 className="dl-text-2xl dl-font-medium dl-mb-7">
        Bienvenido/a a tu herramienta{" "}
        <span className="dl-font-semibold">buscaminas</span>
      </h3>
      <form
        onSubmit={formik.handleSubmit}
        className="dl-gap-6 dl-flex dl-flex-col"
      >
        <InputField
          name="identifier"
          type="email"
          placeholder="Usuario"
          formik={formik}
        />

        <InputField
          name="password"
          type="password"
          placeholder="Contraseña"
          formik={formik}
        />

        <button
          type="submit"
          className="
            dl-mt-6
            dl-font-semibold
            dl-h-12
            dl-w-full
            dl-rounded-lg
            disabled:dl-bg-neutral-light
            disabled:dl-text-neutral-dark
            dl-bg-highlight-medium dl-text-neutral-lightest
            "
        >
          Iniciar sesión
        </button>
      </form>
      {/* <div className="dl-grid dl-gap-6">
        <Input
          placeholder="Contraseña"
          status={status}
          color={status === "error" ? "#DF1978" : undefined}
          type={password ? "test" : "password"}
          icon={
            status === "error"
              ? "warning-circle"
              : password
              ? "eye"
              : "eye-slash"
          }
          message="Verifica que tu contraseña sea la correcta."
          onIcon={() => setPassword(!password)}
          onKeyDown={(event) =>
            event.key === "Enter" && handleSubmit(handleOnSubmit)()
          }
          {...register("password", {
            required: true,
            onChange: (event) => {
              setStatus(undefined);
              setValue("password", event.target.value.trim());
            },
          })}
        />

        <Button
          onClick={handleSubmit(handleOnSubmit)}
          disabled={!isValid}
          type="submit"
        >
          Iniciar sesión
        </Button> */}
    </div>
  );
}
