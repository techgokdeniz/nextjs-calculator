import { cn } from "@/lib/utils";

export default function H1({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <h1 className={cn("text-3xl font-bold", className)}>{children}</h1>;
}
