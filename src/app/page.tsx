import About from "@/components/about";
import Divider from "@/components/divider";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="grid place-items-center">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
    </main>
  );
}
