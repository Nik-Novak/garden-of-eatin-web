import { z } from 'zod';

export function coercedZodSchema(schema: z.ZodTypeAny): z.ZodTypeAny {
  // Zod v4 moves internals to `_zod.def`, but we fallback to `_def` just in case.
  const def = (schema as any)._zod?.def ?? (schema as any)._def;
  
  // Zod v4 uses `def.type` (e.g. "string"), while v3 used `def.typeName` (e.g. "ZodString")
  const typeName = def?.type ?? def?.typeName;

  // 1. Unwrap Optional
  if (typeName === 'ZodOptional' || typeName === 'optional') {
    const inner = (schema as any).unwrap ? (schema as any).unwrap() : def.innerType;
    return coercedZodSchema(inner).optional();
  }

  // 2. Unwrap Nullable
  if (typeName === 'ZodNullable' || typeName === 'nullable') {
    const inner = (schema as any).unwrap ? (schema as any).unwrap() : def.innerType;
    return coercedZodSchema(inner).nullable();
  }

  // 3. Handle Objects (Recursively coerce shapes)
  if (typeName === 'ZodObject' || typeName === 'object') {
    const shape = (schema as any).shape || def.shape;
    const coercedShape = Object.fromEntries(
      Object.entries(shape).map(([key, fieldSchema]) => [
        key,
        coercedZodSchema(fieldSchema as z.ZodTypeAny),
      ])
    );
    
    let newObj = z.object(coercedShape);
    
    // Preserve strict mode if the original object had it
    if (def.unknownKeys === "strict") {
      newObj = newObj.strict();
    }
    
    return newObj;
  }

  // 4. Swap Base Types for Coerced Types
  if (typeName === 'ZodString' || typeName === 'string') {
    return z.coerce.string();
  }
  
  if (typeName === 'ZodBoolean' || typeName === 'boolean') {
    // Note: Zod v4 also introduced `z.stringbool()` for "true"/"false"/"1"/"0", 
    // but standard coerce.boolean() acts identically to v3.
    return z.coerce.boolean();
  }
  
  if (typeName === 'ZodNumber' || typeName === 'number') {
    let numSchema = z.coerce.number();
    // Re-apply .int() check if the original schema had it
    const checks = def.checks || [];
    if (checks.some((c: any) => c.kind === 'int' || c.check === 'int')) {
      numSchema = numSchema.int();
    }
    return numSchema;
  }

  // 5. Intercept Enums / Native Enums
  if (
    typeName === 'ZodNativeEnum' || 
    typeName === 'nativeEnum' || 
    typeName === 'ZodEnum' || 
    typeName === 'enum'
  ) {
    return z.preprocess((val) => String(val), schema);
  }

  // Fallback for anything else
  return schema;
}