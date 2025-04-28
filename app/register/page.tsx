import { Metadata } from "next";
import RegisterClient from "./components/RegisterClient";

export const metadata: Metadata = {
    title: "Register",
    description: "",
}

export default function RegisterPage() {
  return <RegisterClient />;
}
