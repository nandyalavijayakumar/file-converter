"use client";

import {
  ShieldCheck,
  Zap,
  Laptop,
  Cloud,
  Lock,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Conversion",
    description:
      "Convert files within seconds using our optimized online conversion engine.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Processing",
    description:
      "Your files are processed securely and automatically removed after conversion.",
  },
  {
    icon: Laptop,
    title: "Works Everywhere",
    description:
      "Use FileConverter on Windows, macOS, Linux, Android and iPhone directly from your browser.",
  },
  {
    icon: Cloud,
    title: "No Installation",
    description:
      "No software downloads or plugins required. Everything works online.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "We never permanently store your uploaded files. Your privacy is our priority.",
  },
  {
    icon: BadgeCheck,
    title: "Free Forever",
    description:
      "All our essential file conversion tools are available free with no registration required.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Everything You Need for File Conversion
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            FileConverter makes converting documents and images simple, fast,
            and secure. Whether you're working on desktop or mobile, our tools
            are designed for speed and reliability.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white border border-gray-200 p-8 transition-all duration-300 hover:border-orange-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}