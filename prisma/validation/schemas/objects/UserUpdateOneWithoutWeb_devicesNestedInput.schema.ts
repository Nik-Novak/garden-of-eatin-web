import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWeb_devicesInputObjectSchema as UserCreateWithoutWeb_devicesInputObjectSchema } from './UserCreateWithoutWeb_devicesInput.schema';
import { UserUncheckedCreateWithoutWeb_devicesInputObjectSchema as UserUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './UserUncheckedCreateWithoutWeb_devicesInput.schema';
import { UserCreateOrConnectWithoutWeb_devicesInputObjectSchema as UserCreateOrConnectWithoutWeb_devicesInputObjectSchema } from './UserCreateOrConnectWithoutWeb_devicesInput.schema';
import { UserUpsertWithoutWeb_devicesInputObjectSchema as UserUpsertWithoutWeb_devicesInputObjectSchema } from './UserUpsertWithoutWeb_devicesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema as UserUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWeb_devicesInput.schema';
import { UserUpdateWithoutWeb_devicesInputObjectSchema as UserUpdateWithoutWeb_devicesInputObjectSchema } from './UserUpdateWithoutWeb_devicesInput.schema';
import { UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema as UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema } from './UserUncheckedUpdateWithoutWeb_devicesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWeb_devicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWeb_devicesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWeb_devicesInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUpdateWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWeb_devicesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutWeb_devicesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutWeb_devicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutWeb_devicesNestedInput>;
export const UserUpdateOneWithoutWeb_devicesNestedInputObjectZodSchema = makeSchema();
