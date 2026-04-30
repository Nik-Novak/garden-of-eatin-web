import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWeb_devicesInputObjectSchema as UserCreateWithoutWeb_devicesInputObjectSchema } from './UserCreateWithoutWeb_devicesInput.schema';
import { UserUncheckedCreateWithoutWeb_devicesInputObjectSchema as UserUncheckedCreateWithoutWeb_devicesInputObjectSchema } from './UserUncheckedCreateWithoutWeb_devicesInput.schema';
import { UserCreateOrConnectWithoutWeb_devicesInputObjectSchema as UserCreateOrConnectWithoutWeb_devicesInputObjectSchema } from './UserCreateOrConnectWithoutWeb_devicesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWeb_devicesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWeb_devicesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWeb_devicesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWeb_devicesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWeb_devicesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutWeb_devicesInput>;
export const UserCreateNestedOneWithoutWeb_devicesInputObjectZodSchema = makeSchema();
