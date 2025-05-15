import { NextRequest } from 'next/server'; 
import { prisma } from '../../../lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') || 1);
  const category = searchParams.get('category');
  const pageSize = 6;
  const skip = (page - 1) * pageSize;

  const where = category ? { category } : {};

  const products = await prisma.product.findMany({
    where,
    skip,
    take: pageSize,
  });

  const totalProducts = await prisma.product.count({ where });

  return Response.json({
    products,
    totalPages: Math.ceil(totalProducts / pageSize),
  });
}
