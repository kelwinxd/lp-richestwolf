import About from "@/components/About";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Inside from "@/components/Inside";
import Offer from "@/components/Offer";
import Problem from "@/components/Problem";
import Proof from "@/components/Proof";
import Solution from "@/components/Solution";
import StickyBuyBar from "@/components/StickyBuyBar";
import { checkoutUrl, product, site } from "@/lib/config";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${product.title}: ${product.subtitle}`,
  description: site.description,
  image: `${site.url}/opengraph-image`,
  brand: { "@type": "Brand", name: site.name },
  offers: {
    "@type": "Offer",
    price: product.price.toFixed(2),
    priceCurrency: product.currency,
    availability: "https://schema.org/InStock",
    url: checkoutUrl.split("?")[0],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Inside />
        <Benefits />
        <About />
        <Proof />
        <Offer />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBuyBar />
    </>
  );
}
