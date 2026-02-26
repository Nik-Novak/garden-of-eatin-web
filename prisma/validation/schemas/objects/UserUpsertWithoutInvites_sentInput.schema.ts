import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutInvites_sentInputObjectSchema as UserUpdateWithoutInvites_sentInputObjectSchema } from './UserUpdateWithoutInvites_sentInput.schema';
import { UserUncheckedUpdateWithoutInvites_sentInputObjectSchema as UserUncheckedUpdateWithoutInvites_sentInputObjectSchema } from './UserUncheckedUpdateWithoutInvites_sentInput.schema';
import { UserCreateWithoutInvites_sentInputObjectSchema as UserCreateWithoutInvites_sentInputObjectSchema } from './UserCreateWithoutInvites_sentInput.schema';
import { UserUncheckedCreateWithoutInvites_sentInputObjectSchema as UserUncheckedCreateWithoutInvites_sentInputObjectSchema } from './UserUncheckedCreateWithoutInvites_sentInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvites_sentInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvites_sentInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInvites_sentInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInvites_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInvites_sentInput>;
export const UserUpsertWithoutInvites_sentInputObjectZodSchema = makeSchema();
