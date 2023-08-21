import About from "@/components/about";
import Divider from "@/components/divider";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="grid place-items-center">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experiences />
    </main>
  );
}
