import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Practice from "@/components/Practice";
import Academia from "@/components/Academia";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rodrigo Escobar Gil | Jurist, Former Justice & Legal Counsel — Colombia",
  description:
    "Former Justice and President of the Constitutional Court of Colombia. IACHR Commissioner — OAS. PhD in Administrative Law. Legal counsel specializing in public law, constitutional law, and human rights.",
  alternates: {
    canonical: "https://rodrigoescobargil.com/en",
    languages: {
      "es-CO": "https://rodrigoescobargil.com",
      "en-US": "https://rodrigoescobargil.com/en",
    },
  },
};

export default function HomeEn() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <Hero lang="en" />
        <About lang="en" />
        <Timeline lang="en" />
        <Practice lang="en" />
        <Academia lang="en" />
        <Blog lang="en" limit={4} />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
