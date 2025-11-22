import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="container py-8 md:py-12 lg:py-24 mx-auto px-4 md:px-6">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          Coming Soon
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We are working on more tools including AI-powered automations and document processing workflows.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/automations">Check Automations</Link>
        </Button>
      </div>
    </section>
  );
}
