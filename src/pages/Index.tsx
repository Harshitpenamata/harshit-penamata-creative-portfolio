import {
  Navigation,
  Hero,
  About,
  Work,
  Services,
  Capabilities,
  Experience,
  Contact,
} from "@/components/portfolio";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Services />
      <Experience />
      <Capabilities />
      <Contact />
    </main>
  );
};

export default Index;
