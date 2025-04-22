import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button component={Link} href='/register' variant="contained">
        Register
      </Button>
      <h1>Welcome to Expense Tracker</h1>
      <p>
        Expense Tracker is a tool designed to help track financial transactions
        and manage personal finances effectively.
      </p>
      <Image
        src="/assets/tracker-logo.png"
        alt="Expense Tracker Logo"
        width={500}
        height={500}
      />
    </div>
  );
}
