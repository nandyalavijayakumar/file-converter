export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "FileConverter",

    url: "https://fileconverter.co.in",

    description:
      "Free online file converter to convert PDF, Word, Images, Excel, PowerPoint and Text files quickly and securely.",

    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://fileconverter.co.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },

    publisher: {
      "@type": "Organization",
      name: "FileConverter",
      url: "https://fileconverter.co.in",
    },
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