import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema';

export const InviteDeleteManySchema: z.ZodType<Prisma.InviteDeleteManyArgs> = z.object({ where: InviteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InviteDeleteManyArgs>;

export const InviteDeleteManyZodSchema = z.object({ where: InviteWhereInputObjectSchema.optional() }).strict();