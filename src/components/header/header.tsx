import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import React from "react";
import DarkSwitch from "./darkSwitch/darkSwitch";
import { Moon } from "../../../public/moon";
import { Sun } from "../../../public/sun";
import UserSegment from "./userSegment/userSegment";

const Header = () => {

  return (
    <Navbar className="w-full border-b-1 bg-transparent" isBordered>
      <NavbarBrand>
        <Link color="foreground" href="/" as={NextLink} className="text-2xl">
          <span className="text-[var(--secondary)]">N</span>
          <span>ext</span>
          <span className="text-[var(--primary)]">M</span>
          <span>od</span>
          <span className="text-[var(--tertiary)]">C</span>
          <span>alc</span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            className="hover:text-[var(--primary)]"
            href="/mekanism"
            as={NextLink}
          >
            Mekanism
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            className="hover:text-[var(--primary)]"
            href=""
            aria-current="page"
            as={NextLink}
          >
            Page 3
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <DarkSwitch start={<Sun />} end={<Moon />} />
        <UserSegment></UserSegment>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
