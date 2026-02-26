import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInvites_sentInputObjectSchema as UserUpdateWithoutInvites_sentInputObjectSchema } from './UserUpdateWithoutInvites_sentInput.schema';
import { UserUncheckedUpdateWithoutInvites_sentInputObjectSchema as UserUncheckedUpdateWithoutInvites_sentInputObjectSchema } from './UserUncheckedUpdateWithoutInvites_sentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInvites_sentInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInvites_sentInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInvites_sentInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvites_sentInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvites_sentInput>;
export const UserUpdateToOneWithWhereWithoutInvites_sentInputObjectZodSchema = makeSchema();
