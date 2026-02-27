import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutOpportunity_applicationsInputObjectSchema as UserCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserCreateWithoutOpportunity_applicationsInput.schema';
import { UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema as UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserUncheckedCreateWithoutOpportunity_applicationsInput.schema';
import { UserCreateOrConnectWithoutOpportunity_applicationsInputObjectSchema as UserCreateOrConnectWithoutOpportunity_applicationsInputObjectSchema } from './UserCreateOrConnectWithoutOpportunity_applicationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOpportunity_applicationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOpportunity_applicationsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOpportunity_applicationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOpportunity_applicationsInput>;
export const UserCreateNestedOneWithoutOpportunity_applicationsInputObjectZodSchema = makeSchema();
