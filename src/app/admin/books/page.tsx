"use client";

import { useState } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

export default function AdminBooksUpload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedPdf, setUploadedPdf] = useState<string | null>(null);

  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;

  const authenticator = async () => {
    try {
      const response = await fetch("/api/imagekit/auth");
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  return (
    <main className="min-h-[80vh] pt-32 pb-16 bg-bg flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-border max-w-2xl w-full mx-4">
        <h1 className="text-3xl font-black text-primary mb-6">Upload Books to ImageKit</h1>
        
        <IKContext 
          urlEndpoint={urlEndpoint} 
          publicKey={publicKey} 
          authenticator={authenticator}
        >
          <div className="space-y-8">
            {/* Image Upload */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-[#10192F]">1. Upload Book Cover <span className="text-gray-400 font-normal text-sm block mt-1">(Optional - falls back to default icon)</span></h2>
              <IKUpload
                folder="/books/covers"
                onSuccess={(res: any) => setUploadedImage(res.url)}
                onError={(err: any) => console.error(err)}
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#192F6B] file:text-white hover:file:bg-blue-700 cursor-pointer"
              />
              {uploadedImage && (
                <div className="mt-4 break-all text-xs font-mono bg-blue-50 text-blue-800 p-3 rounded-lg border border-blue-100">
                  <strong>Cover URL:</strong> {uploadedImage}
                </div>
              )}
            </div>

            {/* PDF Upload */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h2 className="text-xl font-bold mb-4 text-[#10192F]">2. Upload Book File (PDF)</h2>
              <IKUpload
                folder="/books/pdfs"
                onSuccess={(res: any) => setUploadedPdf(res.url)}
                onError={(err: any) => console.error(err)}
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-green-600 file:text-white hover:file:bg-green-700 cursor-pointer"
              />
              {uploadedPdf && (
                <div className="mt-4 break-all text-xs font-mono bg-green-50 text-green-800 p-3 rounded-lg border border-green-100">
                  <strong>PDF URL:</strong> {uploadedPdf}
                </div>
              )}
            </div>

          </div>
        </IKContext>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-gray-500">
            Once uploaded, copy these URLs and update the <code>fileUrl</code> or <code>imageUrl</code> properties in <code>src/app/books/page.tsx</code>. 
          </p>
        </div>
      </div>
    </main>
  );
}
