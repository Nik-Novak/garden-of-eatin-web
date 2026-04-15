import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceInteractionCreateManyInputObjectSchema as ResourceInteractionCreateManyInputObjectSchema } from './objects/ResourceInteractionCreateManyInput.schema';

export const ResourceInteractionCreateManySchema: z.ZodType<Prisma.ResourceInteractionCreateManyArgs> = z.object({ data: z.union([ ResourceInteractionCreateManyInputObjectSchema, z.array(ResourceInteractionCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ResourceInteractionCreateManyArgs>;

export const ResourceInteractionCreateManyZodSchema = z.object({ data: z.union([ ResourceInteractionCreateManyInputObjectSchema, z.array(ResourceInteractionCreateManyInputObjectSchema) ]),  }).strict();