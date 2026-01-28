import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query") || '';

  const products = await prisma.product.findMany({
    where: { name: { contains: query, mode: "insensitive" } },
    take: 5,
  });

  return NextResponse.json(products);
}
