import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutInvite_usedInputObjectSchema as UserCreateWithoutInvite_usedInputObjectSchema } from './UserCreateWithoutInvite_usedInput.schema';
import { UserUncheckedCreateWithoutInvite_usedInputObjectSchema as UserUncheckedCreateWithoutInvite_usedInputObjectSchema } from './UserUncheckedCreateWithoutInvite_usedInput.schema';
import { UserCreateOrConnectWithoutInvite_usedInputObjectSchema as UserCreateOrConnectWithoutInvite_usedInputObjectSchema } from './UserCreateOrConnectWithoutInvite_usedInput.schema';
import { UserUpsertWithoutInvite_usedInputObjectSchema as UserUpsertWithoutInvite_usedInputObjectSchema } from './UserUpsertWithoutInvite_usedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInvite_usedInputObjectSchema as UserUpdateToOneWithWhereWithoutInvite_usedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInvite_usedInput.schema';
import { UserUpdateWithoutInvite_usedInputObjectSchema as UserUpdateWithoutInvite_usedInputObjectSchema } from './UserUpdateWithoutInvite_usedInput.schema';
import { UserUncheckedUpdateWithoutInvite_usedInputObjectSchema as UserUncheckedUpdateWithoutInvite_usedInputObjectSchema } from './UserUncheckedUpdateWithoutInvite_usedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvite_usedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvite_usedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInvite_usedInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUpdateWithoutInvite_usedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvite_usedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutInvite_usedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutInvite_usedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutInvite_usedNestedInput>;
export const UserUpdateOneWithoutInvite_usedNestedInputObjectZodSchema = makeSchema();
