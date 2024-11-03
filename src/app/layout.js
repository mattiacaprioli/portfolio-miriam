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

export const metadata = {
  title: "Portfolio Miriam Truiolo",
  description:
    "Esplora il portfolio di Miriam Truiolo nel digital marketing e nel copywriting, con strategie di contenuto, ottimizzazione SEO e campagne di impatto per la crescita e il coinvolgimento del marchio.",
  openGraph: {
    url: "https://miriamportfolio.netlify.app/",
    type: "website",
    title: "Portfolio Miriam Truiolo",
    description:
      "Esplora il portfolio di Miriam Truiolo nel digital marketing e nel copywriting, con strategie di contenuto, ottimizzazione SEO e campagne di impatto per la crescita e il coinvolgimento del marchio.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/eb689ef2-6b31-4280-9efe-a65defe9aabf.png?token=3sfjde1NT3t1k0CVc-TXpEMTF6__fdub8xufxt84JhM&height=550&width=1200&expires=33266651135",
        width: 1200,
        height: 550,
        alt: "Portfolio Miriam Truiolo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "miriamportfolio.netlify.app",
    url: "https://miriamportfolio.netlify.app/",
    title: "Portfolio Miriam Truiolo",
    description:
      "Esplora il portfolio di Miriam Truiolo nel digital marketing e nel copywriting, con strategie di contenuto, ottimizzazione SEO e campagne di impatto per la crescita e il coinvolgimento del marchio.",
    image:
      "https://opengraph.b-cdn.net/production/images/eb689ef2-6b31-4280-9efe-a65defe9aabf.png?token=3sfjde1NT3t1k0CVc-TXpEMTF6__fdub8xufxt84JhM&height=550&width=1200&expires=33266651135",
  },
};

export default function RootLayout({ children }) {
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
