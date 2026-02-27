import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInvite_usedInputObjectSchema as UserUpdateWithoutInvite_usedInputObjectSchema } from './UserUpdateWithoutInvite_usedInput.schema';
import { UserUncheckedUpdateWithoutInvite_usedInputObjectSchema as UserUncheckedUpdateWithoutInvite_usedInputObjectSchema } from './UserUncheckedUpdateWithoutInvite_usedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvite_usedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInvite_usedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvite_usedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvite_usedInput>;
export const UserUpdateToOneWithWhereWithoutInvite_usedInputObjectZodSchema = makeSchema();
