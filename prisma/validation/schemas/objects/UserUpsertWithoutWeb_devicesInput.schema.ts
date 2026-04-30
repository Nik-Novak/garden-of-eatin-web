import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutWeb_devicesInputObjectSchema as UserUpdateWithoutWeb_devicesInputObjectSchema } from './UserUpdateWithoutWeb_devicesInput.schema';
import { UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema as UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema } from './UserUncheckedUpdateWithoutWeb_devicesInput.schema';
import { UserCreateWithoutWeb_devicesInputObjectSchema as UserCreateWithoutWeb_devicesInputObjectSchema } from './UserCreateWithoutWeb_devicesInput.schema';
import { UserUncheckedCreateWithoutWeb_devicesInputObjectSchema as UserUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './UserUncheckedCreateWithoutWeb_devicesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWeb_devicesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWeb_devicesInput>;
export const UserUpsertWithoutWeb_devicesInputObjectZodSchema = makeSchema();
