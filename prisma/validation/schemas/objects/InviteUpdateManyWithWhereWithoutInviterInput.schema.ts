import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteScalarWhereInputObjectSchema as InviteScalarWhereInputObjectSchema } from './InviteScalarWhereInput.schema';
import { InviteUpdateManyMutationInputObjectSchema as InviteUpdateManyMutationInputObjectSchema } from './InviteUpdateManyMutationInput.schema';
import { InviteUncheckedUpdateManyWithoutInviterInputObjectSchema as InviteUncheckedUpdateManyWithoutInviterInputObjectSchema } from './InviteUncheckedUpdateManyWithoutInviterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InviteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InviteUpdateManyMutationInputObjectSchema), z.lazy(() => InviteUncheckedUpdateManyWithoutInviterInputObjectSchema)])
}).strict();
export const InviteUpdateManyWithWhereWithoutInviterInputObjectSchema: z.ZodType<Prisma.InviteUpdateManyWithWhereWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpdateManyWithWhereWithoutInviterInput>;
export const InviteUpdateManyWithWhereWithoutInviterInputObjectZodSchema = makeSchema();
