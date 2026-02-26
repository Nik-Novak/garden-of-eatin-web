import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutOpportunity_applicationsInputObjectSchema as UserCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserCreateWithoutOpportunity_applicationsInput.schema';
import { UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema as UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema } from './UserUncheckedCreateWithoutOpportunity_applicationsInput.schema';
import { UserCreateOrConnectWithoutOpportunity_applicationsInputObjectSchema as UserCreateOrConnectWithoutOpportunity_applicationsInputObjectSchema } from './UserCreateOrConnectWithoutOpportunity_applicationsInput.schema';
import { UserUpsertWithoutOpportunity_applicationsInputObjectSchema as UserUpsertWithoutOpportunity_applicationsInputObjectSchema } from './UserUpsertWithoutOpportunity_applicationsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOpportunity_applicationsInputObjectSchema as UserUpdateToOneWithWhereWithoutOpportunity_applicationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOpportunity_applicationsInput.schema';
import { UserUpdateWithoutOpportunity_applicationsInputObjectSchema as UserUpdateWithoutOpportunity_applicationsInputObjectSchema } from './UserUpdateWithoutOpportunity_applicationsInput.schema';
import { UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema as UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema } from './UserUncheckedUpdateWithoutOpportunity_applicationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOpportunity_applicationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOpportunity_applicationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOpportunity_applicationsInputObjectSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUpdateWithoutOpportunity_applicationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOpportunity_applicationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutOpportunity_applicationsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutOpportunity_applicationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutOpportunity_applicationsNestedInput>;
export const UserUpdateOneWithoutOpportunity_applicationsNestedInputObjectZodSchema = makeSchema();
