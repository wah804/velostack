import Link from "next/link";
import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Rocket className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Velostack. Speed is our stack.
          </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="mailto:hello@velostack.com" className="text-sm font-medium underline underline-offset-4">
              Contact Us
           </Link>
        </div>
      </div>
    </footer>
  );
}
