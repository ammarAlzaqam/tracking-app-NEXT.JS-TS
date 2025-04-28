import { useFormik, FormikProps, FormikValues } from "formik";
import * as Yup from "yup";
import authApiRequest from "../libs/request";
import { useErrorStore } from "../store/useErrorStore";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "next/navigation";

export default function useLoginFormik(): FormikProps<FormikValues> {
  const { setError } = useErrorStore();
  const { signin } = useAuthStore();
  const router = useRouter();
  const formik = useFormik<FormikValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      const data = await authApiRequest(values, "login");
      if (!data.token) {
        setError("Invalid email or password", 'login');
        return;
      }
      setError(null, "login");
      signin(data.user);
      router.push("/dashboard");
      formik.resetForm();
    },
  });
  return formik;
}
