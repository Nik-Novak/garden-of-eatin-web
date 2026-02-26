import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './BugWhereUniqueInput.schema';
import { BugUpdateWithoutDeviceInputObjectSchema as BugUpdateWithoutDeviceInputObjectSchema } from './BugUpdateWithoutDeviceInput.schema';
import { BugUncheckedUpdateWithoutDeviceInputObjectSchema as BugUncheckedUpdateWithoutDeviceInputObjectSchema } from './BugUncheckedUpdateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BugWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BugUpdateWithoutDeviceInputObjectSchema), z.lazy(() => BugUncheckedUpdateWithoutDeviceInputObjectSchema)])
}).strict();
export const BugUpdateWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.BugUpdateWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.BugUpdateWithWhereUniqueWithoutDeviceInput>;
export const BugUpdateWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
