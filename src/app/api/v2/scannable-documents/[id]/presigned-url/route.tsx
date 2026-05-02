import { database } from "@/prisma/database";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

type RouteContext = { params: Promise<{ id: string }> };

const QuerySchema = z.object({
  content_type: z.string({
    error: (issue) => 
      issue.input === undefined 
        ? "content_type is required." 
        : "content_type must be a valid string.",
  }),
});

const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_JURISDICTION_SPECIFIC_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }
    console.log(`${request.method} scannable-documents @ id=${id}/presigned-url`);
    const body = await request.json();
    const validation = QuerySchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { 
          error: "Invalid or missing parameters", 
          details: z.treeifyError(validation.error) 
        },
        { status: 400 }
      );
    }

    const { content_type } = validation.data;

    // 1. Verify the document exists in your DB first (Security check)
    const doc = await database.scannableDocument.findUnique({
      where: { id },
    });

    if (!doc) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    // 2. Define the file path (key) in the bucket
    const bucketName = "garden-of-eatin"; 
    const fileKey = `scannable-documents/${id}.pdf`;

    // 3. Create the command for a PUT request
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: content_type,
    });

    // 4. Generate the presigned URL (valid for 1 hour)
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

    // 5. Construct the final public URL using your custom domain
    const publicUrl = `${process.env.R2_PUBLIC_DOMAIN}/${fileKey}`;

    return NextResponse.json({
      uploadUrl,
      publicUrl,
    });
    
  } catch (error) {
    console.error("R2 Presign Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}