import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const pdfBytes = Buffer.from(arrayBuffer);

    // Load PDF
    const pdfDoc = await PDFDocument.load(pdfBytes);

    let fullText = "";

    const pages = pdfDoc.getPages();
    for (const page of pages) {
      const text = page.getTextContent ? await page.getTextContent() : "";
      fullText += text?.items?.map(i => i.str).join(" ") + "\n\n";
    }

    return NextResponse.json({ text: fullText });
  } catch (err) {
    console.error("PDF error:", err);
    return NextResponse.json(
      { error: "Failed to read PDF" },
      { status: 500 }
    );
  }
}
