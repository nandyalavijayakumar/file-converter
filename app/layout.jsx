import './globals.css'
import Sidebar from './Sidebar'
import MobileMenu from './MobileMenu'
import Head from 'next/head'

export const metadata = {
  title: "FileConverter",
  description: "Convert Text, Word, Images, and PDF files easily."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008367184647190"
     crossorigin="anonymous"></script>
      </Head>
      <body className="min-h-screen bg-gray-50">
       
        
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
              © {new Date().getFullYear()} FileConverter — Built with ❤️
            </footer>

          </div>

        </div>
      </body>
    </html>
  )
}
