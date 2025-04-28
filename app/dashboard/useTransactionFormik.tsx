"use client";
import { FormikProps, FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import { addTransactionsApiRequest } from "../libs/request";
import { useErrorStore } from "../store/useErrorStore";
import { useTransactionsStore } from "../store/useTransactionsStore";

export default function useTransactionFormik(): FormikProps<FormikValues> {
  const { setError } = useErrorStore();
  const { addTransaction } = useTransactionsStore();
  const formik = useFormik<FormikValues>({
    initialValues: {
      name: "",
      amount: "",
      startDate: new Date().toISOString().split("T")[0],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("transaction name is required"),
      amount: Yup.string()
        .required("amount is required")
        .matches(/^[-+]?[0-9]+$/, "Invalid amount value"),
      // 01 => 09 | 10 => 19 | 20 => 29 | 20 => 31
      startDate: Yup.string().matches(
        /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
        "Invalid date format, expected YYYY-MM-DD"
      ),
    }),
    onSubmit: async (values) => {
      const transaction = await addTransactionsApiRequest(values);
      if (!transaction.success) {
        setError(transaction.message as string, "transaction");
        return;
      }
      setError(null, "transaction");
      addTransaction({
        ...transaction.data,
        startDate: values.startDate || new Date().toISOString().split("T")[0],
      });
      formik.resetForm();
    },
  });

  return formik;
}
