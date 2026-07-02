export default function FAQSchema() {
  const faqs = [
    {
      question: "Is FileConverter free to use?",
      answer:
        "Yes. FileConverter allows you to convert files online for free without installing software.",
    },
    {
      question: "Are my files secure?",
      answer:
        "Yes. Files are processed securely and automatically deleted after conversion.",
    },
    {
      question: "Which file formats are supported?",
      answer:
        "FileConverter supports PDF, Word, Images, Text and additional document formats, with more formats being added regularly.",
    },
    {
      question: "Can I use FileConverter on mobile devices?",
      answer:
        "Yes. FileConverter works in modern browsers on desktops, tablets and smartphones.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No. You can convert files without creating an account.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}