import * as Yup from "yup";

export const validationSchema = Yup.object({
  identifier: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .test(
      "dotInEmail",
      "Debe ser un correo electrónico válido",
      (value: any) =>
        value && value.includes("@") && value.split("@")[1].includes(".")
    )
    .required("Requerido"),
  password: Yup.string().required("LA contraseña es requerida"),
});
