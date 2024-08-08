import { cn } from "@/lib/utils";

export default function P({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <p className={cn("text-base font-normal", className)}>{children}</p>;
}
