import { Prisma } from "@prisma/client";

export type AugmentedDeviceAgreement = Prisma.DeviceAgreementGetPayload<{include:{agreement:true}}>;