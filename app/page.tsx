"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubTitle, Title, WalletLogo } from "./login/styled";

export default function Home() {
  
  return (
    <div>
      <WalletLogo
        src="/assets/tracker-logo.png"
        alt="Expense Tracker Logo"
        width={500}
        height={500}
        sx={{mt: 2}}
      />
      <Title>Welcome to Expense Tracker</Title>
      <SubTitle>
        Expense Tracker is a tool designed to help track financial transactions
        and manage personal finances effectively.
      </SubTitle>
    </div>
  );
}
