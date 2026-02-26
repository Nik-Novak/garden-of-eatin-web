import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserCreateWithoutDevicesInputObjectSchema as UserCreateWithoutDevicesInputObjectSchema } from './UserCreateWithoutDevicesInput.schema';
import { UserUncheckedCreateWithoutDevicesInputObjectSchema as UserUncheckedCreateWithoutDevicesInputObjectSchema } from './UserUncheckedCreateWithoutDevicesInput.schema';
import { UserCreateOrConnectWithoutDevicesInputObjectSchema as UserCreateOrConnectWithoutDevicesInputObjectSchema } from './UserCreateOrConnectWithoutDevicesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDevicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDevicesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDevicesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDevicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDevicesInput>;
export const UserCreateNestedOneWithoutDevicesInputObjectZodSchema = makeSchema();
