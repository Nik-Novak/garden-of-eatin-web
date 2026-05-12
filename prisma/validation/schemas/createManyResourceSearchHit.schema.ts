import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceSearchHitCreateManyInputObjectSchema as ResourceSearchHitCreateManyInputObjectSchema } from './objects/ResourceSearchHitCreateManyInput.schema';

export const ResourceSearchHitCreateManySchema: z.ZodType<Prisma.ResourceSearchHitCreateManyArgs> = z.object({ data: z.union([ ResourceSearchHitCreateManyInputObjectSchema, z.array(ResourceSearchHitCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ResourceSearchHitCreateManyArgs>;

export const ResourceSearchHitCreateManyZodSchema = z.object({ data: z.union([ ResourceSearchHitCreateManyInputObjectSchema, z.array(ResourceSearchHitCreateManyInputObjectSchema) ]),  }).strict();