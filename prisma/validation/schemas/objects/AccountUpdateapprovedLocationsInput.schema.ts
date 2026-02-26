import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const AccountUpdateapprovedLocationsInputObjectSchema: z.ZodType<Prisma.AccountUpdateapprovedLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateapprovedLocationsInput>;
export const AccountUpdateapprovedLocationsInputObjectZodSchema = makeSchema();
