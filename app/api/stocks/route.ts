import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  //get all notes
  //const notes = await prisma.stock.findMany();

  const email = "earningsreminder1@gmail.com";
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Notes",
      user,
    },
    {
      status: 200,
    }
  );
}

/*
  const startDate = new Date("2024-06-17T00:00:00Z");
  const endDate = new Date("2024-06-21T23:59:59Z");

  const stocks = await prisma.stock.findMany({
    where: {
      earningsDate: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
  */
