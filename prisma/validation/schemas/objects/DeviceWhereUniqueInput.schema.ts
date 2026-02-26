import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string().optional()
}).strict();
export const DeviceWhereUniqueInputObjectSchema: z.ZodType<Prisma.DeviceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DeviceWhereUniqueInput>;
export const DeviceWhereUniqueInputObjectZodSchema = makeSchema();
