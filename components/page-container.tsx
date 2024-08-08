
export default function PageContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full min-h-[calc(100vh-212px)] md:min-h-[calc(100vh-180px)] pb-6 container grid md:grid-cols-2 grid-cols-1 gap-8">
      {children}
    </main>
  );
}