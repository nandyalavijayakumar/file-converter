"use client";
import { useState, useEffect } from "react";

export default function ImageToPdf() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load adsbygoogle after render
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  const handleConvert = async () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }

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

        {/* ⭐ Ad 1: Top placement */}
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
          Image → PDF Converter
        </h1>

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

        {/* ⭐ Ad 2: Bottom placement */}
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
