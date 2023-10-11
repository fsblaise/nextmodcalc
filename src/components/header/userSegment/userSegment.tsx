"use client";
import React, { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { UserAuth } from "@/contexts/auth.context";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { getById, logOut } from "@/hooks/authService";
import { User } from "@nextui-org/user";
import { CircularProgress } from "@nextui-org/progress";
import { useRouter } from "next/navigation";

export default function UserSegment() {
  const { user, displayName, profileUrl, loading } = UserAuth();
  const shortName = displayName.substring(0,2);
  const router = useRouter();

  const navigateToProfile = () => {router.push('/profile')};

  if (!loading && user) {
    return (
      <NavbarItem className="flex">
        <Dropdown>
          <DropdownTrigger>
            <Avatar src={profileUrl} name={shortName} className="cursor-pointer hover:opacity-80"></Avatar>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownSection showDivider>
              <DropdownItem onClick={navigateToProfile} description="My Profile">
                <User
                  name={displayName}
                  description={user.email}
                  avatarProps={{
                    src: profileUrl,
                    name: shortName
                  }}
                />
              </DropdownItem>
            </DropdownSection>
            <DropdownItem
              className="text-danger"
              color="danger"
              onClick={() => {logout(router)}}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    );
  } else if(!loading) {
    return (
      <>
        <NavbarItem className="hidden sm:flex">
          <Link
            color="foreground"
            className="hover:text-[var(--primary)]"
            href="/login"
            as={NextLink}
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={NextLink}
            color="secondary"
            href="/register"
            variant="flat"
            className="hover:text-[var(--primary)]"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  } else {
    return (
      <>
        <NavbarItem>
          <CircularProgress></CircularProgress>
        </NavbarItem>
      </>
    )
  }
}

async function logout(router: any) {
  console.log(await logOut());
  router.back();
}
