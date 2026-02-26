import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './InviteWhereInput.schema';
import { InviteUpdateWithoutUserInputObjectSchema as InviteUpdateWithoutUserInputObjectSchema } from './InviteUpdateWithoutUserInput.schema';
import { InviteUncheckedUpdateWithoutUserInputObjectSchema as InviteUncheckedUpdateWithoutUserInputObjectSchema } from './InviteUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InviteWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => InviteUpdateWithoutUserInputObjectSchema), z.lazy(() => InviteUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const InviteUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.InviteUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUpdateToOneWithWhereWithoutUserInput>;
export const InviteUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
