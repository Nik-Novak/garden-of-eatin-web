import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleTypeSchema } from '../enums/VehicleType.schema'

const makeSchema = () => z.object({
  set: VehicleTypeSchema.array()
}).strict();
export const ResourceCreatevehicle_typesInputObjectSchema: z.ZodType<Prisma.ResourceCreatevehicle_typesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceCreatevehicle_typesInput>;
export const ResourceCreatevehicle_typesInputObjectZodSchema = makeSchema();
