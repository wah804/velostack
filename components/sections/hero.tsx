import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-5xl flex-col items-center gap-4 text-center mx-auto px-4 md:px-6">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Automate your workflow with Velostack
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We build tools and automations to help you move faster. 
          Stop wasting time on repetitive tasks and focus on what matters.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/tools">Explore Tools</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/automations">View Automations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
