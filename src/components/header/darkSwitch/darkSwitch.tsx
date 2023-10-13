"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { cn } from "@nextui-org/react";
import { NavbarItem } from "@nextui-org/navbar";
import { UserAuth } from "@/contexts/auth.context";
import { updateDarkMode } from "@/hooks/authService";

type Props = {
  start: React.ReactNode;
  end: React.ReactNode;
  smallScreen: boolean;
};

const DarkSwitch = ({ start, end, smallScreen }: Props) => {
  const { userData } = UserAuth();
  const [themeToggle, setThemeToggle] = useState(false);
  const [init, setInit] = useState(false);

  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  const toggleChange = async (ev: any) => {
    toggleDarkTheme(ev.target.checked);
    await localStorage.setItem("dark-mode", ev.target.checked);
    if (userData.preferences.syncDarkMode) {
      await updateDarkMode(ev.target.checked, userData.id);
    }
  };

  const initializeDarkTheme = async () => {
    let storedDarkMode = document.body.classList.contains("dark");
    if (userData.preferences.syncDarkMode) {
      storedDarkMode = userData.preferences.darkMode;
    }
    setThemeToggle(storedDarkMode);
    toggleDarkTheme(storedDarkMode);
  };

  useEffect(() => {
    if (userData) {
      initializeDarkTheme();
      setInit(true);
    }
  }, [userData]);

  return (
    <NavbarItem className={smallScreen ? "sm:hidden flex" : "hidden sm:flex"}>
      {init && (
        <Switch
          onChange={toggleChange}
          defaultSelected={themeToggle}
          size="lg"
          color="primary"
          className="cursor-pointer hover:opacity-80"
          classNames={{wrapper: cn("bg-secondary")}}
          startContent={start}
          endContent={end}
        />
      )}
    </NavbarItem>
  );
};

export default DarkSwitch;
