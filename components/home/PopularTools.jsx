"use client";

import Link from "next/link";
import {
  FileText,
  ImageIcon,
  FileImage,
  FileType,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    title: "Word to PDF",
    description: "Convert DOC & DOCX documents into high-quality PDF files.",
    href: "/convert/word-to-pdf",
    icon: FileText,
    badge: "Popular",
  },
  {
    title: "PDF to Word",
    description: "Turn PDF files into editable Word documents instantly.",
    href: "/convert/pdf-to-word",
    icon: FileType,
    badge: "Popular",
  },
  {
    title: "Image to PDF",
    description: "Merge JPG, PNG and other images into a single PDF.",
    href: "/convert/image-to-pdf",
    icon: ImageIcon,
    badge: "Free",
  },
  {
    title: "PDF to Image",
    description: "Extract PDF pages as JPG or PNG images.",
    href: "/convert/pdf-to-images",
    icon: FileImage,
    badge: "Fast",
  },
  {
    title: "Text to PDF",
    description: "Convert plain text into clean, printable PDF documents.",
    href: "/convert/text-to-pdf",
    icon: FileText,
    badge: "New",
  },
];

export default function PopularTools() {
  return (
    <section
      id="popular-tools"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-orange-600 font-semibold uppercase tracking-wider">
            Popular Tools
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Choose a Converter
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Convert documents and images online using our fast,
            secure and free conversion tools. No registration,
            software installation or technical knowledge required.
          </p>

        </div>

        <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
              >

                <span className="absolute right-5 top-5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                  {tool.badge}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={34} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-orange-600">
                  {tool.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {tool.description}
                </p>

                <div className="mt-8 flex items-center font-semibold text-orange-600">
                  Open Tool
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}