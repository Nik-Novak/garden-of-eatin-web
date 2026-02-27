import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FacetTypeSchema } from '../enums/FacetType.schema';
import { EnumFacetTypeFieldUpdateOperationsInputObjectSchema as EnumFacetTypeFieldUpdateOperationsInputObjectSchema } from './EnumFacetTypeFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  facet: z.union([FacetTypeSchema, z.lazy(() => EnumFacetTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  rating: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  feedback: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const FacetReviewUpdateInputObjectSchema: z.ZodType<Prisma.FacetReviewUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacetReviewUpdateInput>;
export const FacetReviewUpdateInputObjectZodSchema = makeSchema();
