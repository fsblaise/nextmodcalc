import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center snap-mandatory snap-y">
      <div className="w-full h-[calc(100vh-65px)] flex items-center justify-center text-[3rem] font-bold text-center bg-black snap-start">
        <div>
          Welcome to
          <span className="text-[var(--secondary)]"> N</span>
          <span>ext</span>
          <span className="text-[var(--primary)]">M</span>
          <span>od</span>
          <span className="text-[var(--tertiary)]">C</span>
          <span>alc</span>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-65px)] flex items-center justify-center text-[3rem] font-bold text-center snap-start">

      </div>
    </main>
  );
}
