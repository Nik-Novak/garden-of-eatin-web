import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InviteCreateWithoutUserInputObjectSchema as InviteCreateWithoutUserInputObjectSchema } from './InviteCreateWithoutUserInput.schema';
import { InviteUncheckedCreateWithoutUserInputObjectSchema as InviteUncheckedCreateWithoutUserInputObjectSchema } from './InviteUncheckedCreateWithoutUserInput.schema';
import { InviteCreateOrConnectWithoutUserInputObjectSchema as InviteCreateOrConnectWithoutUserInputObjectSchema } from './InviteCreateOrConnectWithoutUserInput.schema';
import { InviteUpsertWithoutUserInputObjectSchema as InviteUpsertWithoutUserInputObjectSchema } from './InviteUpsertWithoutUserInput.schema';
import { InviteWhereInputObjectSchema as InviteWhereInputObjectSchema } from './InviteWhereInput.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema';
import { InviteUpdateToOneWithWhereWithoutUserInputObjectSchema as InviteUpdateToOneWithWhereWithoutUserInputObjectSchema } from './InviteUpdateToOneWithWhereWithoutUserInput.schema';
import { InviteUpdateWithoutUserInputObjectSchema as InviteUpdateWithoutUserInputObjectSchema } from './InviteUpdateWithoutUserInput.schema';
import { InviteUncheckedUpdateWithoutUserInputObjectSchema as InviteUncheckedUpdateWithoutUserInputObjectSchema } from './InviteUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InviteCreateWithoutUserInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InviteCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => InviteUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => InviteWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => InviteWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => InviteWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => InviteUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => InviteUpdateWithoutUserInputObjectSchema), z.lazy(() => InviteUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const InviteUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.InviteUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteUncheckedUpdateOneWithoutUserNestedInput>;
export const InviteUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
