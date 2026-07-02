"use client";

import {
  Files,
  Users,
  Globe,
  Clock,
} from "lucide-react";

const stats = [
  {
    icon: Files,
    value: "50K+",
    title: "Files Converted",
    description: "Thousands of files successfully converted every month.",
  },
  {
    icon: Users,
    value: "10K+",
    title: "Happy Users",
    description: "Trusted by students, professionals and businesses.",
  },
  {
    icon: Globe,
    value: "190+",
    title: "Countries",
    description: "People around the world use FileConverter every day.",
  },
  {
    icon: Clock,
    value: "24/7",
    title: "Available",
    description: "Convert files anytime from any device.",
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-widest text-orange-100 font-semibold">
            Trusted Worldwide
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            File Conversion Made Simple
          </h2>

          <p className="mt-5 text-orange-100 text-lg leading-8">
            Our platform is built to provide a fast, secure and reliable
            experience for everyone. Whether you're converting one file
            or many, FileConverter is ready whenever you need it.
          </p>

        </div>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center hover:bg-white/20 transition"
              >
                <div className="flex justify-center">
                  <Icon size={42} />
                </div>

                <h3 className="mt-6 text-5xl font-extrabold">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 text-orange-100 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}