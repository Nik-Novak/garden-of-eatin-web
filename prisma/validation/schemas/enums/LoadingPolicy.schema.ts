import * as z from 'zod';

export const LoadingPolicySchema = z.enum(['LoadedForYou', 'StaffAssisted', 'SelfLoad'])

export type LoadingPolicy = z.infer<typeof LoadingPolicySchema>;