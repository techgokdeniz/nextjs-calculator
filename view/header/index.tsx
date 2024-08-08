import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import headerConfig from "@/config/header";
import { FaRandom } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-background py-3 shadow-sm ">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center" prefetch={false}>
          <FaCalculator className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">
            {headerConfig?.title}
          </span>
        </Link>
        <nav className="hidden space-x-4 sm:flex">
          {headerConfig?.menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <MdMenu className="w-6 h-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 p-4">
              {headerConfig?.menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Button className="hidden sm:inline-flex">
          <FaRandom className="mr-2" />
          <span>{headerConfig?.buttonText}</span>
        </Button>
      </div>
    </header>
  );
}
