import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LoadingPolicySchema } from '../enums/LoadingPolicy.schema'

const makeSchema = () => z.object({
  set: LoadingPolicySchema.optional()
}).strict();
export const EnumLoadingPolicyFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumLoadingPolicyFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumLoadingPolicyFieldUpdateOperationsInput>;
export const EnumLoadingPolicyFieldUpdateOperationsInputObjectZodSchema = makeSchema();
