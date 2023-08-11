import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import React from "react";
import { Switch } from "@nextui-org/switch";
import {Moon} from '../../../public/moon'
import {Sun} from '../../../public/sun'
import Image from "next/image";

const Header = () => {
  return (
    <Navbar className="w-full border-b-1 border-[var(--light)]">
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
            href=""
            as={NextLink}
          >
            Page 2
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
        <Switch
          defaultSelected
          size="lg"
          color="success"
          startContent={<Sun />}
          endContent={<Moon />}
        >
          Dark mode
        </Switch>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            color="foreground"
            className="hover:text-[var(--primary)]"
            href="/login"
            as={NextLink}
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NextLink}
            color="secondary"
            href="/register"
            variant="flat"
            className="hover:opacity-80"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
