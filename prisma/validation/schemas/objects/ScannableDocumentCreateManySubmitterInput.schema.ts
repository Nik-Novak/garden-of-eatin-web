import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { PlaceCreateEnvelopeInputObjectSchema as PlaceCreateEnvelopeInputObjectSchema } from './PlaceCreateEnvelopeInput.schema';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { PrintSettingsCreateEnvelopeInputObjectSchema as PrintSettingsCreateEnvelopeInputObjectSchema } from './PrintSettingsCreateEnvelopeInput.schema';
import { PrintSettingsCreateInputObjectSchema as PrintSettingsCreateInputObjectSchema } from './PrintSettingsCreateInput.schema'

const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  type: ScannableDocumentTypeSchema,
  name: z.string(),
  place: z.union([z.lazy(() => PlaceCreateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  timezone: z.string(),
  print_settings: z.union([z.lazy(() => PrintSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => PrintSettingsCreateInputObjectSchema)]),
  file_url: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const ScannableDocumentCreateManySubmitterInputObjectSchema: z.ZodType<Prisma.ScannableDocumentCreateManySubmitterInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentCreateManySubmitterInput>;
export const ScannableDocumentCreateManySubmitterInputObjectZodSchema = makeSchema();
