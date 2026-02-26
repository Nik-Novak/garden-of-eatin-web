import * as z from 'zod';

export const FeatureSchema = z.enum(['VeganOptions', 'WifiAvailable', 'Outlets', 'Seating', 'Coffee', 'Snacks', 'PetFriendly', 'Donations', 'PetSupplies', 'Entertainment', 'Groceries', 'Shower', 'Laundry', 'Medical'])

export type Feature = z.infer<typeof FeatureSchema>;