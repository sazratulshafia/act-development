/**
 * Cloudflare R2 (S3-Compatible) Storage Configuration
 * For storing high-resolution architectural dossiers, CAD floorplans, and construction site inspection photos.
 */

export const R2_CONFIG = {
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
  accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  endpoint: process.env.R2_ENDPOINT || '',
  bucketName: 'act-development-assets',
};

/**
 * Generates an asset URL from Cloudflare R2
 */
export function getR2AssetUrl(key: string): string {
  // If public bucket domain is configured or using direct S3 endpoint
  return `${R2_CONFIG.endpoint}/${R2_CONFIG.bucketName}/${key.replace(/^\//, '')}`;
}
