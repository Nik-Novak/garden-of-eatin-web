import { database } from '@/prisma/database';
import { AgreementType } from '@prisma/client';
import { MDXRemote } from 'next-mdx-remote/rsc'

export type LoadAgreementProps = {
  type: AgreementType
}
export default async function LoadAgreement({type}:LoadAgreementProps){
  let agreement = await database.agreement.findFirstOrThrow({
    where:{agreement_type:type},
    orderBy: { 
      effective_date: 'desc' 
    }
  });
  return (
    <MDXRemote
      source={agreement.content_md}
    />
  );
}