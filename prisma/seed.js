import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.product.createMany({
      data: [
        { name: 'Spaghetti', description: 'Delicious pasta', price: 12.05, category: 'Dinner', imageUrl: '/images/spaghetti.png', popular: true },
        { name: 'Gnocchi', description: 'Tasty gnocchi', price: 12.05, category: 'Lunch', imageUrl: '/images/gnocchi.png', popular: true },
        { name: 'Rovioli', description: 'Cheese-stuffed ravioli with herbs', price: 12.05, category: 'Dinner', imageUrl: '/images/rovioli.png', popular: true },
        { name: 'Penne Alla Vodak', description: 'Penne with creamy vodka sauce', price: 12.05, category: 'Dinner', imageUrl: '/images/penne-vodak.png', popular: true },
        { name: 'Risoto', description: 'Creamy risotto with herbs', price: 12.05, category: 'Lunch', imageUrl: '/images/risoto.png', popular: true },
        { name: 'Splitza Signature', description: 'Signature pizza with mixed toppings', price: 12.05, category: 'Dinner', imageUrl: '/images/splitza.png', popular: true },
      ],
    });
  }
  

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });