"use client"
import { useState } from "react"
import Sidebar from "./Sidebar"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden fixed top-3 left-3 z-50 p-2 bg-orange-600 text-white rounded-md shadow"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Slide-Out Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white border-r shadow-lg overflow-y-auto z-40 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />

        {/* Close button inside */}
        <button
          className="absolute top-3 right-3 text-gray-700"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>
    </>
  )
}
