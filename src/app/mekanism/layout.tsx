import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex-grow-[100] flex items-stretch">
      <div id="sideBar" className="min-h-full w-80 flex flex-col pt-10 gap-2">
        <div className="border-b-1 pb-4">
          <Link as={NextLink} href="/mekanism" color="foreground" isBlock className="rounded-none rounded-r-2xl w-full h-10 pl-4 font-bold">
            Welcome
          </Link>
        </div>
        <div className="border-b-1 pb-4">
          <h3 className="pl-4 mb-3">Build cost</h3>
          <Link as={NextLink} href="/mekanism/fission" color="foreground" isBlock className="w-full h-10 pl-4 font-bold">
            Fission reactor
          </Link>
          <Link as={NextLink} href="/mekanism/fission" color="foreground" isBlock className="w-full h-10 pl-4 font-bold">
            Fusion reactor
          </Link>
          <Link as={NextLink} href="/mekanism/fission" color="foreground" isBlock className="w-full h-10 pl-4 font-bold">
            Boiler
          </Link>
          <Link as={NextLink} href="/mekanism/fission" color="foreground" isBlock className="w-full h-10 pl-4 font-bold">
            Turbine
          </Link>
        </div>
      </div>
      <div id="content" className="min-h-full w-full flex items-stretch">
        {children}
      </div>
    </div>
  );
}
