import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import Head from "next/head";

import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Ozzy Renos",
    template: "%s | Ozzy Renos",
  },
  description:
    "Ozzy Renos is a trusted renovation and construction company serving the Niagara Region with quality craftsmanship and personalized service.",
  metadataBase: new URL("https://www.ozzyrenos.ca"),
  openGraph: {
    title: "Ozzy Renos",
    description:
      "Home renovations and general contracting in Niagara: Kitchens, Basements, Decks, and more.",
    url: "https://www.ozzyrenos.ca",
    siteName: "Ozzy Renos",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/niagara-kitchen-renovations.png",
        width: 1170,
        height: 615,
        alt: "Niagara kitchen renovation by Ozzy Renos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozzy Renos",
    description:
      "Renovations and contracting services across the Niagara Region. Kitchens, Decks, Basements, and more.",
    images: ["/niagara-kitchen-renovations.png"],
  },
  alternates: {
    canonical: "https://www.ozzyrenos.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="AsNkrYH6yfdrpUn16jJRu2H9yEoN1l-Tz5GmqdLpgtk"
        />
      </Head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
