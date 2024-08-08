import { cn } from "@/lib/utils";

export default function Span({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <span className={cn("text-sm font-normal", className)}>{children}</span>
  );
}
