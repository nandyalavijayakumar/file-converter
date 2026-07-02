"use client";

import {
  ShieldCheck,
  Lock,
  Trash2,
  Cloud,
  CheckCircle2,
  Server,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Secure File Processing",
    description:
      "Your uploaded files are transferred using encrypted HTTPS connections for secure processing.",
  },
  {
    icon: Trash2,
    title: "Automatic File Deletion",
    description:
      "Files are automatically removed from our servers after processing to help protect your privacy.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "We do not permanently store or share your files. Your data belongs only to you.",
  },
  {
    icon: Cloud,
    title: "Browser-Based",
    description:
      "No software installation required. Access our tools from any modern browser.",
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description:
      "Our platform is designed for fast, stable and reliable file conversions around the clock.",
  },
  {
    icon: CheckCircle2,
    title: "Simple & Free",
    description:
      "No account creation, hidden fees or complicated setup. Just upload, convert and download.",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            Security & Privacy
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Your Files Stay Safe
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            We designed FileConverter with security and privacy in mind.
            From encrypted uploads to automatic file deletion, every
            conversion is handled with care.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {securityFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 hover:border-orange-500 hover:shadow-xl transition-all"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Trust Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white p-10">

          <div className="grid gap-10 md:grid-cols-2 items-center">

            <div>

              <h3 className="text-3xl font-bold">
                Why users trust FileConverter
              </h3>

              <p className="mt-5 text-orange-100 leading-8">
                Whether you're converting work documents, school assignments,
                presentations or images, our goal is to provide a secure,
                reliable and easy-to-use experience for everyone.
              </p>

            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle2 />
                <span>Encrypted file transfer</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 />
                <span>Automatic file cleanup</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 />
                <span>No registration required</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 />
                <span>Works on desktop and mobile</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 />
                <span>Fast online conversion</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}