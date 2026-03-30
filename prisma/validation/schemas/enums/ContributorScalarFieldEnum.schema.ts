import * as z from 'zod';

export const ContributorScalarFieldEnumSchema = z.enum(['id', 'firstName', 'defaultImage', 'hoverImage', 'order', 'created_at', 'updated_at'])

export type ContributorScalarFieldEnum = z.infer<typeof ContributorScalarFieldEnumSchema>;