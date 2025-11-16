"use client";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";

export default function PdfToImages() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load AdSense after render
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
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
    <div className="p-6">

      {/* ⭐ Ad Slot 1: Top Placement */}
      <div className="mb-4">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="YOUR_CLIENT_ID"
          data-ad-slot="TOP_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <h1 className="text-2xl font-semibold text-orange-600 mb-4">
        PDF → Images Converter
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">

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

        {/* ⭐ Ad Slot 2: Bottom Placement */}
        <div className="mt-6">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="YOUR_CLIENT_ID"
            data-ad-slot="BOTTOM_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
}
