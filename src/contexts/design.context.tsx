"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { UserAuth } from "./auth.context";
import { fbUser } from "@/models/user.model";

export function DesignContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [init, setInit] = useState(false);
  const { userData, user } = UserAuth();

  useEffect(() => {
    const initializeDarkTheme = async (userObj: fbUser) => {
      const toggleDarkTheme = (shouldAdd: boolean) => {
        document.body.classList.toggle("dark", shouldAdd);
      };

      if (userObj) {
        console.log(userObj);
        if (userObj.preferences.syncDarkMode) {
          toggleDarkTheme(userObj.preferences.darkMode as boolean);
          await localStorage.setItem("dark-mode", (userObj.preferences.darkMode as boolean).toString());
        } else {
          const storedDarkMode = await localStorage.getItem("dark-mode");
          if (storedDarkMode !== null) {
            toggleDarkTheme(storedDarkMode === "true");
          } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
            const initialDarkMode = prefersDark.matches;
            toggleDarkTheme(initialDarkMode);
            await localStorage.setItem("dark-mode", initialDarkMode.toString());
          }
        }
        setInit(true);
      } else {
        const storedDarkMode = await localStorage.getItem("dark-mode");
        if (storedDarkMode !== null) {
          toggleDarkTheme(storedDarkMode === "true");
        } else {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
          const initialDarkMode = prefersDark.matches;
          toggleDarkTheme(initialDarkMode);
          await localStorage.setItem("dark-mode", initialDarkMode.toString());
        }
        setInit(true);
      }
    };

    initializeDarkTheme(userData);
  }, [userData]);

  if (init) {
    return <NextUIProvider>{children}</NextUIProvider>;
  }

  // You can return a loading indicator here if needed while the initialization is in progress.
  return null;
}
