"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold">
        FC
      </div>
      <div className="text-lg font-semibold">FileConverter</div>
    </div>
  )
}

export default function Sidebar() {
  const pathname = usePathname()

  const items = [
    { key: "text-to-pdf", label: "Text → PDF", href: "/convert/text-to-pdf", icon: "✏️" },
    { key: "word-to-pdf", label: "Word → PDF", href: "/convert/word-to-pdf", icon: "📄" },
    { key: "pdf-to-word", label: "PDF → Word", href: "/convert/pdf-to-word", icon: "📤" },
    { key: "image-to-pdf", label: "Image → PDF", href: "/convert/image-to-pdf", icon: "🖼️" },
    { key: "pdf-to-images", label: "PDF → Images", href: "/convert/pdf-to-images", icon: "🖼️" },
  ]

  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Logo />
      </div>

      <nav className="px-4 mt-6">
        {items.map((it) => {
          const isActive = pathname.startsWith(it.href)

          return (
            <Link
              key={it.key}
              href={it.href}
              className={`flex items-center gap-3 p-3 rounded-md mb-1 transition-colors ${
                isActive
                  ? "bg-orange-50 text-orange-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-xl">{it.icon}</span>
              <span>{it.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto p-4">
        <div className="text-xs text-gray-500">Pro tip</div>
        <div className="text-sm text-gray-700 mt-2">
          Use the quick links to switch tools fast.
        </div>
      </div>
    </aside>
  )
}
