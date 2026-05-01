
import { DeviceMetadata } from '@prisma/client';
import { version, build } from '../../../package.json';

export const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export async function getDeviceMetadata() {
  if (typeof window === 'undefined') return null;

  const nav = window.navigator as any;
  const uaData = nav.userAgentData;

  // 1. Basic Information (Synchronous)
  const metadata: DeviceMetadata = {
    app_version: version,
    app_build: build.toString(),
    language: nav.language,
    cpu_cores: nav.hardwareConcurrency || null,
    total_memory: nav.deviceMemory || null,
    is_device: !nav.webdriver,
    touch_points: nav.maxTouchPoints || 0,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    pixel_ratio: window.devicePixelRatio || 1,
    connection_type: nav.connection?.effectiveType || 'unknown',

    //values to be set downstream
    brand: null,
    device_type: null,
    gpu_renderer: null,
    manufacturer: null,
    model_name: null,
    os_name: null,
    os_version: null
  };

  // 2. GPU Extraction (Crucial for UI/Performance Debugging)
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
      metadata.gpu_renderer = debugInfo 
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) 
        : 'Software';
    }
  } catch (e) {
    metadata.gpu_renderer = 'Unknown/Blocked';
  }

  // 3. High-Entropy Client Hints (Asynchronous)
  if (uaData) {
    try {
      const hints = await uaData.getHighEntropyValues([
        "model",
        "platformVersion",
        "formFactors"
      ]);

      metadata.brand = uaData.brands?.[0]?.brand;
      metadata.os_name = uaData.platform;
      metadata.os_version = hints.platformVersion;
      metadata.model_name = hints.model;

      // Map Manufacturer based on OS/Model
      if (metadata.os_name === "macOS" || metadata.os_name === "iOS") {
        metadata.manufacturer = "Apple";
      } else if (metadata.model_name?.includes("SM-")) {
        metadata.manufacturer = "Samsung";
      }

      // Map Device Type
      if (hints.formFactors?.includes("Tablet")) metadata.device_type = "TABLET";
      else if (hints.formFactors?.includes("Mobile")) metadata.device_type = "PHONE";
      else if (hints.formFactors?.includes("TV")) metadata.device_type = "TV";
      else metadata.device_type = "DESKTOP";

    } catch (err) {
      console.error("Hints blocked by permissions policy", err);
    }
  }

  // 4. Legacy/Safari Fallback for Device Type
  if (!metadata.device_type) {
    const ua = nav.userAgent.toLowerCase();
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) metadata.device_type = "TABLET";
    else if (/mobile|iphone|ipod|android/i.test(ua)) metadata.device_type = "PHONE";
    else metadata.device_type = "DESKTOP";
  }

  return metadata;
}