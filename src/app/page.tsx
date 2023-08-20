import About from "@/components/about";
import Divider from "@/components/divider";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="grid place-items-center">
      <Intro />
      <Divider />
      <About />
      <Divider />
    </main>
  );
}
