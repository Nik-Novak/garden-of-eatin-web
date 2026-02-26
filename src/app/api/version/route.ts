import { NextResponse } from 'next/server';
import constants from '../../../../CONSTANTS.json';

export async function GET(request: Request) {
  return new Response(constants.version)
}