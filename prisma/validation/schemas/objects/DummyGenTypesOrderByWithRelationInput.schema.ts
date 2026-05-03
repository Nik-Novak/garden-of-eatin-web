import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QRActionUrlRedirectPayloadOrderByInputObjectSchema as QRActionUrlRedirectPayloadOrderByInputObjectSchema } from './QRActionUrlRedirectPayloadOrderByInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  qrarp: z.lazy(() => QRActionUrlRedirectPayloadOrderByInputObjectSchema).optional()
}).strict();
export const DummyGenTypesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DummyGenTypesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DummyGenTypesOrderByWithRelationInput>;
export const DummyGenTypesOrderByWithRelationInputObjectZodSchema = makeSchema();
