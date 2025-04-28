import { Metadata } from "next";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Here you can add and remove transactions easily through a simple dashboard, and view all your transaction data.",
};

export default function HomePage() {
  return (
    <div>
      <HomeClient />
    </div>
  );
}
