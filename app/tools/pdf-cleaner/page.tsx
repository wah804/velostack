import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PdfCleanerPage() {
  return (
    <main className="container py-12 mx-auto">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">PDF Cleaner Tool</h1>
          <p className="text-muted-foreground">
            Upload your PDF and we&apos;ll clean it up for you.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload PDF</CardTitle>
            <CardDescription>
              Select a PDF file from your computer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input id="pdf-file" type="file" accept=".pdf" />
            </div>
            <Button>Process PDF</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}