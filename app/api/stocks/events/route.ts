import { auth } from "@/auth";
import { getUserEventData } from "@/lib/query";
import { NextResponse } from "next/server";

const convertBigIntToString = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
};

export async function GET(request) {
  const session = await auth();
  // Získání parametrů z dotazu
  const { searchParams } = new URL(request.url);
  const startDate = new Date(searchParams.get("startDate"));
  const endDate = new Date(searchParams.get("endDate"));
  const event = searchParams.get("event");

  try {
    const data = await getUserEventData(
      session.user.email,
      startDate,
      endDate,
      event
    );

    const convertData = convertBigIntToString(data)

    return NextResponse.json(
      {
        success: true,
        message: "Stocks found within the specified earnings date range.",
        data: convertData,
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error message",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
