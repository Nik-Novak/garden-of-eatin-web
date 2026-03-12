import * as z from 'zod';
export const DeviceAgreementFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  device: z.unknown(),
  device_id: z.string(),
  agreement: z.unknown(),
  agreement_id: z.string(),
  opened: z.date(),
  accepted: z.date(),
  created_at: z.date(),
  updated_at: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});