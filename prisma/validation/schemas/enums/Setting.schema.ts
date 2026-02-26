import * as z from 'zod';

export const SettingSchema = z.enum(['Indoors', 'Outdoors'])

export type Setting = z.infer<typeof SettingSchema>;