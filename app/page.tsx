import { Hero } from "@/components/sections/hero";
import { ToolsGrid } from "@/components/sections/tools-grid";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <ToolsGrid />
      <CTA />
    </main>
  );
}
