import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOpportunity_applicationsInputObjectSchema as UserUpdateWithoutOpportunity_applicationsInputObjectSchema } from './UserUpdateWithoutOpportunity_applicationsInput.schema';
import { UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema as UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema } from './UserUncheckedUpdateWithoutOpportunity_applicationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOpportunity_applicationsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOpportunity_applicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOpportunity_applicationsInput>;
export const UserUpdateToOneWithWhereWithoutOpportunity_applicationsInputObjectZodSchema = makeSchema();
