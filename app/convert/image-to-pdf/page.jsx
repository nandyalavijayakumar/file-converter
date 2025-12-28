"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function ImageToPdf() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load ads after render (fixed version)
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  const handleConvert = async () => {
    if (!file) return alert("Please upload an image first!");
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/image-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Conversion failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "converted.pdf";
      a.click();
    } catch (err) {
      console.error(err);
      alert("Conversion failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">

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
          Image to PDF Converter – Free & Secure
        </h1>

        <p className="text-gray-600 mb-3">
          Convert JPG, PNG, WebP or any image into a high-quality PDF within
          seconds. No watermark, no sign-up — simply upload your image and
          download your PDF instantly. This tool is perfect for sharing ID
          proofs, certificates, notes, bills and scanned documents in a single,
          easy-to-open format.
        </p>

        <h2 className="text-lg font-semibold mb-2">How to use?</h2>
        <ul className="list-disc ml-5 text-gray-700 mb-4">
          <li>Click below and upload your image</li>
          <li>Wait a moment while we convert it</li>
          <li>Download your PDF file</li>
        </ul>

        <label className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center cursor-pointer hover:border-orange-400">
          <span className="text-gray-500">Upload Image</span>
          <input
            type="file"
            accept="image/*"
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
          {loading ? "Converting..." : "Convert to PDF"}
        </button>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>

          <p className="text-sm mb-2">
            <strong>Is my file safe?</strong> We do not store your files. They
            are processed securely and deleted automatically.
          </p>

          <p className="text-sm mb-2">
            <strong>What formats are supported?</strong> JPG, PNG, WebP, GIF
            and more.
          </p>

          <p className="text-sm mb-2">
            <strong>Is it free?</strong> Yes — you can convert unlimited files.
          </p>

          <p className="text-sm">
            Need more tools? Try our PDF to Word, Merge PDF, and Compress PDF
            tools.
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
  );
}
