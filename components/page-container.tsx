import clsx from "clsx";

type PropsPageContainer = {
  children: React.ReactNode;
  gridMode?: boolean;
  className?: string;
};

export default function PageContainer({
  children,
  gridMode = true,
  className,
}: PropsPageContainer) {
  return (
    <main
      className={clsx(
        "w-full min-h-[calc(100vh-212px)] md:min-h-[calc(100vh-180px)] pb-6 container ",
        gridMode ? "grid md:grid-cols-2 grid-cols-1 gap-8" : "",
        className
      )}
    >
      {children}
    </main>
  );
}
