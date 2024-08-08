import { cn } from "@/lib/utils";

export default function H2({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>
  );
}
