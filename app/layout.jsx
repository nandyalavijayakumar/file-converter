import './globals.css'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import Script from "next/script"
import Link from "next/link";

export const metadata = {
metadataBase: new URL("https://fileconverter.co.in"),
  applicationName: "FileConverter",

  title: {
    default: "Free Online File Converter | Convert PDF, Word, Images & More",
    template: "%s | FileConverter",
  },

  description:
    "Free online file converter to convert PDF, Word, Images, Excel, PowerPoint and Text files. Fast, secure, browser-based and works on desktop and mobile.",

  keywords: [
    "file converter",
    "online file converter",
    "pdf converter",
    "word to pdf",
    "pdf to word",
    "image to pdf",
    "pdf to image",
    "text to pdf",
    "free online converter",
    "document converter",
  ],

  authors: [
    {
      name: "FileConverter",
    },
  ],

  creator: "FileConverter",

  publisher: "FileConverter",

  category: "Utilities",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Free Online File Converter",
    description:
      "Convert PDF, Word, Images, Excel and more online for free.",

    url: "https://fileconverter.co.in",

    siteName: "FileConverter",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FileConverter",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Free Online File Converter",

    description:
      "Fast and secure online file conversion.",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },



  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "google-adsense-account": "ca-pub-2008367184647190",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
     
      <body className="min-h-screen bg-gray-50">

  <a
    href="#main-content"
    className="absolute -left-full top-0 z-50 bg-white text-black px-4 py-2 rounded focus:left-4 focus:top-4"
  >
    Skip to main content
  </a>
 {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008367184647190"
          crossOrigin="anonymous"
        />
        {/* CLIENT: mobile menu button + mobile drawer */}
        <MobileMenu />

        <div className="flex">
          
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          <div className="flex-1 min-h-screen flex flex-col">

            <main
  id="main-content"
  className="p-6 flex-1"
>
              <div className="max-w-5xl mx-auto">
                {children}
              </div>
            </main>

           <footer className="border-t bg-white p-4 text-center text-sm text-gray-500">
  <div className="mb-2">
    © {new Date().getFullYear()} FileConverter — Built with ❤️
  </div>
  <div className="flex flex-wrap justify-center gap-4">
    <Link href="/privacy-policy" className="hover:underline">
  Privacy Policy
</Link>
    <Link href="/terms" className="hover:underline">
      Terms
    </Link>
    <Link href="/about" className="hover:underline">
      About
    </Link>
    <Link href="/contact" className="hover:underline">
      Contact
    </Link>
    <Link href="/adsense-consent" className="hover:underline">
      Adsense Consent
    </Link>
  </div>
</footer>


          </div>

        </div>
      </body>
    </html>
  )
}
