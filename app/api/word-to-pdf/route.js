import mammoth from "mammoth";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response("No file provided", { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const ext = file.name.split(".").pop().toLowerCase();

    // -----------------------------------------
    // CASE 1 → DOCX (Works perfectly with Mammoth)
    // -----------------------------------------
    if (ext === "docx") {
      const { value: html } = await mammoth.convertToHtml({ buffer });
      const text = html.replace(/<[^>]+>/g, "");

      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const page = pdfDoc.addPage([595, 842]);

      let y = 800;
      text.split("\n").forEach((line) => {
        page.drawText(line, { x: 50, y, size: 14, font });
        y -= 20;
      });

      const pdfBytes = await pdfDoc.save();
      return new Response(pdfBytes, { status: 200, headers: { "Content-Type": "application/pdf" } });
    }

    // -----------------------------------------
    // CASE 2 → DOC (Old format) – Use LibreOffice
    // -----------------------------------------
    if (ext === "doc") {
      // Save DOC file temporarily
      const inputPath = path.join(process.cwd(), "temp-input.doc");
      const outputPath = path.join(process.cwd(), "temp-output.pdf");

      fs.writeFileSync(inputPath, buffer);

      // Convert using LibreOffice (needs to be installed)
      await execAsync(`soffice --headless --convert-to pdf --outdir ${process.cwd()} ${inputPath}`);

      const pdf = fs.readFileSync(outputPath);

      // Cleanup
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);

      return new Response(pdf, {
        status: 200,
        headers: { "Content-Type": "application/pdf" },
      });
    }

    return new Response("Unsupported file format", { status: 400 });

  } catch (err) {
    console.error("WORD→PDF ERROR:", err);
    return new Response("Conversion failed", { status: 500 });
  }
}
