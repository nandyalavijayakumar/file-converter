"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import Link from "next/link"

export default function TextToPdf() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

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

      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Text to PDF — Free Online Converter
      </h1>

      <p className="text-gray-600 mb-4">
        Create professional PDF documents from plain text in seconds.
        No sign-up, no watermark, and completely secure. Perfect for notes,
        resumes, assignments, reports, letters and more.
      </p>

      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008367184647190"
        crossOrigin="anonymous"
      />

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

      <button
        onClick={handleConvert}
        disabled={loading}
        className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-medium transition disabled:opacity-50"
      >
        {loading ? "Converting..." : "Download PDF"}
      </button>

      {/* ---------------- HIGH VALUE CONTENT ---------------- */}

      <section className="mt-10 space-y-6">

        <div>
          <h2 className="text-lg font-semibold mb-2">How to convert text to PDF</h2>
          <ol className="list-decimal ml-6 text-gray-600 space-y-1">
            <li>Paste or type your text into the box above.</li>
            <li>Click the “Download PDF” button.</li>
            <li>Your PDF will be created instantly.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">What makes PDF better than plain text?</h2>
          <p className="text-gray-600 mb-2">
            Plain text files (.txt) lose formatting, spacing, fonts, and layout.
            PDFs keep your document exactly how you created it — on any device.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Looks professional</li>
            <li>Easy to print</li>
            <li>Compatible with all devices</li>
            <li>Secure and shareable</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Who can use this Text to PDF tool?</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Students creating assignments or notes</li>
            <li>Teachers preparing worksheets</li>
            <li>Job seekers making resumes</li>
            <li>Freelancers sending invoices</li>
            <li>Writers drafting ebooks or stories</li>
            <li>Businesses preparing documents</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Features of our Text to PDF converter</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>100% free — forever</li>
            <li>No registration or sign-in</li>
            <li>No watermarks</li>
            <li>Works in your browser</li>
            <li>Fast, simple and secure</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">How does this tool keep your data safe?</h2>
          <p className="text-gray-600">
            Your content never leaves your device. Conversion happens locally
            in your browser — we do not store or access files at any point.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Text to PDF vs Word to PDF</h2>
          <p className="text-gray-600 mb-2">
            If your document already has heavy formatting, images, or tables,
            converting from Word may be better. For notes and plain text,
            Text to PDF is faster and more reliable.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Troubleshooting</h2>

          <p className="font-medium">The PDF prints too small</p>
          <p className="text-gray-600 mb-2">Increase zoom or font size before converting.</p>

          <p className="font-medium">Extra blank pages appear</p>
          <p className="text-gray-600 mb-2">Remove unnecessary empty lines.</p>

          <p className="font-medium">Text wrapped incorrectly</p>
          <p className="text-gray-600">Use shorter lines or break sections into paragraphs.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Common questions (FAQ)</h2>

          <p className="font-medium">Is there any usage limit?</p>
          <p className="text-gray-600 mb-2">No — convert as many files as you want.</p>

          <p className="font-medium">Can I use it on mobile?</p>
          <p className="text-gray-600 mb-2">Yes — it works on all smartphones.</p>

          <p className="font-medium">Do I need to install software?</p>
          <p className="text-gray-600">No — everything runs inside your browser.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Example: Creating a study PDF</h2>
          <p className="text-gray-600">
            Students often paste class notes, convert to PDF, and print them.
            This keeps notes organized and readable, compared to plain text
            saved randomly in files.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Why we built this tool</h2>
          <p className="text-gray-600">
            Many converters require sign-ups or upload files to servers.
            Our goal is to provide a fast, private, and free solution for everyone.
          </p>
        </div>

      </section>
      
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-3">
          More free tools on FileConverter
        </h2>

        <p className="text-gray-600 mb-4">
          Explore our other popular file converters. All are fast, secure and free.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          <Link
            href="/convert/word-to-pdf"
            className="border rounded-xl p-4 hover:shadow-md transition"
          >
            <h3 className="font-semibold">Word to PDF</h3>
            <p className="text-gray-600 text-sm">
              Convert DOC/DOCX files into PDF format.
            </p>
          </Link>

          <Link
            href="/convert/pdf-to-word"
            className="border rounded-xl p-4 hover:shadow-md transition"
          >
            <h3 className="font-semibold">PDF to Word</h3>
            <p className="text-gray-600 text-sm">
              Turn PDF files into editable Word documents.
            </p>
          </Link>

          <Link
            href="/convert/image-to-pdf"
            className="border rounded-xl p-4 hover:shadow-md transition"
          >
            <h3 className="font-semibold">Image to PDF</h3>
            <p className="text-gray-600 text-sm">
              Convert JPG/PNG images into a single PDF.
            </p>
          </Link>

         <Link
      href="/convert/pdf-to-images"
      className="border rounded-xl p-4 hover:shadow-md transition"
    >
      <h3 className="font-semibold">PDF to Image</h3>
      <p className="text-gray-600 text-sm">
        Convert PDF pages into JPG/PNG images.
      </p>
    </Link>

    <Link
      href="/convert/text-to-pdf"
      className="border rounded-xl p-4 hover:shadow-md transition"
    >
      <h3 className="font-semibold">Text to PDF</h3>
      <p className="text-gray-600 text-sm">
        Create clean PDF documents from plain text.
      </p>
    </Link>

        </div>
      </section>

      {/* Bottom Ad */}
      <div className="my-8 flex justify-center w-full">
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

    </div>
  )
}