"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Copy, Trash2, Minimize2, Maximize2 } from "lucide-react";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFormat = () => {
    try {
      if (!input.trim()) {
        setOutput("");
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      setError("Invalid JSON: " + (err as Error).message);
      setOutput("");
    }
  };

  const handleMinify = () => {
    try {
      if (!input.trim()) {
        setOutput("");
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
    } catch (err) {
      setError("Invalid JSON: " + (err as Error).message);
      setOutput("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <main className="container py-12 mx-auto px-4 md:px-6">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">JSON Formatter & Validator</h1>
          <p className="text-muted-foreground">
            Beautify, minify, and validate your JSON data.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Input Section */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Input JSON</CardTitle>
              <CardDescription>Paste your raw JSON here.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <Textarea
                placeholder='{"key": "value"}'
                className="flex-1 min-h-[300px] font-mono text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="flex flex-wrap gap-2">
                <Button onClick={handleFormat} className="flex-1">
                  <Maximize2 className="mr-2 h-4 w-4" />
                  Beautify
                </Button>
                <Button onClick={handleMinify} variant="outline" className="flex-1">
                  <Minimize2 className="mr-2 h-4 w-4" />
                  Minify
                </Button>
                <Button onClick={handleClear} variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Output</CardTitle>
              <CardDescription>
                {error ? <span className="text-destructive font-medium">Error</span> : "Formatted result."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <div className="relative flex-1">
                <Textarea
                  readOnly
                  className={`h-full min-h-[300px] font-mono text-sm ${
                    error ? "border-destructive focus-visible:ring-destructive" : ""
                  }`}
                  value={error || output}
                  placeholder="Result will appear here..."
                />
              </div>
              <Button onClick={handleCopy} variant="secondary" disabled={!output || !!error}>
                <Copy className="mr-2 h-4 w-4" />
                Copy to Clipboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
