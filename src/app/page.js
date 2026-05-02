import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import MenuSection from "@/components/layout/MenuSection";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <Hero />
        <MenuSection />
        <HomeMenu />
      </section>
      <About />
      <Contact />
    </>
  );
}
