import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInvites_sentInputObjectSchema as UserCreateWithoutInvites_sentInputObjectSchema } from './UserCreateWithoutInvites_sentInput.schema';
import { UserUncheckedCreateWithoutInvites_sentInputObjectSchema as UserUncheckedCreateWithoutInvites_sentInputObjectSchema } from './UserUncheckedCreateWithoutInvites_sentInput.schema';
import { UserCreateOrConnectWithoutInvites_sentInputObjectSchema as UserCreateOrConnectWithoutInvites_sentInputObjectSchema } from './UserCreateOrConnectWithoutInvites_sentInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvites_sentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvites_sentInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInvites_sentInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvites_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInvites_sentInput>;
export const UserCreateNestedOneWithoutInvites_sentInputObjectZodSchema = makeSchema();
