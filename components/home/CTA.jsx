"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-white text-sm font-semibold">
            <Sparkles size={18} />
            Free Online Converter
          </div>

          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Convert Your Files?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-orange-100 leading-8">
            Convert documents, images and more with FileConverter.
            Fast, secure, browser-based and completely free.
            Start using one of our online conversion tools today.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="#popular-tools"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-orange-600 shadow-xl hover:scale-105 transition"
            >
              Browse Tools
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-orange-600 transition"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8">

            <h3 className="text-xl font-bold text-white">
              Free Forever
            </h3>

            <p className="mt-4 text-orange-100 leading-7">
              Use our online file conversion tools without subscriptions,
              hidden costs or mandatory registration.
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8">

            <h3 className="text-xl font-bold text-white">
              Secure & Private
            </h3>

            <p className="mt-4 text-orange-100 leading-7">
              Your files are processed securely and automatically removed
              after conversion to protect your privacy.
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8">

            <h3 className="text-xl font-bold text-white">
              Works Everywhere
            </h3>

            <p className="mt-4 text-orange-100 leading-7">
              Access FileConverter from Windows, macOS, Linux,
              Android and iPhone using any modern browser.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}