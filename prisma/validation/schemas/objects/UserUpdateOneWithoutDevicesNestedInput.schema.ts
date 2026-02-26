import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserCreateWithoutDevicesInputObjectSchema as UserCreateWithoutDevicesInputObjectSchema } from './UserCreateWithoutDevicesInput.schema';
import { UserUncheckedCreateWithoutDevicesInputObjectSchema as UserUncheckedCreateWithoutDevicesInputObjectSchema } from './UserUncheckedCreateWithoutDevicesInput.schema';
import { UserCreateOrConnectWithoutDevicesInputObjectSchema as UserCreateOrConnectWithoutDevicesInputObjectSchema } from './UserCreateOrConnectWithoutDevicesInput.schema';
import { UserUpsertWithoutDevicesInputObjectSchema as UserUpsertWithoutDevicesInputObjectSchema } from './UserUpsertWithoutDevicesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDevicesInputObjectSchema as UserUpdateToOneWithWhereWithoutDevicesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDevicesInput.schema';
import { UserUpdateWithoutDevicesInputObjectSchema as UserUpdateWithoutDevicesInputObjectSchema } from './UserUpdateWithoutDevicesInput.schema';
import { UserUncheckedUpdateWithoutDevicesInputObjectSchema as UserUncheckedUpdateWithoutDevicesInputObjectSchema } from './UserUncheckedUpdateWithoutDevicesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDevicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDevicesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDevicesInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDevicesInputObjectSchema), z.lazy(() => UserUpdateWithoutDevicesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDevicesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutDevicesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutDevicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutDevicesNestedInput>;
export const UserUpdateOneWithoutDevicesNestedInputObjectZodSchema = makeSchema();
