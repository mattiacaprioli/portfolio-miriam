import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import TimelineSection from "./components/TimelineSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Miriam Truiolo</title>
        <meta
          name="description"
          content="Esplora il portfolio di Miriam Truiolo nel digital marketing e nel copywriting, con strategie di contenuto, ottimizzazione SEO e campagne di impatto per la crescita e il coinvolgimento del marchio."
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://miriamportfolio.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio Miriam Truiolo" />
        <meta
          property="og:description"
          content="Esplora il portfolio di Miriam Truiolo nel digital marketing e nel copywriting, con strategie di contenuto, ottimizzazione SEO e campagne di impatto per la crescita e il coinvolgimento del marchio."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/eb689ef2-6b31-4280-9efe-a65defe9aabf.png?token=3sfjde1NT3t1k0CVc-TXpEMTF6__fdub8xufxt84JhM&height=550&width=1200&expires=33266651135"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miriamportfolio.netlify.app" />
        <meta
          property="twitter:url"
          content="https://miriamportfolio.netlify.app/"
        />
        <meta name="twitter:title" content="Portfolio Miriam Truiolo" />
        <meta
          name="twitter:description"
          content="Esplora il portfolio di Miriam Truiolo nel digital marketing e nel copywriting, con strategie di contenuto, ottimizzazione SEO e campagne di impatto per la crescita e il coinvolgimento del marchio."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/eb689ef2-6b31-4280-9efe-a65defe9aabf.png?token=3sfjde1NT3t1k0CVc-TXpEMTF6__fdub8xufxt84JhM&height=550&width=1200&expires=33266651135"
        />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-3 py-4">
          <HeroSection />
          <AboutSection />
          <TimelineSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
