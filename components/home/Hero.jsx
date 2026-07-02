"use client";

import Link from "next/link";
import {
  FileText,
  Image,
  FileSpreadsheet,
  Presentation,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-700 px-4 py-1 text-sm font-medium">
            🚀 Fast • Secure • Free Forever
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Free Online
            <span className="text-orange-600"> File Converter</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8">
            Convert PDF, Word, Excel, PowerPoint, Images and Text files online.
            Fast, secure, free, and works on Windows, Mac, Android and iPhone
            without installing software.
          </p>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="#popular-tools"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-7 py-4 text-white font-semibold shadow-lg hover:bg-orange-700 transition"
            >
              Start Converting
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold hover:border-orange-500 hover:text-orange-600 transition"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="rounded-2xl bg-white shadow-sm border p-6 hover:shadow-lg transition">

            <FileText className="text-orange-600 mb-4" size={36} />

            <h3 className="font-bold text-lg">
              PDF Tools
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Convert documents to and from PDF quickly.
            </p>

          </div>

          <div className="rounded-2xl bg-white shadow-sm border p-6 hover:shadow-lg transition">

            <Image className="text-orange-600 mb-4" size={36} />

            <h3 className="font-bold text-lg">
              Image Tools
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Convert JPG, PNG and other image formats.
            </p>

          </div>

          <div className="rounded-2xl bg-white shadow-sm border p-6 hover:shadow-lg transition">

            <FileSpreadsheet
              className="text-orange-600 mb-4"
              size={36}
            />

            <h3 className="font-bold text-lg">
              Excel Tools
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Spreadsheet conversion made simple.
            </p>

          </div>

          <div className="rounded-2xl bg-white shadow-sm border p-6 hover:shadow-lg transition">

            <Presentation
              className="text-orange-600 mb-4"
              size={36}
            />

            <h3 className="font-bold text-lg">
              PowerPoint
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Convert presentation files in seconds.
            </p>

          </div>

        </div>

        {/* Trust Badges */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="flex items-center gap-4 rounded-xl bg-white border p-5">

            <ShieldCheck
              className="text-green-600"
              size={32}
            />

            <div>

              <h4 className="font-semibold">
                Secure Processing
              </h4>

              <p className="text-sm text-gray-600">
                Your files are processed securely and never shared.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-xl bg-white border p-5">

            <Zap
              className="text-yellow-500"
              size={32}
            />

            <div>

              <h4 className="font-semibold">
                Lightning Fast
              </h4>

              <p className="text-sm text-gray-600">
                Convert files within seconds using optimized processing.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-xl bg-white border p-5">

            <Smartphone
              className="text-blue-500"
              size={32}
            />

            <div>

              <h4 className="font-semibold">
                Works Everywhere
              </h4>

              <p className="text-sm text-gray-600">
                Desktop, tablet and mobile supported with no installation.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}