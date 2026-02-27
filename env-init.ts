import { config } from '@dotenvx/dotenvx';

console.warn('initializing env...');
// Get the environment from NODE_ENV, with a fallback to VERCEL_ENV
const env = process.env.NODE_ENV || process.env.VERCEL_ENV;

if (env) {
  // Sources the specific .env.ENVIRONMENT file strictly (e.g., .env.production, .env.preview)
  config({ 
    path: `.env.${env}` ,
    // // Suppress the noisy warning about the missing base .env file
    // ignore: ['MISSING_ENV_FILE']
  });
} else {
  throw Error('Neither NODE_ENV nor VERCEL_ENV is defined. No environment variables were loaded.');
}
console.warn('done initialization.');

export async function initializeEnv(){
  console.warn('initializing env...');
  // Get the environment from NODE_ENV, with a fallback to VERCEL_ENV
  const env = process.env.NODE_ENV || process.env.VERCEL_ENV;
  
  if (env) {
    // Sources the specific .env.ENVIRONMENT file strictly (e.g., .env.production, .env.preview)
    config({ 
      path: `.env.${env}` ,
      // // Suppress the noisy warning about the missing base .env file
      // ignore: ['MISSING_ENV_FILE']
    });
  } else {
    throw Error('Neither NODE_ENV nor VERCEL_ENV is defined. No environment variables were loaded.');
  }
  console.warn('done initialization.');
}