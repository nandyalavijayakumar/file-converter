"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  FileText,
  ImageIcon,
  FileSpreadsheet,
  Presentation,
} from "lucide-react";

const tools = [
  {
    title: "Word to PDF",
    href: "/convert/word-to-pdf",
    icon: FileText,
  },
  {
    title: "PDF to Word",
    href: "/convert/pdf-to-word",
    icon: FileText,
  },
  {
    title: "Image to PDF",
    href: "/convert/image-to-pdf",
    icon: ImageIcon,
  },
  {
    title: "PDF to Images",
    href: "/convert/pdf-to-images",
    icon: ImageIcon,
  },
  {
    title: "Text to PDF",
    href: "/convert/text-to-pdf",
    icon: FileText,
  },
];

export default function SearchConverter() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return tools;

    return tools.filter((tool) =>
      tool.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Find a Converter
          </h2>

          <p className="mt-3 text-gray-600">
            Search our growing collection of free online conversion tools.
          </p>

        </div>

        <div className="relative mt-8">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search converters..."
            className="w-full rounded-xl border border-gray-300 py-4 pl-14 pr-4 outline-none focus:border-orange-500"
          />

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {filtered.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="flex items-center justify-between rounded-xl border p-5 hover:border-orange-500 hover:bg-orange-50 transition"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-orange-100 p-3">
                    <Icon className="text-orange-600" />
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Free Online Converter
                    </p>

                  </div>

                </div>

                <ArrowRight className="text-orange-600" />

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}