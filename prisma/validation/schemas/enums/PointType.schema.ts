import * as z from 'zod';

export const PointTypeSchema = z.enum(['Point'])

export type PointType = z.infer<typeof PointTypeSchema>;