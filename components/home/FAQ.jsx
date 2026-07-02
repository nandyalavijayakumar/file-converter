"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is FileConverter completely free to use?",
    answer:
      "Yes. You can use our online file conversion tools without creating an account or paying any subscription fees.",
  },
  {
    question: "Which file formats are supported?",
    answer:
      "We currently support popular document and image formats including PDF, DOC, DOCX, TXT, JPG, PNG and more. Additional formats will be added regularly.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. FileConverter works entirely in your web browser, so there is nothing to download or install.",
  },
  {
    question: "Can I use FileConverter on my phone?",
    answer:
      "Yes. Our website is fully responsive and works on Android phones, iPhones, tablets, laptops and desktop computers.",
  },
  {
    question: "Are my uploaded files secure?",
    answer:
      "Yes. Files are transferred over secure HTTPS connections and are automatically removed after processing according to our retention policy.",
  },
  {
    question: "Do you store my files?",
    answer:
      "No. Uploaded files are not permanently stored. They are automatically deleted after conversion to help protect your privacy.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "The maximum file size depends on the specific converter. Any applicable limits will be shown on the relevant conversion page.",
  },
  {
    question: "Can I convert multiple files?",
    answer:
      "Some tools support batch conversion, and we plan to expand multi-file support across more converters in future updates.",
  },
  {
    question: "Which browsers are supported?",
    answer:
      "FileConverter works with the latest versions of Chrome, Edge, Firefox, Safari and other modern browsers.",
  },
  {
    question: "Will more conversion tools be added?",
    answer:
      "Yes. We are continuously expanding our collection with additional PDF, Office, image and document conversion tools.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-orange-600 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Everything You Need to Know
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Find answers to the most common questions about FileConverter,
            supported formats, security, privacy and online file conversion.
          </p>

        </div>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp className="text-orange-600" />
                ) : (
                  <ChevronDown className="text-orange-600" />
                )}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}