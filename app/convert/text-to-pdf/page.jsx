// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/convert/text-to-pdf");
// }

"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

export default function TextToPdf() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  // Push ads after component mounts
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [])

  const handleConvert = async () => {
    if (!text.trim()) return alert("Enter some text first!")
    setLoading(true)

    try {
      const response = await fetch("/api/text-to-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href = url
      a.download = "converted.pdf"
      a.click()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white shadow-sm rounded-xl p-8 border">
   

      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Text → PDF</h1>
   <p className="text-gray-600 mb-4">
  Convert your text into a clean, downloadable PDF file instantly. 
  This free Text to PDF converter is perfect for notes, essays, invoices, stories,
  or any content you want to save and share professionally.
</p>
      {/* ⭐ Load AdSense script only once per page */}
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

      <textarea
        className="w-full min-h-[250px] border rounded-md p-4 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-6">
  <h2 className="text-lg font-semibold mb-2">How to convert text to PDF</h2>
  <ol className="list-decimal ml-6 text-gray-600 space-y-1">
    <li>Type or paste your text into the box above.</li>
    <li>Click the “Download PDF” button.</li>
    <li>Your PDF will be generated instantly.</li>
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
        className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-medium transition disabled:opacity-50"
      >
        {loading ? "Converting..." : "Download PDF"}
      </button>
      <div className="mt-8">
  <h2 className="text-lg font-semibold mb-2">Why use our Text to PDF converter?</h2>
  <ul className="list-disc ml-6 text-gray-600 space-y-1">
    <li>Fast and free — no sign-up required</li>
    <li>Works on mobile, tablet and desktop</li>
    <li>No watermark added</li>
    <li>Your files are not stored on our servers</li>
  </ul>
</div>

<div className="mt-8">
  <h2 className="text-lg font-semibold mb-2">FAQ</h2>

  <p className="font-medium">Is this Text to PDF tool free?</p>
  <p className="text-gray-600 mb-3">Yes — completely free with no limits.</p>

  <p className="font-medium">Will my text be saved?</p>
  <p className="text-gray-600 mb-3">
    No, everything happens securely in real-time.
  </p>

  <p className="font-medium">Can I convert long text?</p>
  <p className="text-gray-600">
    Yes — just paste your content and download it as PDF instantly.
  </p>
</div>

    </div>
  )
}

