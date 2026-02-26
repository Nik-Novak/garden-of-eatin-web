import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDevicesInputObjectSchema as UserCreateWithoutDevicesInputObjectSchema } from './UserCreateWithoutDevicesInput.schema';
import { UserUncheckedCreateWithoutDevicesInputObjectSchema as UserUncheckedCreateWithoutDevicesInputObjectSchema } from './UserUncheckedCreateWithoutDevicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDevicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevicesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDevicesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDevicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutDevicesInput>;
export const UserCreateOrConnectWithoutDevicesInputObjectZodSchema = makeSchema();
