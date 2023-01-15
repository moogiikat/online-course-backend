import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const client = new PrismaClient();

async function user_seeder() {
  const super_admin = {
    firstname: 'moc-admin',
    lastname: 'moc-admin',
    email: 'monkhoo1997ts@gmail.com',
    role: Role.ADMIN,
    password: await bcrypt.hash('MLM123!@', 10),
  };
  try {
    await client.user.create({ data: super_admin });
    console.log('Success => User seeder.');
  } catch (error) {
    console.log('Error => User seeder : ', error);
  }
}

user_seeder();
