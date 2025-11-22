import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Eraser, Braces } from "lucide-react";

const tools = [
  {
    title: "PDF Cleaner",
    description: "Convert messy PDFs into clean, readable text.",
    href: "/tools/pdf-cleaner",
    icon: FileText,
    tags: ["PDF", "Utility"],
  },
  {
    title: "Text Cleaner",
    description: "Remove extra spaces, fix capitalization, and format text.",
    href: "/tools/text-cleaner",
    icon: Eraser,
    tags: ["Text", "Formatting"],
  },
  {
    title: "JSON Formatter",
    description: "Beautify, minify, and validate your JSON data.",
    href: "/tools/json-formatter",
    icon: Braces,
    tags: ["Developer", "JSON"],
  },
];

export function ToolsGrid() {
  return (
    <section className="container py-8 md:py-12 lg:py-24 mx-auto px-4 md:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
          Our Tools
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Open source and free to use tools for your daily workflow.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3 lg:gap-8 mt-8">
        {tools.map((tool) => (
          <Card key={tool.title} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <tool.icon className="h-6 w-6" />
                  <CardTitle>{tool.title}</CardTitle>
                </div>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={tool.href}>Open Tool</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
