import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='container'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
