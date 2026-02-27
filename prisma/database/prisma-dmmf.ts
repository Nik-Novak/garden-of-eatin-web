// prisma-dmmf.ts
import { Prisma } from '@prisma/client';

/**
 * Minimal DMMF field shape used by polish()
 * Prisma intentionally does NOT export this type in v5.
 */
export type DmmfField = {
  name: string;
  dbName?: string | null;
  kind: 'scalar' | 'object' | 'enum';
  type: string;
  isList?: boolean;
  isRequired?: boolean;
};

export type DmmfModelOrType = {
  name: string;
  fields: DmmfField[];
};

export const prismaDmmf = (Prisma as unknown as {
  dmmf: {
    datamodel: {
      models: DmmfModelOrType[];
      types: DmmfModelOrType[];
    };
  };
}).dmmf;
