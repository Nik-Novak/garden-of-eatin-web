import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutOpportunity_applicationsInputObjectSchema as UserUpdateWithoutOpportunity_applicationsInputObjectSchema } from './UserUpdateWithoutOpportunity_applicationsInput.schema';
import { UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema as UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema } from './UserUncheckedUpdateWithoutOpportunity_applicationsInput.schema';
import { UserCreateWithoutOpportunity_applicationsInputObjectSchema as UserCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserCreateWithoutOpportunity_applicationsInput.schema';
import { UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema as UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserUncheckedCreateWithoutOpportunity_applicationsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOpportunity_applicationsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOpportunity_applicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOpportunity_applicationsInput>;
export const UserUpsertWithoutOpportunity_applicationsInputObjectZodSchema = makeSchema();
