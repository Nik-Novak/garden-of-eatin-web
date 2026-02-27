import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInvites_sentInputObjectSchema as UserCreateWithoutInvites_sentInputObjectSchema } from './UserCreateWithoutInvites_sentInput.schema';
import { UserUncheckedCreateWithoutInvites_sentInputObjectSchema as UserUncheckedCreateWithoutInvites_sentInputObjectSchema } from './UserUncheckedCreateWithoutInvites_sentInput.schema';
import { UserCreateOrConnectWithoutInvites_sentInputObjectSchema as UserCreateOrConnectWithoutInvites_sentInputObjectSchema } from './UserCreateOrConnectWithoutInvites_sentInput.schema';
import { UserUpsertWithoutInvites_sentInputObjectSchema as UserUpsertWithoutInvites_sentInputObjectSchema } from './UserUpsertWithoutInvites_sentInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInvites_sentInputObjectSchema as UserUpdateToOneWithWhereWithoutInvites_sentInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInvites_sentInput.schema';
import { UserUpdateWithoutInvites_sentInputObjectSchema as UserUpdateWithoutInvites_sentInputObjectSchema } from './UserUpdateWithoutInvites_sentInput.schema';
import { UserUncheckedUpdateWithoutInvites_sentInputObjectSchema as UserUncheckedUpdateWithoutInvites_sentInputObjectSchema } from './UserUncheckedUpdateWithoutInvites_sentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvites_sentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvites_sentInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInvites_sentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUpdateWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvites_sentInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutInvites_sentNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvites_sentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutInvites_sentNestedInput>;
export const UserUpdateOneRequiredWithoutInvites_sentNestedInputObjectZodSchema = makeSchema();
