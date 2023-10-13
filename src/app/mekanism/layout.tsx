import Sidebar from "@/components/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow-[100] flex h-[calc(100vh-65px)]">
      <div className="fixed top-0 left-0 z-40 h-screen pt-[66px] w-[200px]">
        <Sidebar classNames="min-h-full flex flex-col pt-10 gap-2"></Sidebar>
      </div>
      <div
        id="content"
        className="rounded-s-xl sm:ml-[200px] w-full flex flex-col overflow-hidden"
      >
        <div className="p-12 bg-white dark:bg-neutral-800 overflow-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
