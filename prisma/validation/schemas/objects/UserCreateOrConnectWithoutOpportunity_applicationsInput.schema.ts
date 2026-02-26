import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOpportunity_applicationsInputObjectSchema as UserCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserCreateWithoutOpportunity_applicationsInput.schema';
import { UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema as UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserUncheckedCreateWithoutOpportunity_applicationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOpportunity_applicationsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOpportunity_applicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOpportunity_applicationsInput>;
export const UserCreateOrConnectWithoutOpportunity_applicationsInputObjectZodSchema = makeSchema();
