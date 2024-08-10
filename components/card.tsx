import Link from "next/link";
import H3 from "./typography/h3";
import P from "./typography/p";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-lg bg-gray-100 h-fit w-full border border-black border-opacity-30 cursor-pointer hover:bg-white tramsition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
