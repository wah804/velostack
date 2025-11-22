import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Velostack
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Tools
            </Link>
            <Link
              href="/automations"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Automations
            </Link>
            <Link
              href="mailto:hello@velostack.com"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center space-x-2 mb-8">
                <Rocket className="h-6 w-6" />
                <span className="font-bold">Velostack</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/tools"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Tools
                </Link>
                <Link
                  href="/automations"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Automations
                </Link>
                <Link
                  href="mailto:hello@velostack.com"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2 md:hidden">
             <span className="font-bold">Velostack</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search here later */}
          </div>
          <nav className="flex items-center">
            <Button asChild variant="default" size="sm">
              <Link href="/tools">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
