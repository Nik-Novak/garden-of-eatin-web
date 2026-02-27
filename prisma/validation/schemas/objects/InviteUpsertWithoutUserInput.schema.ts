import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteUpdateWithoutUserInputObjectSchema as InviteUpdateWithoutUserInputObjectSchema } from './InviteUpdateWithoutUserInput.schema';
import { InviteUncheckedUpdateWithoutUserInputObjectSchema as InviteUncheckedUpdateWithoutUserInputObjectSchema } from './InviteUncheckedUpdateWithoutUserInput.schema';
import { InviteCreateWithoutUserInputObjectSchema as InviteCreateWithoutUserInputObjectSchema } from './InviteCreateWithoutUserInput.schema';
import { InviteUncheckedCreateWithoutUserInputObjectSchema as InviteUncheckedCreateWithoutUserInputObjectSchema } from './InviteUncheckedCreateWithoutUserInput.schema';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './InviteWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => InviteUpdateWithoutUserInputObjectSchema), z.lazy(() => InviteUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => InviteCreateWithoutUserInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => InviteWhereInputObjectSchema).optional()
}).strict();
export const InviteUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.InviteUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpsertWithoutUserInput>;
export const InviteUpsertWithoutUserInputObjectZodSchema = makeSchema();
