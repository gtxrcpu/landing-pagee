import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chesscuit - Dessert Artisan Dibuat dengan Penuh Cinta",
  description: "Rasakan perpaduan sempurna rasa dengan Chesscuit artisan kami - dessert lembut yang dibuat dengan bahan premium. Harga mulai Rp 35.000 per box.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AOS - Animate On Scroll Library */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js" async></script>
      </head>
      <body className={`${poppins.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
