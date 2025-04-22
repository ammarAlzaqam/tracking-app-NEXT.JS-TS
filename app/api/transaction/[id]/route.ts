import connectDB from "@/app/libs/connectDB";
import Transaction from "@/app/models/Transaction";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

interface Body {
  name: string;
  amount: number;
  startDate: Date;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    await connectDB();
    const transaction = await Transaction.findById(params.id);
    return NextResponse.json(transaction, { status: 200 });
  } catch (e: any) {
    console.error(e?.message);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Params }) {
  try {
    await connectDB();
    const { name, amount, startDate }: Body = await req.json();
    const transaction = Transaction.findByIdAndUpdate(
      params.id,
      {
        name,
        amount,
        startDate,
      },
      { new: true }
    );
    return NextResponse.json(transaction);
  } catch (e: any) {
    console.error(e?.message);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  try {
    await connectDB();
    await Transaction.findByIdAndDelete(params.id);
    return NextResponse.json(
      { message: "Deleted transaction successfully" },
      { status: 200 }
    );
  } catch (e: any) {
    console.error(e?.message);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
