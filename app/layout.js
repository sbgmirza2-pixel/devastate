import { Plus_Jakarta_Sans, Roboto } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${roboto.variable}`}>
      <body className="bg-[#D1D5DB] text-[#1F2937] min-h-screen flex flex-col justify-between selection:bg-[#544558] selection:text-white antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}