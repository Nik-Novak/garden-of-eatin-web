import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BugCreateWithoutDeviceInputObjectSchema as BugCreateWithoutDeviceInputObjectSchema } from './BugCreateWithoutDeviceInput.schema';
import { BugUncheckedCreateWithoutDeviceInputObjectSchema as BugUncheckedCreateWithoutDeviceInputObjectSchema } from './BugUncheckedCreateWithoutDeviceInput.schema';
import { BugCreateOrConnectWithoutDeviceInputObjectSchema as BugCreateOrConnectWithoutDeviceInputObjectSchema } from './BugCreateOrConnectWithoutDeviceInput.schema';
import { BugCreateManyDeviceInputEnvelopeObjectSchema as BugCreateManyDeviceInputEnvelopeObjectSchema } from './BugCreateManyDeviceInputEnvelope.schema';
import { BugWhereUniqueInputObjectSchema as BugWhereUniqueInputObjectSchema } from './BugWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BugCreateWithoutDeviceInputObjectSchema), z.lazy(() => BugCreateWithoutDeviceInputObjectSchema).array(), z.lazy(() => BugUncheckedCreateWithoutDeviceInputObjectSchema), z.lazy(() => BugUncheckedCreateWithoutDeviceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BugCreateOrConnectWithoutDeviceInputObjectSchema), z.lazy(() => BugCreateOrConnectWithoutDeviceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BugCreateManyDeviceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BugWhereUniqueInputObjectSchema), z.lazy(() => BugWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BugUncheckedCreateNestedManyWithoutDeviceInputObjectSchema: z.ZodType<Prisma.BugUncheckedCreateNestedManyWithoutDeviceInput> = makeSchema() as unknown as z.ZodType<Prisma.BugUncheckedCreateNestedManyWithoutDeviceInput>;
export const BugUncheckedCreateNestedManyWithoutDeviceInputObjectZodSchema = makeSchema();
