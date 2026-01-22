import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'Admin',
        email: 'admin@example.com',
        password: hashSync('password', 10),
        role: 'ADMIN',
        verified: new Date(),
      },  
      {
        fullName: 'User',
        email: 'user@example.com',
        password: hashSync('password', 10),
        role: 'USER',
      }, 
    ]
  })
}

async function down () {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  } 
} 

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1  );
})