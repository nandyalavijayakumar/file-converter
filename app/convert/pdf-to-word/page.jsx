"use client";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Script from "next/script";

export default function PdfToWord() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Push ads after component mounts
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  async function handleConvert() {
    if (!file) return alert("Select a PDF file first!");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/pdf-to-word", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Conversion failed");

      const docxBlob = await res.blob();
      saveAs(docxBlob, "converted.docx");
    } catch (err) {
      console.error(err);
      alert("Conversion failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow-sm rounded-xl p-8 border">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">PDF → Word</h1>

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

      {/* File Upload */}
      <div
        onClick={() => document.getElementById("fileInput").click()}
        className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-orange-50"
      >
        <p className="text-gray-600">
          {file ? <b>{file.name}</b> : "Click here to upload PDF"}
        </p>
      </div>

      <input
        id="fileInput"
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />

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
        disabled={loading}
        onClick={handleConvert}
        className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-medium transition disabled:opacity-50"
      >
        {loading ? "Converting..." : "Download Word (.docx)"}
      </button>
    </div>
  );
}
