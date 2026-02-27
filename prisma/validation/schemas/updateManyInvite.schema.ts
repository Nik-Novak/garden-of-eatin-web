import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InviteUpdateManyMutationInputObjectSchema as InviteUpdateManyMutationInputObjectSchema } from './objects/InviteUpdateManyMutationInput.schema';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema';

export const InviteUpdateManySchema: z.ZodType<Prisma.InviteUpdateManyArgs> = z.object({ data: InviteUpdateManyMutationInputObjectSchema, where: InviteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InviteUpdateManyArgs>;

export const InviteUpdateManyZodSchema = z.object({ data: InviteUpdateManyMutationInputObjectSchema, where: InviteWhereInputObjectSchema.optional() }).strict();