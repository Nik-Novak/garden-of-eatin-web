import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteCreateManyInviterInputObjectSchema as InviteCreateManyInviterInputObjectSchema } from './InviteCreateManyInviterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InviteCreateManyInviterInputObjectSchema), z.lazy(() => InviteCreateManyInviterInputObjectSchema).array()])
}).strict();
export const InviteCreateManyInviterInputEnvelopeObjectSchema: z.ZodType<Prisma.InviteCreateManyInviterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateManyInviterInputEnvelope>;
export const InviteCreateManyInviterInputEnvelopeObjectZodSchema = makeSchema();
