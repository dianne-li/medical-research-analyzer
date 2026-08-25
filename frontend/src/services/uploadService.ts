export interface UploadResponse {
  filename: string;
  content_type: string;
  message: string;
  preview: string;
}

export async function uploadPDF(
  file: File
): Promise<UploadResponse> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    "http://127.0.0.1:8000/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload failed.");
  }

  return await response.json();
}