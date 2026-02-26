import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { InviteCreateWithoutUserInputObjectSchema as InviteCreateWithoutUserInputObjectSchema } from './InviteCreateWithoutUserInput.schema';
import { InviteUncheckedCreateWithoutUserInputObjectSchema as InviteUncheckedCreateWithoutUserInputObjectSchema } from './InviteUncheckedCreateWithoutUserInput.schema';
import { InviteCreateOrConnectWithoutUserInputObjectSchema as InviteCreateOrConnectWithoutUserInputObjectSchema } from './InviteCreateOrConnectWithoutUserInput.schema';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InviteCreateWithoutUserInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InviteCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => InviteWhereUniqueInputObjectSchema).optional()
}).strict();
export const InviteCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.InviteCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateNestedOneWithoutUserInput>;
export const InviteCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
