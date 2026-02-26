import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './BugWhereUniqueInput.schema';
import { BugUpdateWithoutDeviceInputObjectSchema as BugUpdateWithoutDeviceInputObjectSchema } from './BugUpdateWithoutDeviceInput.schema';
import { BugUncheckedUpdateWithoutDeviceInputObjectSchema as BugUncheckedUpdateWithoutDeviceInputObjectSchema } from './BugUncheckedUpdateWithoutDeviceInput.schema';
import { BugCreateWithoutDeviceInputObjectSchema as BugCreateWithoutDeviceInputObjectSchema } from './BugCreateWithoutDeviceInput.schema';
import { BugUncheckedCreateWithoutDeviceInputObjectSchema as BugUncheckedCreateWithoutDeviceInputObjectSchema } from './BugUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BugWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BugUpdateWithoutDeviceInputObjectSchema), z.lazy(() => BugUncheckedUpdateWithoutDeviceInputObjectSchema)]),
  create: z.union([z.lazy(() => BugCreateWithoutDeviceInputObjectSchema), z.lazy(() => BugUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const BugUpsertWithWhereUniqueWithoutDeviceInputObjectSchema: z.ZodType<Prisma.BugUpsertWithWhereUniqueWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.BugUpsertWithWhereUniqueWithoutDeviceInput>;
export const BugUpsertWithWhereUniqueWithoutDeviceInputObjectZodSchema = makeSchema();
