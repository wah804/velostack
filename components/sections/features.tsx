import { CheckCircle2, Zap, Shield } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Built on Next.js for optimal performance and speed.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "Your data is processed locally or securely in the cloud.",
    icon: Shield,
  },
  {
    title: "Simple & Clean",
    description: "No clutter, just the tools you need to get the job done.",
    icon: CheckCircle2,
  },
];

export function Features() {
  return (
    <section className="container py-8 md:py-12 lg:py-24 mx-auto bg-slate-50 dark:bg-slate-900/50 px-4 md:px-6">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          What is Velostack?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We build micro-tools that solve specific problems without the bloat.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
        {features.map((feature) => (
          <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <feature.icon className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
