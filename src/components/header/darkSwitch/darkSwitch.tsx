"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { NavbarItem } from "@nextui-org/navbar";

type Props = {
  start: React.ReactNode;
  end: React.ReactNode;
};

const DarkSwitch = ({ start, end }: Props) => {
  const [themeToggle, setThemeToggle] = useState(false);
  const [init, setInit] = useState(false);

  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  const toggleChange = async (ev: any) => {
    toggleDarkTheme(ev.target.checked);
    await localStorage.setItem("dark-mode", ev.target.checked);
  };

  const initializeDarkTheme = async () => {
    const storedDarkMode = document.body.classList.contains('dark');
    setThemeToggle(storedDarkMode);
    toggleDarkTheme(storedDarkMode);
  };

  useEffect(() => {
    initializeDarkTheme();
    setInit(true);
  }, []);

  return (
    <NavbarItem>
      {init && (
        <Switch
          onChange={toggleChange}
          defaultSelected={themeToggle}
          size="lg"
          color="secondary"
          startContent={start}
          endContent={end}
        />
      )}
    </NavbarItem>
  );
};

export default DarkSwitch;
