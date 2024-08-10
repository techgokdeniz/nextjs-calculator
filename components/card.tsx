import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-lg bg-gray-100 h-fit w-full border border-black border-opacity-30 cursor-pointer transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
