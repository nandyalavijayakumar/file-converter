import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "Image file missing" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    const img = await pdfDoc.embedJpg(bytes).catch(async () => {
      return await pdfDoc.embedPng(bytes);
    });

    const { width, height } = img.scale(1);
    page.setSize(width, height);
    page.drawImage(img, { x: 0, y: 0, width, height });

    const pdfBytes = await pdfDoc.save();

    return new Response(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=image.pdf",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "Conversion failed" }, { status: 500 });
  }
}
