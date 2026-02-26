import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutInvite_usedInputObjectSchema as UserCreateWithoutInvite_usedInputObjectSchema } from './UserCreateWithoutInvite_usedInput.schema';
import { UserUncheckedCreateWithoutInvite_usedInputObjectSchema as UserUncheckedCreateWithoutInvite_usedInputObjectSchema } from './UserUncheckedCreateWithoutInvite_usedInput.schema';
import { UserCreateOrConnectWithoutInvite_usedInputObjectSchema as UserCreateOrConnectWithoutInvite_usedInputObjectSchema } from './UserCreateOrConnectWithoutInvite_usedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvite_usedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvite_usedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInvite_usedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvite_usedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInvite_usedInput>;
export const UserCreateNestedOneWithoutInvite_usedInputObjectZodSchema = makeSchema();
