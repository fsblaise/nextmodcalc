"use client";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
// import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import useWindowDimensions from "@/hooks/windowDimensions";

type Prop = {
  classNames: string;
};

export default function Sidebar({ classNames }: Prop) {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const [showSidebar, setShowSidebar] = useState(true);
  const prevSizeRef = useRef('big');

  useEffect(() => {
    if (width < 640 && prevSizeRef.current === 'big') {
      setShowSidebar(false);
      prevSizeRef.current = 'small';
    } else if (width >= 640 && prevSizeRef.current === 'small') {
      setShowSidebar(true);
      prevSizeRef.current = 'big';
    }
  }, [width]);

  return (
    <>
      <Button
        variant="light"
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
        className="absolute z-10 min-w-[40px] p-0 rounded-full sm:hidden"
      >
        <span
          className={`material-symbols-outlined transition-all duration-300 ease-in-out ${
            showSidebar && "rotate-180"
          }`}
        >
          arrow_forward_ios
        </span>
      </Button>
      <div
        className={`${classNames} ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-all ease-in-out duration-300 sm:flex z-10 sm:relative sm:z-0 bg-background sm:bg-inherit shadow-2xl sm:shadow-none sm:rounded-none rounded-r-2xl`}
      >
        <div className="border-b-1 pb-4">
          <Link
            as={NextLink}
            href="/mekanism"
            color="foreground"
            className={`${
              pathname === "/mekanism" &&
              "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
            } w-full h-10 pl-4 font-bold hover:rounded-l-xl hover:bg-foreground/10 hover:opacity-100`}
          >
            Welcome
          </Link>
        </div>
        <div className="border-b-1 pb-4">
          <h3 className="pl-4 mb-3">Build cost</h3>
          <Link
            as={NextLink}
            href="/mekanism/fission"
            color="foreground"
            className={`${
              pathname === "/mekanism/fission" &&
              "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
            } w-full h-10 pl-4 font-bold hover:rounded-l-xl hover:bg-foreground/10 hover:opacity-100`}
          >
            Fission reactor
          </Link>
          <Link
            as={NextLink}
            href="/mekanism/fission"
            color="foreground"
            className={`${
              pathname === "" &&
              "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
            } w-full h-10 pl-4 font-bold hover:rounded-l-xl hover:bg-foreground/10 hover:opacity-100`}
          >
            Fusion reactor
          </Link>
          <Link
            as={NextLink}
            href="/mekanism/fission"
            color="foreground"
            className={`${
              pathname === "" &&
              "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
            } w-full h-10 pl-4 font-bold hover:rounded-l-xl hover:bg-foreground/10 hover:opacity-100`}
          >
            Boiler
          </Link>
          <Link
            as={NextLink}
            href="/mekanism/fission"
            color="foreground"
            className={`${
              pathname === "" &&
              "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
            } w-full h-10 pl-4 font-bold hover:rounded-l-xl hover:bg-foreground/10 hover:opacity-100`}
          >
            Turbine
          </Link>
        </div>
      </div>
    </>
  );
}
