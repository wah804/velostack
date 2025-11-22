"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Eraser, Type, CaseUpper, CaseLower, SpellCheck } from "lucide-react";

export default function TextCleanerPage() {
  const [text, setText] = useState("");

  const handleTrim = () => {
    setText(text.trim().replace(/\s+/g, " "));
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleTitleCase = () => {
    setText(
      text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    );
  };

  const handleFixTypos = () => {
    const commonTypos: { [key: string]: string } = {
      teh: "the",
      adn: "and",
      dont: "don't",
      cant: "can't",
      wont: "won't",
      im: "I'm",
      ive: "I've",
      id: "I'd",
      i: "I",
      u: "you",
      r: "are",
      ur: "your",
      thier: "their",
      wierd: "weird",
      recieve: "receive",
      seperate: "separate",
      occured: "occurred",
      definately: "definitely",
      alot: "a lot",
    };

    const words = text.split(/(\s+)/);
    const fixedWords = words.map((word) => {
      if (!word) return word;
      const lowerWord = word.toLowerCase();
      if (commonTypos[lowerWord]) {
        // Preserve capitalization if original was capitalized
        if (word[0] && word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase()) {
           const fixed = commonTypos[lowerWord];
           return fixed.charAt(0).toUpperCase() + fixed.slice(1);
        }
        return commonTypos[lowerWord];
      }
      return word;
    });
    setText(fixedWords.join(""));
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="container py-12 mx-auto">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Text Cleaner & Formatter</h1>
          <p className="text-muted-foreground">
            Clean up your text, remove extra spaces, and fix capitalization.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Input Text</CardTitle>
            <CardDescription>
              Paste your text below to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Paste your text here..."
              className="min-h-[200px] text-base"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            
            <div className="flex flex-wrap gap-2">
              <Button onClick={handleTrim} variant="outline">
                <Eraser className="mr-2 h-4 w-4" />
                Remove Extra Spaces
              </Button>
              <Button onClick={handleLowerCase} variant="outline">
                <CaseLower className="mr-2 h-4 w-4" />
                lowercase
              </Button>
              <Button onClick={handleUpperCase} variant="outline">
                <CaseUpper className="mr-2 h-4 w-4" />
                UPPERCASE
              </Button>
              <Button onClick={handleTitleCase} variant="outline">
                <Type className="mr-2 h-4 w-4" />
                Title Case
              </Button>
              <Button onClick={handleFixTypos} variant="outline">
                <SpellCheck className="mr-2 h-4 w-4" />
                Fix Common Typos
              </Button>
            </div>

            <div className="flex gap-2 pt-4 border-t">
               <Button onClick={handleCopy} className="flex-1">
                Copy Result
              </Button>
              <Button onClick={handleClear} variant="destructive">
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
