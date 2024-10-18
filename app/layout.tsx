import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SISUMA - Creditos al instante.",
  description: "Somos una empresa de créditos especializada en ofrecer soluciones financieras rápidas y seguras. Ofrecemos préstamos personales, empresariales y tarjetas de crédito, adaptados a tus necesidades, con tasas competitivas y plazos flexibles. Nuestro compromiso es facilitarte el acceso a financiamiento para que alcances tus metas de manera eficiente y sin complicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
