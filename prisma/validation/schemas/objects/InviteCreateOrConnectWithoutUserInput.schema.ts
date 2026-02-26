import * as z from 'zod';
import type { Prisma } from '../../../../.generated/prisma/client';
import { InviteWhereUniqueInputObjectSchema as InviteWhereUniqueInputObjectSchema } from './InviteWhereUniqueInput.schema';
import { InviteCreateWithoutUserInputObjectSchema as InviteCreateWithoutUserInputObjectSchema } from './InviteCreateWithoutUserInput.schema';
import { InviteUncheckedCreateWithoutUserInputObjectSchema as InviteUncheckedCreateWithoutUserInputObjectSchema } from './InviteUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InviteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InviteCreateWithoutUserInputObjectSchema), z.lazy(() => InviteUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const InviteCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.InviteCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InviteCreateOrConnectWithoutUserInput>;
export const InviteCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
