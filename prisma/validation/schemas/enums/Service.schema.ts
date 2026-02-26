import * as z from 'zod';

export const ServiceSchema = z.enum(['ServedToYou', 'ServedInLine'])

export type Service = z.infer<typeof ServiceSchema>;