import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";
import AccessDenied from "../ui/AccessDenied";
import { APIError } from "better-auth";
import { redirect } from "next/navigation";

type UserHasPermissionInput = NonNullable<Parameters<typeof auth.api.userHasPermission>[0]>;
export type Permissions = UserHasPermissionInput['body']['permissions'];

type AuthRouteGuardProps = PropsWithChildren & {
  permissions: Permissions;
  subject?:string
}

export default async function AuthRouteGuard({permissions, subject, children}:AuthRouteGuardProps){
  try{
    
    console.log('start check');
    //@ts-ignore
    const {success:shouldDisplay} = await auth.api.userHasPermission({headers: await headers(), body:{
      permissions
    }});
    console.log('finish check')
    if(!shouldDisplay)
      return <AccessDenied subject={subject} />
    return children;

  } catch(err){
    if(err instanceof APIError){
      if(err.statusCode === 401){
        redirect('/sign-in');
      }
    }
    else throw err;
  }
}