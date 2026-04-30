import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().max(24).optional(),
  uuid: z.string().optional()
}).strict();
export const WebDeviceWhereUniqueInputObjectSchema: z.ZodType<Prisma.WebDeviceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WebDeviceWhereUniqueInput>;
export const WebDeviceWhereUniqueInputObjectZodSchema = makeSchema();
