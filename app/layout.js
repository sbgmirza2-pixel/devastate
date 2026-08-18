import { Anton, Roboto } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${roboto.variable}`}>
      <body className="bg-[#D1D5DB] text-[#1F2937] min-h-screen flex flex-col justify-between selection:bg-[#544558] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}