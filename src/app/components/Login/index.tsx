"use client";
import Image from "next/image";
import Input from "../shared/Input";
import { useFormik } from "formik";
import { validationSchema } from "./loginform.form";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push("/inicio");
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
        <div>
          <input
            placeholder="Usuario"
            name="identifier"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.identifier}
            className={`
              dl-outline-0
              dl-w-full
              dl-border
              dl-py-2.5
              dl-px-4
              dl-pr-12
              dl-rounded-lg
              dl-font-normal
              placeholder:dl-text-neutral-dark
              ${
                formik.touched.identifier && formik.errors.identifier
                  ? `dl-border-support-negative-medium`
                  : ""
              }
            `}
          />
          {formik.touched.identifier && formik.errors.identifier ? (
            <span className="dl-text-xs dl-text-support-negative-medium">
              {formik.errors.identifier}
            </span>
          ) : null}
        </div>

        <div>
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className={`
              dl-outline-0
              dl-w-full
              dl-border
              dl-py-2.5
              dl-px-4
              dl-pr-12
              dl-rounded-lg
              dl-font-normal
              placeholder:dl-text-neutral-dark
            `}
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="dl-text-xs dl-text-support-negative-medium">
              {formik.errors.password}
            </span>
          ) : null}
        </div>

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
