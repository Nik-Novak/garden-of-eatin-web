import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BugScalarWhereInputObjectSchema as BugScalarWhereInputObjectSchema } from './BugScalarWhereInput.schema';
import { BugUpdateManyMutationInputObjectSchema as BugUpdateManyMutationInputObjectSchema } from './BugUpdateManyMutationInput.schema';
import { BugUncheckedUpdateManyWithoutDeviceInputObjectSchema as BugUncheckedUpdateManyWithoutDeviceInputObjectSchema } from './BugUncheckedUpdateManyWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BugScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BugUpdateManyMutationInputObjectSchema), z.lazy(() => BugUncheckedUpdateManyWithoutDeviceInputObjectSchema)])
}).strict();
export const BugUpdateManyWithWhereWithoutDeviceInputObjectSchema: z.ZodType<Prisma.BugUpdateManyWithWhereWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.BugUpdateManyWithWhereWithoutDeviceInput>;
export const BugUpdateManyWithWhereWithoutDeviceInputObjectZodSchema = makeSchema();
