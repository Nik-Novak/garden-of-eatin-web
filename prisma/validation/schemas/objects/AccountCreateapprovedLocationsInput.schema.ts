import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const AccountCreateapprovedLocationsInputObjectSchema: z.ZodType<Prisma.AccountCreateapprovedLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateapprovedLocationsInput>;
export const AccountCreateapprovedLocationsInputObjectZodSchema = makeSchema();
