"use client";

import Link from "next/link";
import {
  FileText,
  ImageIcon,
  FileSpreadsheet,
  Presentation,
} from "lucide-react";

const categories = [
  {
    title: "PDF Tools",
    description: "Convert, create and edit PDF documents.",
    icon: FileText,
    href: "/convert/word-to-pdf",
    total: "5 Tools",
  },
  {
    title: "Image Tools",
    description: "Convert images between popular formats.",
    icon: ImageIcon,
    href: "/convert/image-to-pdf",
    total: "2 Tools",
  },
  {
    title: "Office Tools",
    description: "Convert Word, Excel and PowerPoint files.",
    icon: FileSpreadsheet,
    href: "/convert/pdf-to-word",
    total: "3 Tools",
  },
  {
    title: "Presentation Tools",
    description: "PowerPoint conversion tools coming soon.",
    icon: Presentation,
    href: "/",
    total: "Coming Soon",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-orange-600 font-semibold uppercase tracking-wider">
            Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Browse by Category
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose the category that matches the type of file you want to convert.
          </p>

        </div>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="rounded-2xl bg-white border p-8 hover:border-orange-500 hover:shadow-xl transition"
              >
                <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Icon
                    className="text-orange-600"
                    size={32}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {category.description}
                </p>

                <span className="inline-block mt-6 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                  {category.total}
                </span>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}