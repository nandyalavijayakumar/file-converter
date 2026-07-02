"use client";

import {
  FileText,
  ImageIcon,
  FileSpreadsheet,
  Presentation,
  FileCode,
  File,
} from "lucide-react";

const categories = [
  {
    title: "PDF Documents",
    icon: FileText,
    color: "bg-red-100 text-red-600",
    formats: ["PDF"],
  },
  {
    title: "Word Documents",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
    formats: ["DOC", "DOCX", "TXT"],
  },
  {
    title: "Images",
    icon: ImageIcon,
    color: "bg-green-100 text-green-600",
    formats: ["JPG", "JPEG", "PNG", "WEBP", "GIF", "BMP"],
  },
  {
    title: "Spreadsheets",
    icon: FileSpreadsheet,
    color: "bg-emerald-100 text-emerald-600",
    formats: ["XLS", "XLSX", "CSV"],
  },
  {
    title: "Presentations",
    icon: Presentation,
    color: "bg-orange-100 text-orange-600",
    formats: ["PPT", "PPTX"],
  },
  {
    title: "More Formats",
    icon: FileCode,
    color: "bg-purple-100 text-purple-600",
    formats: ["RTF", "HTML", "XML"],
  },
];

export default function SupportedFormats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            Supported Formats
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Convert Popular File Types
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            FileConverter supports the most commonly used document,
            image, spreadsheet and presentation formats, making it
            easy to convert files for work, school and personal use.
          </p>

        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div
                  className={`h-16 w-16 rounded-2xl flex items-center justify-center ${category.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">

                  {category.formats.map((format) => (
                    <span
                      key={format}
                      className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700"
                    >
                      {format}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Info */}

        <div className="mt-16 rounded-3xl bg-orange-50 border border-orange-100 p-10 text-center">

          <File
            size={40}
            className="mx-auto text-orange-600"
          />

          <h3 className="mt-5 text-2xl font-bold text-gray-900">
            More formats coming soon
          </h3>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are continuously expanding our converter library with
            support for more document, image and office file formats to
            make FileConverter your one-stop solution.
          </p>

        </div>

      </div>
    </section>
  );
}