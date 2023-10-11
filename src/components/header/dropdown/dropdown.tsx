"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/dropdown";
import React from "react";
import router from "next/router";
import { HamburgerIcon } from "../../../../public/hamburger";
import DarkSwitch from "../darkSwitch/darkSwitch";
import { Sun } from "../../../../public/sun";
import { Moon } from "../../../../public/moon";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { UserAuth } from "@/contexts/auth.context";

type Props = {
  darkSwitch: React.ReactNode;
};

export default function CustomDropdown({ darkSwitch }: Props) {
  const { user, loading } = UserAuth();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          <HamburgerIcon></HamburgerIcon>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownSection showDivider>
          <DropdownItem>
            <div className="flex justify-between items-center text-base">
              Darkmode{darkSwitch}
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection showDivider className={`${(user || loading) && 'hidden'}`}>
          <DropdownItem>
            <Link
              color="foreground"
              className="hover:text-[var(--primary)]"
              href="/login"
              as={NextLink}
            >
              Login
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link
              color="foreground"
              as={NextLink}
              href="/register"
              className="hover:text-[var(--primary)]"
            >
              Sign Up
            </Link>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Pages">
          <DropdownItem>
            <Link
              color="foreground"
              className="hover:text-[var(--primary)]"
              href="/mekanism"
              as={NextLink}
            >
              Mekanism
            </Link>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
