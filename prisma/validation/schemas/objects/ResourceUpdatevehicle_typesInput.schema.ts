import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleTypeSchema } from '../enums/VehicleType.schema'

const makeSchema = () => z.object({
  set: VehicleTypeSchema.array().optional(),
  push: z.union([VehicleTypeSchema, VehicleTypeSchema.array()]).optional()
}).strict();
export const ResourceUpdatevehicle_typesInputObjectSchema: z.ZodType<Prisma.ResourceUpdatevehicle_typesInput> = makeSchema() as unknown as z.ZodType<Prisma.ResourceUpdatevehicle_typesInput>;
export const ResourceUpdatevehicle_typesInputObjectZodSchema = makeSchema();
