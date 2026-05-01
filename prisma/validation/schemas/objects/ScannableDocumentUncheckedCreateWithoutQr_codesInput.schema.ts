import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScannableDocumentTypeSchema } from '../enums/ScannableDocumentType.schema';
import { PlaceCreateEnvelopeInputObjectSchema as PlaceCreateEnvelopeInputObjectSchema } from './PlaceCreateEnvelopeInput.schema';
import { PlaceCreateInputObjectSchema as PlaceCreateInputObjectSchema } from './PlaceCreateInput.schema';
import { PointCreateEnvelopeInputObjectSchema as PointCreateEnvelopeInputObjectSchema } from './PointCreateEnvelopeInput.schema';
import { PointCreateInputObjectSchema as PointCreateInputObjectSchema } from './PointCreateInput.schema';
import { PrintSettingsCreateEnvelopeInputObjectSchema as PrintSettingsCreateEnvelopeInputObjectSchema } from './PrintSettingsCreateEnvelopeInput.schema';
import { PrintSettingsCreateInputObjectSchema as PrintSettingsCreateInputObjectSchema } from './PrintSettingsCreateInput.schema';
import { ScannableDocumentMealHitUncheckedCreateNestedManyWithoutScannable_documentInputObjectSchema as ScannableDocumentMealHitUncheckedCreateNestedManyWithoutScannable_documentInputObjectSchema } from './ScannableDocumentMealHitUncheckedCreateNestedManyWithoutScannable_documentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: ScannableDocumentTypeSchema,
  name: z.string(),
  place: z.union([z.lazy(() => PlaceCreateEnvelopeInputObjectSchema), z.lazy(() => PlaceCreateInputObjectSchema)]),
  location: z.union([z.lazy(() => PointCreateEnvelopeInputObjectSchema), z.lazy(() => PointCreateInputObjectSchema)]),
  timezone: z.string(),
  print_settings: z.union([z.lazy(() => PrintSettingsCreateEnvelopeInputObjectSchema), z.lazy(() => PrintSettingsCreateInputObjectSchema)]),
  file_url: z.string().optional().nullable(),
  submitter_id: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  scannable_document_meal_hits: z.lazy(() => ScannableDocumentMealHitUncheckedCreateNestedManyWithoutScannable_documentInputObjectSchema).optional()
}).strict();
export const ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectSchema: z.ZodType<Prisma.ScannableDocumentUncheckedCreateWithoutQr_codesInput> = makeSchema() as unknown as z.ZodType<Prisma.ScannableDocumentUncheckedCreateWithoutQr_codesInput>;
export const ScannableDocumentUncheckedCreateWithoutQr_codesInputObjectZodSchema = makeSchema();
