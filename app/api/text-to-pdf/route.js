import { PDFDocument, StandardFonts } from "pdf-lib";

export async function POST(req) {
  try {
    const { text } = await req.json();

    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const page = pdfDoc.addPage([595, 842]); // A4
    const fontSize = 14;

    page.drawText(text || "", {
      x: 50,
      y: 800,
      size: fontSize,
      font,
      lineHeight: 18,
      maxWidth: 495,
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Error creating PDF", { status: 500 });
  }
}
