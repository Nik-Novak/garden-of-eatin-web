import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ResourceCreateManyInputObjectSchema as ResourceCreateManyInputObjectSchema } from './objects/ResourceCreateManyInput.schema';

export const ResourceCreateManySchema: z.ZodType<Prisma.ResourceCreateManyArgs> = z.object({ data: z.union([ ResourceCreateManyInputObjectSchema, z.array(ResourceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ResourceCreateManyArgs>;

export const ResourceCreateManyZodSchema = z.object({ data: z.union([ ResourceCreateManyInputObjectSchema, z.array(ResourceCreateManyInputObjectSchema) ]),  }).strict();