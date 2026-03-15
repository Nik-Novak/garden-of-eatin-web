import * as z from 'zod';

export const DeviceTypeSchema = z.enum(['UNKNOWN', 'PHONE', 'TABLET', 'TV', 'DESKTOP'])

export type DeviceType = z.infer<typeof DeviceTypeSchema>;