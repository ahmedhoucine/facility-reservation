import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ThemeProvider from "../../components/ThemeProvider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "facility reservation",
  description: "Discover the best facility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>

            <ThemeProvider>
              <main className='font-normal'>
                <Header />
                {children}
                <Footer/>
              </main>
            </ThemeProvider>

      </body>
    </html>
  );
}
