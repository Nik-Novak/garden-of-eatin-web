import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserUpdateWithoutDevicesInputObjectSchema as UserUpdateWithoutDevicesInputObjectSchema } from './UserUpdateWithoutDevicesInput.schema';
import { UserUncheckedUpdateWithoutDevicesInputObjectSchema as UserUncheckedUpdateWithoutDevicesInputObjectSchema } from './UserUncheckedUpdateWithoutDevicesInput.schema';
import { UserCreateWithoutDevicesInputObjectSchema as UserCreateWithoutDevicesInputObjectSchema } from './UserCreateWithoutDevicesInput.schema';
import { UserUncheckedCreateWithoutDevicesInputObjectSchema as UserUncheckedCreateWithoutDevicesInputObjectSchema } from './UserUncheckedCreateWithoutDevicesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutDevicesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDevicesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDevicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevicesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutDevicesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutDevicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutDevicesInput>;
export const UserUpsertWithoutDevicesInputObjectZodSchema = makeSchema();
