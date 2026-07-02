"use client";

import {
  MousePointerClick,
  Upload,
  RefreshCw,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    number: "01",
    title: "Choose a Converter",
    description:
      "Select the file conversion tool that matches your needs from our growing collection of online converters.",
  },
  {
    icon: Upload,
    number: "02",
    title: "Upload Your File",
    description:
      "Upload your document or image securely. Most conversions complete within a few seconds.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Convert Instantly",
    description:
      "Our cloud-powered conversion engine processes your file while maintaining high output quality.",
  },
  {
    icon: Download,
    number: "04",
    title: "Download",
    description:
      "Download your converted file immediately. Your uploaded files are automatically removed for privacy.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Convert Files in Four Simple Steps
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            FileConverter is designed to make file conversion quick,
            secure and effortless. No technical skills or software
            installation required.
          </p>

        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-white border border-gray-200 p-8 text-center hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute top-5 right-5 text-5xl font-extrabold text-orange-100">
                  {step.number}
                </span>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Icon size={36} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Information */}

        <div className="mt-16 rounded-3xl bg-orange-600 text-white p-10">

          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <h3 className="text-3xl font-bold">
                Fast, Secure & Easy
              </h3>

              <p className="mt-5 text-orange-100 leading-8">
                Whether you're converting documents for work,
                school or personal use, FileConverter provides
                a smooth experience across desktop, tablet and
                mobile devices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-xl bg-white/10 p-6">
                <h4 className="text-3xl font-bold">
                  100%
                </h4>

                <p className="mt-2 text-orange-100">
                  Browser Based
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6">
                <h4 className="text-3xl font-bold">
                  Secure
                </h4>

                <p className="mt-2 text-orange-100">
                  File Processing
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6">
                <h4 className="text-3xl font-bold">
                  Free
                </h4>

                <p className="mt-2 text-orange-100">
                  No Registration
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-6">
                <h4 className="text-3xl font-bold">
                  24/7
                </h4>

                <p className="mt-2 text-orange-100">
                  Available Online
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}