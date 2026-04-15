import * as z from 'zod';

export const ResourceFeatureSchema = z.enum(['Restroom', 'LoadingDock', 'ForkliftAvailable', 'PalletJackAvailable', 'GroundLevel', 'ADA_Accessible', 'RefrigeratedGoods', 'VolunteerAssistance'])

export type ResourceFeature = z.infer<typeof ResourceFeatureSchema>;