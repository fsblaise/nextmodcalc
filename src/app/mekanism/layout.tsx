import Sidebar from "@/components/sidebar/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex-grow-[100] flex items-stretch">
      <div id="sideBar" className="min-h-full w-80 flex flex-col pt-10 gap-2">
        <Sidebar></Sidebar>
      </div>
      <div id="content" className="rounded-s-xl p-12 min-h-full w-full flex items-stretch bg-white dark:bg-neutral-800">
        {children}
      </div>
    </div>
  );
}
