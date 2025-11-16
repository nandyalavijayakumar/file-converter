"use client"

import { useState, useEffect } from "react"
import mammoth from "mammoth"
import { PDFDocument, StandardFonts } from "pdf-lib"
import { saveAs } from "file-saver"

export default function WordToPdf() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  // Load AdSense on-viewport
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [])

  async function handleConvert() {
    if (!file) return alert("Select a .docx file first!")
    setLoading(true)

    try {
      const arrayBuffer = await file.arrayBuffer()
      const { value: text } = await mammoth.extractRawText({ arrayBuffer })

      const pdfDoc = await PDFDocument.create()
      const page = pdfDoc.addPage()
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const size = 12

      page.drawText(text, { x: 30, y: page.getHeight() - 40, size, font })

      const pdfBytes = await pdfDoc.save()
      saveAs(new Blob([pdfBytes]), "converted.pdf")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white shadow-sm rounded-xl p-8 border">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Word → PDF</h1>

      {/* ⭐ Ad Placement 1 (Below Title) */}
      <div className="my-4 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXX"
          data-ad-slot="11111111"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <div
        className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-orange-50 transition"
        onClick={() => document.getElementById("fileInput").click()}
      >
        <p className="text-gray-600">
          {file ? <b>{file.name}</b> : "Click here to upload .docx file"}
        </p>
      </div>

      <input
        type="file"
        id="fileInput"
        accept=".doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="hidden"
      />

      {/* ⭐ Ad Placement 2 (Below Upload Box) */}
      <div className="my-4 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXX"
          data-ad-slot="22222222"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <button
        onClick={handleConvert}
        disabled={loading}
        className="mt-2 w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-medium transition disabled:opacity-50"
      >
        {loading ? "Converting..." : "Download PDF"}
      </button>
    </div>
  )
}
