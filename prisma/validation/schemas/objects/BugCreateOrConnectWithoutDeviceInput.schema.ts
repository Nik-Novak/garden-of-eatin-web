import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './BugWhereUniqueInput.schema';
import { BugCreateWithoutDeviceInputObjectSchema as BugCreateWithoutDeviceInputObjectSchema } from './BugCreateWithoutDeviceInput.schema';
import { BugUncheckedCreateWithoutDeviceInputObjectSchema as BugUncheckedCreateWithoutDeviceInputObjectSchema } from './BugUncheckedCreateWithoutDeviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BugWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BugCreateWithoutDeviceInputObjectSchema), z.lazy(() => BugUncheckedCreateWithoutDeviceInputObjectSchema)])
}).strict();
export const BugCreateOrConnectWithoutDeviceInputObjectSchema: z.ZodType<Prisma.BugCreateOrConnectWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.BugCreateOrConnectWithoutDeviceInput>;
export const BugCreateOrConnectWithoutDeviceInputObjectZodSchema = makeSchema();
