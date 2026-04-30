import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWeb_devicesInputObjectSchema as UserCreateWithoutWeb_devicesInputObjectSchema } from './UserCreateWithoutWeb_devicesInput.schema';
import { UserUncheckedCreateWithoutWeb_devicesInputObjectSchema as UserUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './UserUncheckedCreateWithoutWeb_devicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWeb_devicesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWeb_devicesInput>;
export const UserCreateOrConnectWithoutWeb_devicesInputObjectZodSchema = makeSchema();
