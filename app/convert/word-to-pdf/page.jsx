"use client"

import { useState, useEffect } from "react"
import mammoth from "mammoth"
import { PDFDocument, StandardFonts } from "pdf-lib"
import { saveAs } from "file-saver"
import Script from "next/script"

export default function WordToPdf() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  // Push ads after component mounts
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
     <p className="text-gray-600 mb-4">
  Convert Word documents (.doc and .docx) into PDF files instantly. 
  This free Word to PDF converter keeps your formatting clean and makes 
  it easy to share documents safely on any device.
</p>

      {/* ⭐ Load AdSense script only once */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008367184647190"
        crossOrigin="anonymous"
      />

      {/* ⭐ Top Ad */}
      <div className="my-4 flex justify-center w-full">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client="ca-pub-2008367184647190"
          data-ad-slot="7424109739"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script id="adsense-init-top" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
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
<div className="mt-6">
  <h2 className="text-lg font-semibold mb-2">How to convert Word to PDF</h2>
  <ol className="list-decimal ml-6 text-gray-600 space-y-1">
    <li>Upload your Word (.docx) file above.</li>
    <li>Click the “Download PDF” button.</li>
    <li>Your PDF will be generated automatically.</li>
  </ol>
</div>

      {/* ⭐ Bottom Ad */}
      <div className="my-4 flex justify-center w-full">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client="ca-pub-2008367184647190"
          data-ad-slot="3501176590"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script id="adsense-init-bottom" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      <button
        onClick={handleConvert}
        disabled={loading}
        className="mt-2 w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-medium transition disabled:opacity-50"
      >
        {loading ? "Converting..." : "Download PDF"}
      </button>
      <div className="mt-8">
  <h2 className="text-lg font-semibold mb-2">Why use our Word to PDF converter?</h2>
  <ul className="list-disc ml-6 text-gray-600 space-y-1">
    <li>Free and fast — no account required</li>
    <li>Works on mobile, tablet, and desktop</li>
    <li>No watermark on your files</li>
    <li>Your documents are not stored on our servers</li>
  </ul>
</div>

<div className="mt-8">
  <h2 className="text-lg font-semibold mb-2">FAQ</h2>

  <p className="font-medium">Does this tool support .doc and .docx?</p>
  <p className="text-gray-600 mb-3">Yes — you can upload both formats.</p>

  <p className="font-medium">Is this tool free?</p>
  <p className="text-gray-600 mb-3">Yes, it’s completely free to use.</p>

  <p className="font-medium">Will my file be saved?</p>
  <p className="text-gray-600">
    No — conversion happens instantly and nothing is stored.
  </p>
</div>

    </div>
  )
}
