import { FormikProps, FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import authApiRequest from "../libs/request";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";
import { useErrorStore } from "../store/useErrorStore";

export default function UseRegisterFormik(): FormikProps<FormikValues> {
  // Define the type for form values
  const { signin } = useAuthStore();
  const { setError } = useErrorStore();
  const router = useRouter();

  const formik = useFormik<FormikValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/,
          "Invalid email format"
        )
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      const data = await authApiRequest(values, "register");
      if (!data.token) {
        setError("Registration failed. please try again!", "register");
        return;
      }
      setError(null, "register");
      signin(data.user);
      router.push("/dashboard");
      formik.resetForm();
    },
  });
  return formik;
}
