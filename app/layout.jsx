import './globals.css'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import Script from "next/script"

export const metadata = {
  title: "FileConverter",
  description: "Convert Text, Word, Images, and PDF files easily.",
  // Add meta tags here if needed
  metadataBase: new URL("https://www.fileconverter.co.in"),
  alternates: {},
  icons: {},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* AdSense Meta */}
        <meta name="google-adsense-account" content="ca-pub-2008367184647190" />
      </head>
      <body className="min-h-screen bg-gray-50">
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

            <main className="p-6 flex-1">
              <div className="max-w-5xl mx-auto">
                {children}
              </div>
            </main>

           <footer className="border-t bg-white p-4 text-center text-sm text-gray-500">
  <div className="mb-2">
    © {new Date().getFullYear()} FileConverter — Built with ❤️
  </div>
  <div className="flex justify-center gap-4">
    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
    <a href="/terms" className="hover:underline">Terms</a>
    <a href="/about" className="hover:underline">About</a>
    <a href="/contact" className="hover:underline">Contact</a>
  </div>
</footer>


          </div>

        </div>
      </body>
    </html>
  )
}
