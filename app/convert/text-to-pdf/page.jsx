"use client"

import { useState } from "react"

export default function TextToPdf() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)

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

      <textarea
        className="w-full min-h-[250px] border rounded-md p-4 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleConvert}
        disabled={loading}
        className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-lg font-medium transition disabled:opacity-50"
      >
        {loading ? "Converting..." : "Download PDF"}
      </button>
    </div>
  )
}
