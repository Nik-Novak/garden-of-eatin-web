import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserUpdateWithoutInvite_usedInputObjectSchema as UserUpdateWithoutInvite_usedInputObjectSchema } from './UserUpdateWithoutInvite_usedInput.schema';
import { UserUncheckedUpdateWithoutInvite_usedInputObjectSchema as UserUncheckedUpdateWithoutInvite_usedInputObjectSchema } from './UserUncheckedUpdateWithoutInvite_usedInput.schema';
import { UserCreateWithoutInvite_usedInputObjectSchema as UserCreateWithoutInvite_usedInputObjectSchema } from './UserCreateWithoutInvite_usedInput.schema';
import { UserUncheckedCreateWithoutInvite_usedInputObjectSchema as UserUncheckedCreateWithoutInvite_usedInputObjectSchema } from './UserUncheckedCreateWithoutInvite_usedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvite_usedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvite_usedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInvite_usedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInvite_usedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInvite_usedInput>;
export const UserUpsertWithoutInvite_usedInputObjectZodSchema = makeSchema();
