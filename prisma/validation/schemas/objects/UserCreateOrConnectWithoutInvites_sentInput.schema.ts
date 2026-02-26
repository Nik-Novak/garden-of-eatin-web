import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInvites_sentInputObjectSchema as UserCreateWithoutInvites_sentInputObjectSchema } from './UserCreateWithoutInvites_sentInput.schema';
import { UserUncheckedCreateWithoutInvites_sentInputObjectSchema as UserUncheckedCreateWithoutInvites_sentInputObjectSchema } from './UserUncheckedCreateWithoutInvites_sentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInvites_sentInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInvites_sentInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvites_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInvites_sentInput>;
export const UserCreateOrConnectWithoutInvites_sentInputObjectZodSchema = makeSchema();
