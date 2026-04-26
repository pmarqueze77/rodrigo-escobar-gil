import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Practice from "@/components/Practice";
import Academia from "@/components/Academia";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar lang="es" />
      <main>
        <Hero lang="es" />
        <About lang="es" />
        <Timeline lang="es" />
        <Practice lang="es" />
        <Academia lang="es" />
        <Blog lang="es" limit={4} />
        <Contact lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
