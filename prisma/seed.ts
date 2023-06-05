import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const HASH_SALT = 10;

const prisma = new PrismaClient();

async function hashPassword(plaintextPassword: string): Promise<string> {
  const hash = await bcrypt.hash(plaintextPassword, HASH_SALT);
  return hash;
}

async function main() {
  const createManyUsers = await prisma.user.createMany({
    data: [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: await hashPassword('secret'),
      },
      {
        firstName: 'Erick',
        lastName: 'Ericksson',
        email: 'erick@example.com',
        password: await hashPassword('secret'),
      },
      {
        firstName: 'Charles',
        lastName: 'Doe',
        email: 'charles@example.com',
        password: await hashPassword('secret'),
      },
      {
        firstName: 'David',
        lastName: 'Doe',
        email: 'david@example.com',
        password: await hashPassword('secret'),
      },
    ],
  });

  console.log({ createManyUsers });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
