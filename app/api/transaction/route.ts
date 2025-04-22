import connectDB from "@/app/libs/connectDB";
import Transaction from "@/app/models/Transaction";
import { NextRequest, NextResponse } from "next/server";

// Get all transactions
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const userId = req.cookies.get("userId")?.value;
    const transaction = await Transaction.find({ userId });
    return NextResponse.json(transaction, { status: 200 });
  } catch (e: any) {
    console.error(e?.message);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}

interface Body {
  name: string;
  amount: number;
  startDate?: Date;
}

// create new transaction
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, amount, startDate }: Body = await req.json();
    const userId = req.cookies.get("userId")?.value;
    const transaction = await Transaction.create({
      name,
      amount,
      startDate,
      userId,
    });
    return NextResponse.json(transaction, { status: 200 });
  } catch (e: any) {
    console.error(e?.message);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}

// Delete all transactions
export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const userId = req.cookies.get("userId")?.value;
    await Transaction.deleteMany({ userId });
    return NextResponse.json({
      message: "Delete all transaction successfully",
    });
  } catch (e: any) {
    console.error(e?.message);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
