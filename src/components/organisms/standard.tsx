export default function standard({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 items-center justify-center flex-col w-screen">
      {children}
    </main>
  );
}
