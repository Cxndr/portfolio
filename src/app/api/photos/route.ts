import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const cleanFileName = (fileName: string): string => {
  // Remove file extension
  const nameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
  
  // Replace special characters and spaces with hyphens
  return nameWithoutExt
    .replace(/[#~\/\\?%*:|"<>]/g, '-') // Replace special characters with hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

export async function GET() {
  const mktDir = path.join(process.cwd(), 'public', 'img', 'mkt');
  const files = fs.readdirSync(mktDir);

  const photos = files
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map(file => ({
      src: `/img/mkt/${encodeURIComponent(file)}`,
      description: cleanFileName(file)
    }));

  return NextResponse.json(photos);
} 