import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInvite_usedInputObjectSchema as UserCreateWithoutInvite_usedInputObjectSchema } from './UserCreateWithoutInvite_usedInput.schema';
import { UserUncheckedCreateWithoutInvite_usedInputObjectSchema as UserUncheckedCreateWithoutInvite_usedInputObjectSchema } from './UserUncheckedCreateWithoutInvite_usedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvite_usedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInvite_usedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvite_usedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInvite_usedInput>;
export const UserCreateOrConnectWithoutInvite_usedInputObjectZodSchema = makeSchema();
