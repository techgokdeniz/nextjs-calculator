import { cn } from "@/lib/utils";

export default function BasicCardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border p-4 rounded-lg h-fit", className)}>
      {children}
    </div>
  );
}
