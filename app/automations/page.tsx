import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, FileText, Share2, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Auto-send Invoices",
    description: "Automatically generate and send invoices when a deal is closed.",
    icon: FileText,
  },
  {
    title: "Auto Email Follow-ups",
    description: "Nurture leads with personalized, automated email sequences.",
    icon: Mail,
  },
  {
    title: "Auto Content Posting",
    description: "Schedule and post content across multiple platforms automatically.",
    icon: Share2,
  },
  {
    title: "Auto Form Processing",
    description: "Capture form submissions and sync data to your CRM instantly.",
    icon: Database,
  },
];

export default function AutomationsPage() {
  return (
    <main className="container py-12 md:py-24 mx-auto px-4 md:px-6">
      <div className="mx-auto max-w-4xl space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            We Build Automations for Your Business
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Stop wasting time on repetitive tasks. We design custom workflows using AI and n8n to save you hours every week.
          </p>
          <div className="pt-4">
             <Button asChild size="lg">
              <Link href="mailto:hello@velostack.com">
                Email me to get started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-lg border bg-slate-50 dark:bg-slate-900/50 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to automate your workflow?</h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss your specific needs and build a solution that fits.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="mailto:hello@velostack.com">
              Contact Us
            </Link>
          </Button>
        </div>

      </div>
    </main>
  );
}