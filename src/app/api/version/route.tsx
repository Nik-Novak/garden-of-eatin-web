import { NextResponse } from 'next/server';
import constants from '../../../../package.json';

export async function GET(request: Request) {
  return new Response(constants.version)
}