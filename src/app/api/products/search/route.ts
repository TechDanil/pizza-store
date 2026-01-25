import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const products = await prisma.product.findMany({
    where: { name: { contains: query, mode: "insensitive" } },
    take: 5,
  });

  return NextResponse.json(products);
}
