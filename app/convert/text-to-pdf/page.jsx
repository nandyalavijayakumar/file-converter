"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

export default function TextToPdf() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

  // Load AdSense script correctly
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

      {/* ⭐ AdSense Ad Placement 1 (Below Title) */}
      <div className="my-4 flex justify-center">
         {/* Load AdSense script */}
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008367184647190"
        crossOrigin="anonymous"
      />

      {/* ⭐ Ad 1: Top placement */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2008367184647190"
        data-ad-slot="7424109739"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      <Script id="adsense-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
      </div>

      <textarea
        className="w-full min-h-[250px] border rounded-md p-4 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* ⭐ AdSense Ad Placement 2 (Below TextArea) */}
      <div className="my-4 flex justify-center">

      {/* ⭐ Bottom Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
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
    </div>
  )
}
