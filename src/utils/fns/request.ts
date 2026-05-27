/**
 * Agnostic query encoder
 * Converts any object into an Expo SDK 55 / Hermes safe Base64 string
 */
export function encodeQueryParam(queryObject: Record<string, any>): string {
  try {
    const jsonString = JSON.stringify(queryObject);

    // 1. Check if standard browser btoa is available (Next.js/Web envs)
    if (typeof btoa !== 'undefined') {
      return btoa(encodeURIComponent(jsonString));
    }

    // 2. Cross-platform / Hermes fallback using standard Uint8Array
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(encodeURIComponent(jsonString));
    
    return bytesToBase64(uint8Array);
  } catch (error) {
    console.error("Failed to encode query parameters", error);
    return "";
  }
}

/**
 * Lightweight, pure JS helper to convert Uint8Array bytes to Base64.
 * Highly optimized for Hermes engine execution.
 */
function bytesToBase64(bytes: Uint8Array): string {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let result = "";
  let i = 0;
  const len = bytes.length;

  for (i = 0; i < len - 2; i += 3) {
    result += abc[bytes[i] >> 2];
    result += abc[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
    result += abc[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
    result += abc[bytes[i + 2] & 63];
  }

  if (i < len) {
    result += abc[bytes[i] >> 2];
    if (i === len - 1) {
      result += abc[(bytes[i] & 3) << 4];
      result += "==";
    } else {
      result += abc[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      result += abc[(bytes[i + 1] & 15) << 2];
      result += "=";
    }
  }

  return result;
}

// Agnostic decoding helper
export function decodeQueryParam(token: string | null): Record<string, any> {
  if (!token) return {};
  try {
    const jsonString = decodeURIComponent(Buffer.from(token, 'base64').toString('utf-8'));
    return JSON.parse(jsonString);
  } catch {
    return {};
  }
}