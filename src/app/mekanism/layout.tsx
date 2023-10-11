import Sidebar from "@/components/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-h-full flex-grow-[100] flex items-stretch">
      <div className="fixed top-0 left-0 z-40 h-screen pt-[66px]">
        <Sidebar classNames="min-h-full w-[200px] flex flex-col pt-10 gap-2"></Sidebar>
      </div>
      <div
        id="content"
        className="rounded-s-xl p-12 min-h-full sm:ml-[200px] w-full flex items-stretch bg-white dark:bg-neutral-800 overflow-auto"
      >
        {children}
      </div>
    </div>
  );
}
