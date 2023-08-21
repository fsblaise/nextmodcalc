"use client";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <div className="border-b-1 pb-4">
        <Link
          as={NextLink}
          href="/mekanism"
          color="foreground"
          isBlock
          className={`${
            pathname === "/mekanism" &&
            "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
          } w-full h-10 pl-4 font-bold`}
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
          isBlock
          className={`${
            pathname === "/mekanism/fission" &&
            "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
          } w-full h-10 pl-4 font-bold`}
        >
          Fission reactor
        </Link>
        <Link
          as={NextLink}
          href="/mekanism/fission"
          color="foreground"
          isBlock
          className={`${
            pathname === "" &&
            "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
          } w-full h-10 pl-4 font-bold`}
        >
          Fusion reactor
        </Link>
        <Link
          as={NextLink}
          href="/mekanism/fission"
          color="foreground"
          isBlock
          className={`${
            pathname === "" &&
            "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
          } w-full h-10 pl-4 font-bold`}
        >
          Boiler
        </Link>
        <Link
          as={NextLink}
          href="/mekanism/fission"
          color="foreground"
          isBlock
          className={`${
            pathname === "" &&
            "bg-white dark:bg-neutral-800 rounded-l-xl shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)] text-secondary"
          } w-full h-10 pl-4 font-bold`}
        >
          Turbine
        </Link>
      </div>
    </>
  );
}
