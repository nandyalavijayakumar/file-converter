"use client";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Script from "next/script";

export default function PdfToImages() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load AdSense after render (fixed)
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  async function handleConvert() {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/pdf-to-images", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Conversion failed");

      const zipBlob = await res.blob();
      saveAs(zipBlob, "converted-images.zip");
    } catch (err) {
      console.error(err);
      alert("Conversion failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-3xl">

        {/* ⭐ Ad — Top */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008367184647190"
          crossOrigin="anonymous"
        />

        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2008367184647190"
          data-ad-slot="7424109739"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <Script id="adsense-init-top" strategy="afterInteractive">
          {`(window.adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>

        <h1 className="text-2xl font-semibold text-orange-600 mt-4 mb-3">
          PDF to Images Converter – Extract Every Page as a Picture
        </h1>

        <p className="text-gray-600 mb-4">
          Convert any PDF into high-quality images (JPG/PNG). Each page of your
          PDF becomes a separate image inside a downloadable ZIP file.
          Perfect for sharing slides, study notes, invoices, e-books, or social
          posts when people cannot open PDFs.
        </p>

        <h2 className="text-lg font-semibold mb-2">How it works</h2>
        <ul className="list-disc ml-5 text-gray-700 mb-4">
          <li>Upload your PDF</li>
          <li>We convert each page into a clear image</li>
          <li>Download everything as one ZIP file</li>
        </ul>

        <div className="bg-white shadow-md rounded-lg p-6">

          <label className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center cursor-pointer hover:border-orange-400">
            <span className="text-gray-500">Upload PDF</span>
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          {file && (
            <p className="mt-3 text-gray-600 text-sm">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          )}

          <button
            onClick={handleConvert}
            disabled={!file || loading}
            className={`mt-5 w-full py-2 rounded-md text-white ${
              file ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-400"
            }`}
          >
            {loading ? "Converting..." : "Convert to Images"}
          </button>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>

            <p className="text-sm mb-2">
              <strong>Do you store my PDF?</strong> No — files are processed
              temporarily and removed automatically.
            </p>

            <p className="text-sm mb-2">
              <strong>What image formats do you create?</strong> JPG by default
              (great quality and smaller size).
            </p>

            <p className="text-sm mb-2">
              <strong>Is there a page limit?</strong> Most normal PDFs convert
              fine. Very large PDFs may take longer.
            </p>

            <p className="text-sm">
              Try more tools: Image to PDF, Merge PDF, Compress PDF.
            </p>
          </div>

          {/* ⭐ Ad — Bottom */}
          <ins
            className="adsbygoogle mt-4"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2008367184647190"
            data-ad-slot="3501176590"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          <Script id="adsense-init-bottom" strategy="afterInteractive">
            {`(window.adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>
      </div>
    </div>
  );
}
