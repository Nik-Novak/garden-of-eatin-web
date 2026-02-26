import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BugWhereInputObjectSchema as BugWhereInputObjectSchema } from './BugWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BugWhereInputObjectSchema).optional()
}).strict();
export const DeviceCountOutputTypeCountBugsArgsObjectSchema = makeSchema();
export const DeviceCountOutputTypeCountBugsArgsObjectZodSchema = makeSchema();
